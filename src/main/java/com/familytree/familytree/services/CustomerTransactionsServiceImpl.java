package com.familytree.familytree.services;

import com.familytree.familytree.Dao.CustomerDao;
import com.familytree.familytree.entities.Customer;
import com.familytree.familytree.entities.Person;
import com.familytree.familytree.entities.Totals;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Service
public class CustomerTransactionsServiceImpl implements CustomerTransactionsService {

	@PersistenceContext
	private EntityManager em;

	@Autowired
	private CustomerDao familyDao;

	public CustomerTransactionsServiceImpl() {
	}

	public  Customer getPersonRecentEntry(String firstName){
		Long id = getIdFromName(firstName);
		TypedQuery<Customer> c = em.createQuery("SELECT a FROM Customer a where a.person.id = :person  ORDER BY a.id desc", Customer.class);
		c.setParameter("person", id);
		List<Customer> customers = c.getResultList();
		if(CollectionUtils.isEmpty(customers)){
			Customer customer =new Customer();
			customer.setFirstName(firstName);
			customer.setTransactionEffectiveDate(LocalDate.now());
			customer.setCreditAmountReceived(0);
			customer.setDebitAmountReceived(0);
			return customer;
		}
		Customer customer = customers.get(0);
		customer.setFirstName(firstName);
		customer.setTransactionEffectiveDate(LocalDate.now());
		customer.setCreditAmountReceived(0);
		customer.setDebitAmountReceived(0);
		customer.setId(null);
		return customer;
	}

	public List<Customer> getCustomerDetails(String firstName){
		Long id = getIdFromName(firstName);
		TypedQuery<Customer> q = em.createQuery("SELECT a FROM Customer a WHERE a.person.id = :id  ORDER BY a.id desc", Customer.class);
		q.setParameter("id", id);
		return q.getResultList();
	}

	@Override
	public Customer addEntry(Customer family) {
		String str = null;
		int amount = family.getTotalAmountPending() - family.getCreditAmountReceived() + family.getDebitAmountReceived();
		family.setTotalAmountPending(amount);
		family.setPerson(getPerson(family.getFirstName()));
		familyDao.save(family);
		return family;
	}

	@Override
	public List<Customer> findAllCustomersFromTodayDate() {
		Query  q = em.createQuery(" SELECT a from Customer a WHERE a.transactionEffectiveDate = CURRENT_DATE ");
		List<Customer> customerList = q.getResultList();
		return	customerList;
	}

	@Override
	public Totals findTotalsFromTodayDate() {
		Query  q = em.createQuery(" SELECT a from Customer a WHERE a.transactionEffectiveDate = CURRENT_DATE ");
		List<Customer> customerList = q.getResultList();
		String totals =getTotals(customerList);
		LocalDate localDate = LocalDate.now();
		LocalDate open = findPrevDay(localDate);
		Query  qu = em.createQuery(" SELECT a from Customer a WHERE a.transactionEffectiveDate = :date ");
		qu.setParameter("date",open);
		List<Customer> openingList = qu.getResultList();
		String totalOpeningList = getTotals(openingList);
		Totals total = new Totals();
		total.setEndingBalance(totals);
		total.setOpeningBalance(totalOpeningList);
		total.setTodayDate(LocalDate.now());
		return total;

	}

	@Override
	public Totals findTotalsFromSelectedDate(Customer family) {
		Long id = getIdFromName(family.getFirstName());
		TypedQuery<Customer> q = em.createQuery("SELECT a FROM Customer a WHERE a.transactionEffectiveDate >= :fro  AND a.transactionEffectiveDate<= :to AND a.person.id= :id", Customer.class);
		q.setParameter("fro", family.getFromDate());
		q.setParameter("to", family.getToDate());
		q.setParameter("id",id);
		List<Customer> customers = q.getResultList();
		String totals = getTotals(customers);
		Totals total = new Totals();
		total.setEndingBalance(totals);
		total.setTodayDate(LocalDate.now());
		return total;
	}

	@Override
	public List<Customer> getDateWiseDetails(Customer family) {
		Long id = getIdFromName(family.getFirstName());
		TypedQuery<Customer> q = em.createQuery("SELECT a FROM Customer a WHERE a.transactionEffectiveDate >= :fro  AND a.transactionEffectiveDate<= :to AND a.person.id= :id", Customer.class);
		q.setParameter("fro", family.getFromDate());
		q.setParameter("to", family.getToDate());
		q.setParameter("id",id);
		return q.getResultList();
	}

	@Override
	public Totals findTotalsFromDate(Customer family) {
		TypedQuery<Customer> q = em.createQuery("SELECT a FROM Customer a WHERE a.transactionEffectiveDate = :fro", Customer.class);
		q.setParameter("fro", family.getFromDate());
		List<Customer> customers = q.getResultList();
		String totals = getTotals(customers);
		String totalOpeningList = getTotalOpeningList(family.getFromDate());
		Totals total = new Totals();
		total.setOpeningBalance(totalOpeningList);
		total.setEndingBalance(totals);
		total.setTodayDate(LocalDate.now());
		return total;
	}

	@Override
	public List<Customer> getDetailsFromDate(Customer family) {
		TypedQuery<Customer> q = em.createQuery("SELECT a FROM Customer a WHERE a.transactionEffectiveDate = :fro", Customer.class);
		q.setParameter("fro", family.getFromDate());
		return q.getResultList();
	}

