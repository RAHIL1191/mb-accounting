package com.familytree.familytree.entities;

import java.time.LocalDate;
import java.util.Date;

public class Totals {
    public Totals() {
        super();
    }

    public int getEndingBalance() {
        return endingBalance;
    }

    public void setEndingBalance(int endingBalance) {
        this.endingBalance = endingBalance;
    }

    private  int endingBalance;

    public LocalDate getTodayDate() {
        return todayDate;
    }

    public void setTodayDate(LocalDate todayDate) {
        this.todayDate = todayDate;
    }

    private LocalDate todayDate;
}
