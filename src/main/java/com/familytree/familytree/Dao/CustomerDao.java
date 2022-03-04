package com.familytree.familytree.Dao;

import com.familytree.familytree.entities.CustomerTransactions;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerDao extends JpaRepository<CustomerTransactions,Long> {

//	List<Customer> findByFirstNameAndLastName(String firstName, String lastName);


}