	@Override
	public Customer getEntryDetails(String id) {

	Customer customer = familyDao.findById(Long.valueOf(id)).orElse(null);
		if (customer != null) {
			Long voucherNumber = customer.getPerson().getId();
			List<Customer> q = em.createQuery("SELECT a FROM Customer a WHERE a.person.id = :id order by a.id desc ", Customer.class).setParameter("id", voucherNumber).getResultList();
			Customer c = q.get(0);
			int amount = c.getTotalAmountPending();
			customer.setTotalAmountPending(amount);
			return  customer;
		}
		return null;
	}

	@Override
	public Customer updateEntry(Customer transaction) {
		if (transaction.getFirstName().equals(transaction.getPerson().getName())) {
			return getUpdatedTransaction(transaction);
		}
		String name= transaction.getFirstName();
		Person person = em.createQuery("SELECT a FROM Person a WHERE a.name = :name  ", Person.class).setParameter("name", name).getSingleResult();
		transaction.setPerson(person);
		familyDao.save(transaction);
		changingTotalsFromDeletedPerson(transaction.getPerson().getId());
		return	getUpdatedTransaction(transaction);
	}

	private void changingTotalsFromDeletedPerson(Long personId) {
		int finalAmounts =0;
		int amounts;
		int count =0;
		List<Customer> q = em.createQuery("SELECT a FROM Customer a WHERE a.person.id = :id  ", Customer.class).setParameter("id", personId).getResultList();
		for (Customer customer:q) {
			if(count == 0){
				count =1;
				 finalAmounts = - customer.getCreditAmountReceived() + customer.getDebitAmountReceived();
				customer.setTotalAmountPending(finalAmounts);
				familyDao.save(customer);
				continue;
			}
			 amounts= finalAmounts - customer.getCreditAmountReceived() + customer.getDebitAmountReceived();
			customer.setTotalAmountPending(amounts);
			familyDao.save(customer);
			finalAmounts =amounts;
		}
	}

	@Override
	public void deleteCustomerTransaction(String id) {
		Person person = em.createQuery("SELECT a.person FROM Customer a WHERE a.id = :name  ", Person.class).setParameter("name", Long.valueOf(id)).getSingleResult();
		familyDao.deleteById(Long.valueOf(id));
		changingTotalsFromDeletedPerson(person.getId());
	}

	public Long getIdFromName(String name){
		TypedQuery<Person> q = em.createQuery("SELECT a FROM Person a where a.name = :name", Person.class);
		q.setParameter("name", name);
		Person personId = q.getSingleResult();
		return personId.getId();
	}

	public Customer getUpdatedTransaction(Customer transaction) {
		long personId = transaction.getPerson().getId();
		List<Customer> q = em.createQuery("SELECT a FROM Customer a WHERE a.person.id = :id  ", Customer.class).setParameter("id", personId).getResultList();
		int amounts = 0;
		int finalAmounts=0;
		List<Customer> list=new ArrayList<>();
		if(transaction.getId().equals(q.get(0).getId())){
			amounts = -transaction.getCreditAmountReceived() + transaction.getDebitAmountReceived();
			transaction.setTotalAmountPending(amounts);
			familyDao.save(transaction);
		}else{
			for(Customer cust:q){
				if(cust.getId().equals(transaction.getId())){
					break;
				}
				amounts = cust.getTotalAmountPending() - transaction.getCreditAmountReceived() + transaction.getDebitAmountReceived();
				transaction.setTotalAmountPending(amounts);
				familyDao.save(transaction);
			}}
		List<Customer> reverse = Lists.reverse(q);

		for (Customer customer:reverse) {
			if(customer.getId().equals(transaction.getId())){
				break;
			}
			list.add(customer);}
		List<Customer> reversed = Lists.reverse(list);

		for (Customer customer:reversed) {
			finalAmounts= amounts - customer.getCreditAmountReceived() + customer.getDebitAmountReceived();
			customer.setTotalAmountPending(finalAmounts);
			familyDao.save(customer);
			amounts =finalAmounts;
		}
		transaction.setAmountPendingEntry(finalAmounts);
		return transaction;
	}

	public Person getPerson(String name){
		TypedQuery<Person> q = em.createQuery("SELECT a FROM Person a WHERE a.name = :fname ", Person.class);
		q.setParameter("fname", name);
		return q.getResultList().get(0);
	}

	static LocalDate findPrevDay(LocalDate localdate)
	{
		return localdate.minusDays(1);
	}

	public String getTotalOpeningList(LocalDate fromDate) {
		LocalDate open = findPrevDay(fromDate);
		Query qu = em.createQuery(" SELECT a from Customer a WHERE a.transactionEffectiveDate = :date ");
		qu.setParameter("date",open);
		List<Customer> openingList = qu.getResultList();
		return getTotals(openingList);
	}

	public String getTotals(List<Customer> cust){
		int creditTotal = cust.stream().map(Customer::getCreditAmountReceived).reduce(0,Integer::sum);
		int debitTotal =  cust.stream().map(Customer::getDebitAmountReceived).reduce(0,Integer::sum);
		int totals = creditTotal-debitTotal;
		if(creditTotal>debitTotal){
			return totals +" CR";
		}else if(creditTotal<debitTotal) {
			return totals + " DR";
		}
		return "0";
	}


}
	
