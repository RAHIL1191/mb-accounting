package com.familytree.familytree.services;

import com.familytree.familytree.entities.Customer;
import com.familytree.familytree.entities.Totals;

import java.util.List;

public interface CustomerTransactionsService {

	 List<Customer>  getCustomerDetails(String firstName);

	 Customer getPersonRecentEntry(String firstName);

	 Customer addEntry(Customer family);

	 List<Customer> findAllCustomersFromTodayDate();

	 Totals findTotalsFromTodayDate();

	 Totals findTotalsFromSelectedDate(Customer family);

	 List<Customer> getDateWiseDetails(Customer family);

	 Totals findTotalsFromDate(Customer family);

	 List<Customer> getDetailsFromDate(Customer family);

	 Customer getEntryDetails(String id);

	Customer updateEntry(Customer family);

	void deleteCustomerTransaction(String id);
}
