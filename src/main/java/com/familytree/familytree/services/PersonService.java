package com.familytree.familytree.services;

import com.familytree.familytree.entities.Person;

import java.util.List;

public interface PersonService {

      List<Person> findAllCustomers();

      String addPerson(Person family);

      void deletePerson(String id);

      String updateCustomer(String id ,Person person);

}
