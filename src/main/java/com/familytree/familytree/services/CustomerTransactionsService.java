package com.familytree.familytree.services;

import com.familytree.familytree.entities.CustomerTransactions;
import com.familytree.familytree.entities.Totals;

import java.util.List;

public interface CustomerTransactionsService {

	 List<CustomerTransactions>  getCustomerDetails(String firstName);

	CustomerTransactions getPersonRecentEntry(String firstName);

	CustomerTransactions addEntry(CustomerTransactions family);

	 List<CustomerTransactions> findAllCustomersFromTodayDate();

	 Totals findTotalsFromTodayDate();

	 Totals findTotalsFromSelectedDate(CustomerTransactions family);

	 List<CustomerTransactions> getDateWiseDetails(CustomerTransactions family);

	 Totals findTotalsFromDate(CustomerTransactions family);

	 List<CustomerTransactions> getDetailsFromDate(CustomerTransactions family);

	CustomerTransactions getEntryDetails(String id);

	CustomerTransactions updateEntry(CustomerTransactions family);

	void deleteCustomerTransaction(String id);
}
