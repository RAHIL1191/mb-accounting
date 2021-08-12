package com.familytree.familytree.Dao;

import com.familytree.familytree.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerDao extends JpaRepository<Customer,Long> {

//	List<Customer> findByFirstNameAndLastName(String firstName, String lastName);


}
