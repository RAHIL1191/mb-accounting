package com.familytree.familytree.controller;

import com.familytree.familytree.entities.Customer;
import com.familytree.familytree.entities.Totals;
import com.familytree.familytree.services.CustomerTransactionsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@CrossOrigin("*")
@RestController
public class CustomerTransactionsController {

    private final CustomerTransactionsService familyService;

    public CustomerTransactionsController(CustomerTransactionsService familyService) {
        this.familyService = familyService;
    }

    //To fetch the  last entry for the name selected, on Cash Receipt Page.

    @GetMapping("/customer/{firstName}")
    public ResponseEntity<Customer> getPersonRecentEntry(@PathVariable String firstName) {
        try {
            Customer family =  this.familyService.getPersonRecentEntry(firstName);
            if(family != null) {
                return new ResponseEntity <Customer>(family, HttpStatus.OK);
            }else {
                return new ResponseEntity<Customer>((Customer) null,HttpStatus.NOT_FOUND);
            }
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //To fetch the Customer transaction based on id provided on Clicking UpdateEntry on receipt or payment page

    @GetMapping("/customer/entry/{id}")
    public Customer getEntryDetails(@PathVariable String id){
        return this.familyService.getEntryDetails(id);
    }

    // To fetch Customer Transactions on clicking on  "view customers" from all customers page

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

    // for adding entry from cash receipt or cash payment page

    @PutMapping("/customer")
    public Customer UpdateFamily(@RequestBody Customer family) {
        return this.familyService.addEntry(family);
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

    //get ending balance for cashbook page for selected date

    @PutMapping("customer/getListFromDate")
    public Totals findTotalsFromDate(@RequestBody Customer family){
        return this.familyService.findTotalsFromDate(family);
    }

    //for getting list of customer when search through particular date on cashbook page

    @PutMapping("/customer/datewiseDetails")
    public List<Customer> getDetailsFromDate(@RequestBody Customer family){
        return this.familyService.getDetailsFromDate(family);
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

    @PutMapping("/customer/updateEntry")
    public Customer updateEntry(@RequestBody Customer family) {
        return this.familyService.updateEntry(family);
    }

    @DeleteMapping("/customer/deleteEntry/{id}")
    public ResponseEntity<HttpStatus> deleteEntry(@PathVariable String id) {
        try{
            this.familyService.deleteCustomerTransaction(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
