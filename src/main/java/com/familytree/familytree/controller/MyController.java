package com.familytree.familytree.controller;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

import com.familytree.familytree.entities.Dates;
import com.familytree.familytree.entities.Totals;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.familytree.familytree.entities.Customer;
import com.familytree.familytree.services.CustomerService;

@CrossOrigin("*")
@RestController
public class MyController {
	
	private final CustomerService familyService;

	public MyController(CustomerService familyService) {
		this.familyService = familyService;
	}

	@GetMapping("/customer/{firstName}")
	public ResponseEntity<Customer> getFamilyDetails(@PathVariable String firstName) {
		try {
		Customer family =  this.familyService.getFamilyDetails(firstName);
		if(family != null) {
			return new ResponseEntity <Customer>(family,HttpStatus.OK);
			}else {
			 return new ResponseEntity<Customer>(family,HttpStatus.NOT_FOUND);
			}
		}
		catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/customer/details/{firstName}")
	public ResponseEntity<List<Customer>> getCustomerDetails(@PathVariable String firstName) {
		try {
			List<Customer> family =  this.familyService.getCustomerDetails(firstName);
			if(family != null) {
				return new ResponseEntity <List<Customer>>(family,HttpStatus.OK);
			}else {
				return new ResponseEntity<List<Customer>>(family,HttpStatus.NOT_FOUND);
			}
		}
		catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}


	@GetMapping("/customer")
	public Collection<Customer>  findAllCustomers(){
		return this.familyService.findAllCustomers();
	}

	@GetMapping("/customer/balance")
	public Collection<Customer> findAllCustomersFromTodayDate(){
		return this.familyService.findAllCustomersFromTodayDate();
	}
	
	@PostMapping("/customer")
	public ResponseEntity<String> addCustomer(@RequestBody Customer family) {
		try {
			String customer = this.familyService.addCustomer(family);
			return new ResponseEntity<String>(customer, HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/customer")
	public Customer UpdateFamily(@RequestBody Customer family) {
		return this.familyService.addEntry(family);
	}
	
	@DeleteMapping("/customer/{id}")
	public ResponseEntity<HttpStatus>deleteFamily(@PathVariable String id) {
		   try{
			   this.familyService.deleteCustomer(id);
			   return new ResponseEntity<>(HttpStatus.OK);
		   }
		   catch(Exception e) {
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		   }		
	}

	@GetMapping("/customer/endingBalance")
	public Totals findTotalsFromTodayDate(){
		return this.familyService.findTotalsFromTodayDate();
	}

	@PutMapping("/customer/endingDateWiseBalance")
	public Totals findTotalsFromSelectedDate(@RequestBody Customer family){
		return this.familyService.findTotalsFromSelectedDate(family);
	}

	@PutMapping("/customer/datewise")
	public List<Customer> getDetailsFRomToDate(@RequestBody Customer family){
		return this.familyService.getdateWiseDetails(family);
	}

}
