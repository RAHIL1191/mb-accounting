package com.familytree.familytree.controller;

import com.familytree.familytree.entities.CustomerTransactions;
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

    private final CustomerTransactionsService customerTransactionsService;

    public CustomerTransactionsController(CustomerTransactionsService familyService) {
        this.customerTransactionsService = familyService;
    }

    //To fetch the  last entry for the name selected, on Cash Receipt Page.

    @GetMapping("/customer/{firstName}")
    public ResponseEntity<CustomerTransactions> getPersonRecentEntry(@PathVariable String firstName) {
        try {
            CustomerTransactions family =  this.customerTransactionsService.getPersonRecentEntry(firstName);
            if(family != null) {
                return new ResponseEntity<>(family, HttpStatus.OK);
            }else {
                return new ResponseEntity<>((CustomerTransactions) null, HttpStatus.NOT_FOUND);
            }
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //To fetch the Customer transaction based on id provided on Clicking UpdateEntry on receipt or payment page

    @GetMapping("/customer/entry/{id}")
    public CustomerTransactions getEntryDetails(@PathVariable String id){
        return this.customerTransactionsService.getEntryDetails(id);
    }

    // To fetch Customer Transactions on clicking on  "view customers" from all customers page

    @GetMapping("/customer/details/{firstName}")
    public ResponseEntity<List<CustomerTransactions>> getCustomerDetails(@PathVariable String firstName) {
        try {
            List<CustomerTransactions> family =  this.customerTransactionsService.getCustomerDetails(firstName);
            if(family != null) {
                return new ResponseEntity<>(family, HttpStatus.OK);
            }else {
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // for adding entry from cash receipt or cash payment page

    @PutMapping("/customer")
    public CustomerTransactions UpdateFamily(@RequestBody CustomerTransactions family) {
        return this.customerTransactionsService.addEntry(family);
    }

    // find all customers from today's date on cashbook page

    @GetMapping("/customer/balance")
    public Collection<CustomerTransactions> findAllCustomersFromTodayDate(){
        return this.customerTransactionsService.findAllCustomersFromTodayDate();
    }

    //get ending balance for cashbook page for today's date

    @GetMapping("/customer/endingBalance")
    public Totals findTotalsFromTodayDate(){
        return this.customerTransactionsService.findTotalsFromTodayDate();
    }

    //get ending balance for cashbook page for selected date

    @PutMapping("customer/getListFromDate")
    public Totals findTotalsFromDate(@RequestBody CustomerTransactions family){
        return this.customerTransactionsService.findTotalsFromDate(family);
    }

    //for getting list of customer when search through particular date on cashbook page

    @PutMapping("/customer/datewiseDetails")
    public List<CustomerTransactions> getDetailsFromDate(@RequestBody CustomerTransactions family){
        return this.customerTransactionsService.getDetailsFromDate(family);
    }

    //for getting ending balance for ledger page

    @PutMapping("/customer/endingDateWiseBalance")
    public Totals findTotalsFromSelectedDate(@RequestBody CustomerTransactions family){
        return this.customerTransactionsService.findTotalsFromSelectedDate(family);
    }

    // for getting list of entries for ledger page

    @PutMapping("/customer/datewise")
    public List<CustomerTransactions> getDetailsFRomToDate(@RequestBody CustomerTransactions family){
        return this.customerTransactionsService.getDateWiseDetails(family);
    }

    @PutMapping("/customer/updateEntry")
    public CustomerTransactions updateEntry(@RequestBody CustomerTransactions family) {
        return this.customerTransactionsService.updateEntry(family);
    }

    @DeleteMapping("/customer/deleteEntry/{id}")
    public ResponseEntity<HttpStatus> deleteEntry(@PathVariable String id) {
        try{
            this.customerTransactionsService.deleteCustomerTransaction(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
