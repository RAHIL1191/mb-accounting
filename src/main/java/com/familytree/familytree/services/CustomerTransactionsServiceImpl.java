package com.familytree.familytree.services;

import com.familytree.familytree.Dao.CustomerDao;
import com.familytree.familytree.entities.CustomerTransactions;
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

	public CustomerTransactions getPersonRecentEntry(String firstName){
		Long id = getIdFromName(firstName);
		TypedQuery<CustomerTransactions> c = em.createQuery("SELECT a FROM CustomerTransactions a where a.person.id = :person  ORDER BY a.id desc", CustomerTransactions.class);
		c.setParameter("person", id);
		List<CustomerTransactions> customers = c.getResultList();
		if(CollectionUtils.isEmpty(customers)){
			CustomerTransactions customer =new CustomerTransactions();
			customer.setFirstName(firstName);
			customer.setTransactionEffectiveDate(LocalDate.now());
			customer.setCreditAmountReceived(0);
			customer.setDebitAmountReceived(0);
			return customer;
		}
		CustomerTransactions customer = customers.get(0);
		customer.setFirstName(firstName);
		customer.setTransactionEffectiveDate(LocalDate.now());
		customer.setCreditAmountReceived(0);
		customer.setDebitAmountReceived(0);
		customer.setId(null);
		return customer;
	}

	public List<CustomerTransactions> getCustomerDetails(String firstName){
		Long id = getIdFromName(firstName);
		TypedQuery<CustomerTransactions> q = em.createQuery("SELECT a FROM CustomerTransactions a WHERE a.person.id = :id  ORDER BY a.id desc", CustomerTransactions.class);
		q.setParameter("id", id);
		return q.getResultList();
	}

	@Override
	public CustomerTransactions addEntry(CustomerTransactions family) {
		int amount = family.getTotalAmountPending() - family.getCreditAmountReceived() + family.getDebitAmountReceived();
		family.setTotalAmountPending(amount);
		family.setPerson(getPerson(family.getFirstName()));
		familyDao.save(family);
		return family;
	}

	@Override
	public List<CustomerTransactions> findAllCustomersFromTodayDate() {
		Query  q = em.createQuery(" SELECT a from CustomerTransactions a WHERE a.transactionEffectiveDate = CURRENT_DATE ");
		List<CustomerTransactions> customerList = q.getResultList();
		return	customerList;
	}

	@Override
	public Totals findTotalsFromTodayDate() {
		Query  q = em.createQuery(" SELECT a from CustomerTransactions a WHERE a.transactionEffectiveDate = CURRENT_DATE ");
		List<CustomerTransactions> customerList = q.getResultList();
		String totals =getTotals(customerList);
		LocalDate localDate = LocalDate.now();
		LocalDate open = findPrevDay(localDate);
		Query  qu = em.createQuery(" SELECT a from CustomerTransactions a WHERE a.transactionEffectiveDate = :date ");
		qu.setParameter("date",open);
		List<CustomerTransactions> openingList = qu.getResultList();
		String totalOpeningList = getTotals(openingList);
		Totals total = new Totals();
		total.setEndingBalance(totals);
		total.setOpeningBalance(totalOpeningList);
		total.setTodayDate(LocalDate.now());
		return total;

	}

	@Override
	public Totals findTotalsFromSelectedDate(CustomerTransactions family) {
		Long id = getIdFromName(family.getFirstName());
		TypedQuery<CustomerTransactions> q = em.createQuery("SELECT a FROM CustomerTransactions a WHERE a.transactionEffectiveDate >= :fro  AND a.transactionEffectiveDate<= :to AND a.person.id= :id", CustomerTransactions.class);
		q.setParameter("fro", family.getFromDate());
		q.setParameter("to", family.getToDate());
		q.setParameter("id",id);
		List<CustomerTransactions> customers = q.getResultList();
		String totals = getTotals(customers);
		Totals total = new Totals();
		total.setEndingBalance(totals);
		total.setTodayDate(LocalDate.now());
		return total;
	}

	@Override
	public List<CustomerTransactions> getDateWiseDetails(CustomerTransactions family) {
		Long id = getIdFromName(family.getFirstName());
		TypedQuery<CustomerTransactions> q = em.createQuery("SELECT a FROM CustomerTransactions a WHERE a.transactionEffectiveDate >= :fro  AND a.transactionEffectiveDate<= :to AND a.person.id= :id", CustomerTransactions.class);
		q.setParameter("fro", family.getFromDate());
		q.setParameter("to", family.getToDate());
		q.setParameter("id",id);
		return q.getResultList();
	}

	@Override
	public Totals findTotalsFromDate(CustomerTransactions family) {
		TypedQuery<CustomerTransactions> q = em.createQuery("SELECT a FROM CustomerTransactions a WHERE a.transactionEffectiveDate = :fro", CustomerTransactions.class);
		q.setParameter("fro", family.getFromDate());
		List<CustomerTransactions> customers = q.getResultList();
		String totals = getTotals(customers);
		String totalOpeningList = getTotalOpeningList(family.getFromDate());
		Totals total = new Totals();
		total.setOpeningBalance(totalOpeningList);
		total.setEndingBalance(totals);
		total.setTodayDate(LocalDate.now());
		return total;
	}

	@Override
	public List<CustomerTransactions> getDetailsFromDate(CustomerTransactions family) {
		TypedQuery<CustomerTransactions> q = em.createQuery("SELECT a FROM CustomerTransactions a WHERE a.transactionEffectiveDate = :fro", CustomerTransactions.class);
		q.setParameter("fro", family.getFromDate());
		return q.getResultList();
	}

	@Override
	public CustomerTransactions getEntryDetails(String id) {

		CustomerTransactions customer = familyDao.findById(Long.valueOf(id)).orElse(null);
		if (customer != null) {
			Long voucherNumber = customer.getPerson().getId();
			List<CustomerTransactions> q = em.createQuery("SELECT a FROM CustomerTransactions a WHERE a.person.id = :id order by a.id desc ", CustomerTransactions.class).setParameter("id", voucherNumber).getResultList();
			CustomerTransactions c = q.get(0);
			int amount = c.getTotalAmountPending();
			customer.setTotalAmountPending(amount);
			return  customer;
		}
		return null;
	}

	@Override
	public CustomerTransactions updateEntry(CustomerTransactions transaction) {
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
		List<CustomerTransactions> q = em.createQuery("SELECT a FROM CustomerTransactions a WHERE a.person.id = :id  ", CustomerTransactions.class).setParameter("id", personId).getResultList();
		for (CustomerTransactions customer:q) {
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
		Person person = em.createQuery("SELECT a.person FROM CustomerTransactions a WHERE a.id = :name  ", Person.class).setParameter("name", Long.valueOf(id)).getSingleResult();
		familyDao.deleteById(Long.valueOf(id));
		changingTotalsFromDeletedPerson(person.getId());
	}

	public Long getIdFromName(String name){
		TypedQuery<Person> q = em.createQuery("SELECT a FROM Person a where a.name = :name", Person.class);
		q.setParameter("name", name);
		Person personId = q.getSingleResult();
		return personId.getId();
	}

	public CustomerTransactions getUpdatedTransaction(CustomerTransactions transaction) {
		long personId = transaction.getPerson().getId();
		List<CustomerTransactions> q = em.createQuery("SELECT a FROM CustomerTransactions a WHERE a.person.id = :id  ", CustomerTransactions.class).setParameter("id", personId).getResultList();
		int amounts = 0;
		int finalAmounts=0;
		List<CustomerTransactions> list=new ArrayList<>();
		if(transaction.getId().equals(q.get(0).getId())){
			amounts = -transaction.getCreditAmountReceived() + transaction.getDebitAmountReceived();
			transaction.setTotalAmountPending(amounts);
			familyDao.save(transaction);
		}else{
			for(CustomerTransactions cust:q){
				if(cust.getId().equals(transaction.getId())){
					break;
				}
				amounts = cust.getTotalAmountPending() - transaction.getCreditAmountReceived() + transaction.getDebitAmountReceived();
				transaction.setTotalAmountPending(amounts);
				familyDao.save(transaction);
			}}
		List<CustomerTransactions> reverse = Lists.reverse(q);

		for (CustomerTransactions customer:reverse) {
			if(customer.getId().equals(transaction.getId())){
				break;
			}
			list.add(customer);}
		List<CustomerTransactions> reversed = Lists.reverse(list);

		for (CustomerTransactions customer:reversed) {
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
		Query qu = em.createQuery(" SELECT a from CustomerTransactions a WHERE a.transactionEffectiveDate = :date ");
		qu.setParameter("date",open);
		List<CustomerTransactions> openingList = qu.getResultList();
		return getTotals(openingList);
	}

	public String getTotals(List<CustomerTransactions> cust){
		int creditTotal = cust.stream().map(CustomerTransactions::getCreditAmountReceived).reduce(0,Integer::sum);
		int debitTotal =  cust.stream().map(CustomerTransactions::getDebitAmountReceived).reduce(0,Integer::sum);
		int totals = creditTotal-debitTotal;
		if(creditTotal>debitTotal){
			return totals +" CR";
		}else if(creditTotal<debitTotal) {
			return totals + " DR";
		}
		return "0";
	}


}
	
