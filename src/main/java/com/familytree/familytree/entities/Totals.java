package com.familytree.familytree.entities;

import java.time.LocalDate;

public class Totals {

    public Totals() {
        super();
    }

    private LocalDate todayDate;
    private String endingBalance;
    private String openingBalance;

    public LocalDate getTodayDate() {
        return todayDate;
    }

    public void setTodayDate(LocalDate todayDate) {
        this.todayDate = todayDate;
    }

    public String getEndingBalance() {
        return endingBalance;
    }

    public void setEndingBalance(String endingBalance) {
        this.endingBalance = endingBalance;
    }

    public String getOpeningBalance() {
        return openingBalance;
    }

    public void setOpeningBalance(String openingBalance) {
        this.openingBalance = openingBalance;
    }


}
