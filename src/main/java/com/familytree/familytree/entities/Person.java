package com.familytree.familytree.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    public List<CustomerTransactions> getCustomerTransactions() {
        return customerTransactions;
    }

    public void setCustomerTransactions(List<CustomerTransactions> customerTransactions) {
        this.customerTransactions = customerTransactions;
    }

    @OneToMany(cascade = CascadeType.ALL)
    private List<CustomerTransactions> customerTransactions =new ArrayList<>();

    public Person(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Person() {

    }
}
