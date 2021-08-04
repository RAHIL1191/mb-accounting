package com.familytree.familytree.services;

import java.time.LocalDate;
import java.util.List;

import com.familytree.familytree.entities.Customer;
import com.familytree.familytree.entities.Dates;
import com.familytree.familytree.entities.Person;
import com.familytree.familytree.entities.Totals;

public interface CustomerService {

	public List<Customer>  getCustomerDetails(String firstName);

	public  Customer getFamilyDetails(String firstName);

	public String addCustomer(Person family);

	public Customer addEntry(Customer family);

	public void deleteCustomer(String id);

	public List<Person> findAllCustomers();

	public List<Customer> findAllCustomersFromTodayDate();

	public Totals findTotalsFromTodayDate();

	public Totals findTotalsFromSelectedDate(Customer family);

	List<Customer> getdateWiseDetails(Customer family);
}
