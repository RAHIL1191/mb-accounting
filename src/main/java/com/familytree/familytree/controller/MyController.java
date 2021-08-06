package com.familytree.familytree.controller;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import com.familytree.familytree.entities.Dates;
import com.familytree.familytree.entities.Person;
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

	@GetMapping("/customer/person/{id}")
	public ResponseEntity<Person> getPersonDetails(@PathVariable String id) {
		try {
			Person person =  this.familyService.getCustomerName(id);
			if(person != null) {
				return new ResponseEntity<>(person, HttpStatus.OK);
			}else {
				return new ResponseEntity<>((Person) null, HttpStatus.NOT_FOUND);
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
	public Collection<Person>  findAllCustomers(){
		return this.familyService.findAllCustomers();
	}

	@PostMapping("/customer")
	public ResponseEntity<String> addCustomer(@RequestBody Person family) {
		try {
			String customer = this.familyService.addCustomer(family);
			return new ResponseEntity<String>(customer, HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// for adding entry from cash receipt or cash payment page
	@PutMapping("/customer")
	public Customer UpdateFamily(@RequestBody Customer family) {
		return this.familyService.addEntry(family);
	}

	//for deleting  customer name
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

	// find all customers from today's date on cashbook page
	@GetMapping("/customer/balance")
	public Collection<Customer> findAllCustomersFromTodayDate(){
		return this.familyService.findAllCustomersFromTodayDate();
	}

	//get ending balance for cashbook page for today's date
	@GetMapping("/customer/endingBalance")
	public Totals findTotalsFromTodayDate(){
		return this.familyService.findTotalsFromTodayDate();
	}

	//get ending balance for cashbook page for today's date
	@PutMapping("customer/getListFromDate")
	public Totals findTotalsFromDate(@RequestBody Customer family){
		return this.familyService.findTotalsFromDate(family);
	}

	//for getting list of customer when search through particular date on cashbook page
	@PutMapping("/customer/datewiseDetails")
	public List<Customer> getDetailsFromDate(@RequestBody Customer family){
		return this.familyService.getDetailsFromDate(family);
	}

	//for updating customer name
	@PutMapping("customer/updateCustomer/{id}")
	public ResponseEntity<String> updateCustomer(@PathVariable String id,@RequestBody Person person){
		try{
			String customer = this.familyService.updateCustomer(id,person);
			return new ResponseEntity<String>(customer, HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	//for getting ending balance for ledger page
	@PutMapping("/customer/endingDateWiseBalance")
	public Totals findTotalsFromSelectedDate(@RequestBody Customer family){
		return this.familyService.findTotalsFromSelectedDate(family);
	}

	// for getting list of entries for ledger page
	@PutMapping("/customer/datewise")
	public List<Customer> getDetailsFRomToDate(@RequestBody Customer family){
		return this.familyService.getDateWiseDetails(family);
	}


}
