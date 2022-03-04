package com.familytree.familytree.controller;

import com.familytree.familytree.entities.Person;
import com.familytree.familytree.services.PersonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin("*")
@RestController
public class CustomerController {
	
	private final PersonService personService;

	public CustomerController(PersonService personService) {
		this.personService = personService;
	}

	/* To fetch all the customers to show on various pages*/

	@GetMapping("/customer")
	public Collection<Person>  findAllCustomers(){
		return this.personService.findAllCustomers();
	}

	/* To add the  new customer from ADD CUSTOMER PAGE*/
	@PostMapping("/customer")
	public ResponseEntity<String> addPerson(@RequestBody Person family) {
		try {
			String customer = this.personService.addPerson(family);
			return new ResponseEntity<>(customer, HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	//for deleting  customer name

	@DeleteMapping("/customer/{id}")
	public ResponseEntity<HttpStatus> deletePerson(@PathVariable String id) {
		   try{
			   this.personService.deletePerson(id);
			   return new ResponseEntity<>(HttpStatus.OK);
		   }
		   catch(Exception e) {
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		   }		
	}

	//for updating customer name

	@PutMapping("customer/updateCustomer/{id}")
	public ResponseEntity<String> updateCustomer(@PathVariable String id,@RequestBody Person person){
		try{
			String customer = this.personService.updateCustomer(id,person);
			return new ResponseEntity<>(customer, HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}




}
