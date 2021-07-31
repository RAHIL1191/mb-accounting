package com.familytree.familytree.services;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import com.familytree.familytree.entities.Dates;
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
	
	public CustomerServiceImpl() {
}

	public  Customer getFamilyDetails(String firstName){
		TypedQuery<Customer> q = em.createQuery("SELECT a FROM Customer a WHERE a.firstName = :fname ORDER BY a.firstName,a.id desc", Customer.class);
		q.setParameter("fname", firstName);
		List<Customer> customers = q.getResultList();
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
	public String addCustomer(Customer family) {
		List<Customer> customers = familyDao.findAll();
		if(CollectionUtils.isEmpty(customers)) {
			family.setReceiptink("/addreceipt-customer/" +family.getFirstName());
			family.setPaymentLink("/addpayment-customer/" +family.getFirstName());
			familyDao.save(family);
			return "Customer Successfully Added";
		}
		Customer j = customers.stream().filter(r -> r.getFirstName().equals(family.getFirstName())).findFirst().orElse(null);
		if(j == null) {
			family.setReceiptink("/addreceipt-customer/" +family.getFirstName());
			family.setPaymentLink("/addpayment-customer/" +family.getFirstName());
			familyDao.save(family);
			return "Customer Successfully Added";
		}else{
		return "Customer Already Exists";
	}}

	@Override
	public Customer addEntry(Customer family) {
		family.setTotalAmountPending(family.getTotalAmountPending());
		familyDao.save(family);
		return family;
	}

	@Override
	public void deleteCustomer(String id) {
		familyDao.deleteById(Long.valueOf(id));
		}

	@Override
	public List<Customer> findAllCustomers() {
		Query  q = em.createQuery(" SELECT a from Customer a GROUP BY a.firstName,a.id");
		List<Customer> familyy = q.getResultList();
	    return	familyy;
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
	
