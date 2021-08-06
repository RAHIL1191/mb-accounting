package com.familytree.familytree.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import com.familytree.familytree.entities.Customer;
import com.familytree.familytree.entities.Dates;
import com.familytree.familytree.entities.Person;
import com.familytree.familytree.entities.Totals;

public interface CustomerService {

	public List<Customer>  getCustomerDetails(String firstName);

	public Person getCustomerName(String id);

	public  Customer getFamilyDetails(String firstName);

	public String addCustomer(Person family);

	public String updateCustomer(String id ,Person person);

	public Customer addEntry(Customer family);

	public void deleteCustomer(String id);

	public List<Person> findAllCustomers();

	public List<Customer> findAllCustomersFromTodayDate();

	public Totals findTotalsFromTodayDate();

	public Totals findTotalsFromSelectedDate(Customer family);

	List<Customer> getDateWiseDetails(Customer family);

	Totals findTotalsFromDate(Customer family);

	List<Customer> getDetailsFromDate(Customer family);
}
