package com.familytree.familytree.services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import com.familytree.familytree.Dao.PersonDao;
import com.familytree.familytree.entities.Dates;
import com.familytree.familytree.entities.Person;
import com.familytree.familytree.entities.Totals;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.familytree.familytree.Dao.CustomerDao;
import com.familytree.familytree.entities.Customer;

@Service
public class CustomerServiceImpl implements CustomerService {

	@PersistenceContext
	private EntityManager em;

	@Autowired
	private CustomerDao familyDao;
	@Autowired
	private PersonDao personDao;

	public CustomerServiceImpl() {
	}

	public  Customer getFamilyDetails(String firstName){
		TypedQuery<Customer> q = em.createQuery("SELECT a FROM Customer a WHERE a.firstName = :fname ORDER BY a.firstName,a.id desc", Customer.class);
		q.setParameter("fname", firstName);
		List<Customer> customers = q.getResultList();
		if(CollectionUtils.isEmpty(customers)){
			Customer customer =new Customer();
			customer.setFirstName(firstName);
			customer.setTransactionEffectiveDate(LocalDate.now());
			customer.setCreditAmountReceived(0);
			customer.setDebitAmountReceived(0);
			return customer;
		}
		Customer c = customers.get(0);
		c.setTransactionEffectiveDate(LocalDate.now());
		c.setCreditAmountReceived(0);
		c.setDebitAmountReceived(0);
		c.setId(null);
		return c;
	}

	public List<Customer> getCustomerDetails(String firstName){
		TypedQuery<Customer> q = em.createQuery("SELECT a FROM Customer a WHERE a.firstName = :fname  ORDER BY a.firstName,a.id desc", Customer.class);
		q.setParameter("fname", firstName);
		return q.getResultList();
	}

	@Override
	public String addCustomer(Person family) {
		List<Person> customers = personDao.findAll();
		if(CollectionUtils.isEmpty(customers)) {
//			family.getCustomer().get(0).setFirstName(family.getName());
			personDao.save(family);
			return "Customer Successfully Added";
		}
		Person j = customers.stream().filter(r -> r.getName().equals(family.getName())).findFirst().orElse(null);
		if(j == null) {
//			family.getCustomer().get(0).setFirstName(family.getName());
			personDao.save(family);
			return "Customer Successfully Added";
		}else{
			return "Customer Already Exists";
		}}

	private Person getPerson(String name){
		TypedQuery<Person> q = em.createQuery("SELECT a FROM Person a WHERE a.name = :fname ", Person.class);
		q.setParameter("fname", name);
		return q.getResultList().get(0);
	}

	@Override
	public Customer addEntry(Customer family) {
		family.setTotalAmountPending(family.getTotalAmountPending());
		family.setPerson(getPerson(family.getFirstName()));
		familyDao.save(family);
		return family;
	}

	@Override
	public void deleteCustomer(String id) {
		personDao.deleteById(Long.valueOf(id));
	}

	@Override
	public List<Person> findAllCustomers() {
//		Query  q = em.createQuery(" SELECT a from Customer a GROUP BY a.firstName");
//		List<Customer> familyy = q.getResultList();
//	    return	familyy;
		return personDao.findAll();
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
		return getTotals(customerList);
	}

	private Totals getTotals(List<Customer> cust){
		int creditTotal = cust.stream().map(Customer::getCreditAmountReceived).reduce(0,Integer::sum);
		int debitTotal =  cust.stream().map(Customer::getDebitAmountReceived).reduce(0,Integer::sum);
		int totals = creditTotal-debitTotal;
		Totals total = new Totals();
		total.setEndingBalance(totals);
		total.setTodayDate(LocalDate.now());
		return	total;
	}

	@Override
	public Totals findTotalsFromSelectedDate(Customer family) {
		TypedQuery<Customer> q = em.createQuery("SELECT a FROM Customer a WHERE a.transactionEffectiveDate >= :fro  AND a.transactionEffectiveDate<= :to AND a.firstName= :fname", Customer.class);
		q.setParameter("fro", family.getFromDate());
		q.setParameter("to", family.getToDate());
		q.setParameter("fname", family.getFirstName());
		List<Customer> cust = q.getResultList();
		return getTotals(cust);
	}

	@Override
	public List<Customer> getdateWiseDetails(Customer family) {
		TypedQuery<Customer> q = em.createQuery("SELECT a FROM Customer a WHERE a.transactionEffectiveDate >= :fro  AND a.transactionEffectiveDate<= :to AND a.firstName= :fname", Customer.class);
		q.setParameter("fro", family.getFromDate());
		q.setParameter("to", family.getToDate());
		q.setParameter("fname", family.getFirstName());
		List<Customer> cust = q.getResultList();
		return cust;
	}

}
	
