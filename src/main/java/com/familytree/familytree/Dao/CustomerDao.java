package com.familytree.familytree.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.familytree.familytree.entities.Customer;

import java.util.List;

public interface CustomerDao extends JpaRepository<Customer,Long> {

	List<Customer> findByFirstNameAndLastName(String firstName, String lastName);
}
