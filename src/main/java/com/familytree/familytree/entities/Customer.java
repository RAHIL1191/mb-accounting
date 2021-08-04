package com.familytree.familytree.entities;

import java.time.LocalDate;


import javax.persistence.*;

@Entity
public class Customer {




	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String firstName;
	private LocalDate transactionEffectiveDate;
	private int totalAmountPending;
	private String description;
	private int creditAmountReceived;
	private int debitAmountReceived;
	private String receiptLink;
	private String paymentLink;


	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}

	@ManyToOne
	@JoinColumn(name = "person_id")
	private Person person;



	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}





	public LocalDate getTransactionEffectiveDate() {
		return transactionEffectiveDate;
	}

	public void setTransactionEffectiveDate(LocalDate transactionEffectiveDate) {
		this.transactionEffectiveDate = transactionEffectiveDate;
	}

	public int getCreditAmountReceived() {
		return creditAmountReceived;
	}

	public void setCreditAmountReceived(int creditAmountReceived) {
		this.creditAmountReceived = creditAmountReceived;
	}

	public int getTotalAmountPending() {
		return totalAmountPending;
	}

	public void setTotalAmountPending(int totalAmountPending) {
		this.totalAmountPending = totalAmountPending - getCreditAmountReceived() + getDebitAmountReceived() ;
	}

	public int getDebitAmountReceived() {
		return debitAmountReceived;
	}

	public void setDebitAmountReceived(int debitAmountReceived) {
		this.debitAmountReceived = debitAmountReceived;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getReceiptLink() {
		return receiptLink;
	}

	public void setReceiptink(String receiptLink) {
		this.receiptLink = receiptLink;
	}

	public String getPaymentLink() {
		return paymentLink;
	}

	public void setPaymentLink(String paymentLink) {
		this.paymentLink = paymentLink;
	}
	private LocalDate fromDate;

	public LocalDate getFromDate() {
		return fromDate;
	}

	public void setFromDate(LocalDate fromDate) {
		this.fromDate = fromDate;
	}


	public LocalDate getToDate() {
		return toDate;
	}

	public void setToDate(LocalDate toDate) {
		this.toDate = toDate;
	}

	private LocalDate toDate;

	public Customer(Long id, String firstName,  LocalDate transactionEffectiveDate, int totalAmountPending, int creditAmountReceived, int debitAmountReceived, int endingBalance, String description,Person person) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.transactionEffectiveDate = transactionEffectiveDate;
		this.totalAmountPending = totalAmountPending;
		this.debitAmountReceived = debitAmountReceived;
		this.creditAmountReceived = creditAmountReceived;
		this.description = description;
		this.person = person;

	}

	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
}
