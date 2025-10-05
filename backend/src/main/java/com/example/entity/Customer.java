package com.example.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Customer {
    @Id
    private String idCustomer;
    private String surname;
    private String name;
    private String gender;
    private String phone;
    private String email;
    private String address;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "userName", referencedColumnName = "userName")
    private Account account;
    private int status;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Bill> bills;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    @JsonIgnore
    Set<Evaluates> evaluates;

    public Customer() {
    }

    public Customer(String idCustomer, String surname, String name, String gender, String phone, String email,
            String address, Account account, int status) {
        this.idCustomer = idCustomer;
        this.surname = surname;
        this.name = name;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.account = account;
        this.status = status;
    }

    public Customer(String idCustomer, String surname, String name, String gender, String phone, String email,
            String address, Account account, int status, Set<Bill> bills) {
        this.idCustomer = idCustomer;
        this.surname = surname;
        this.name = name;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.account = account;
        this.status = status;
        this.bills = bills;
    }

    public Customer(String idCustomer, String surname, String name, String gender, String phone, String email,
            String address, Account account, int status, Set<Bill> bills, Set<Evaluates> evaluates) {
        this.idCustomer = idCustomer;
        this.surname = surname;
        this.name = name;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.account = account;
        this.status = status;
        this.bills = bills;
        this.evaluates = evaluates;
    }

    public Set<Evaluates> getEvaluates() {
        return evaluates;
    }

    public void setEvaluates(Set<Evaluates> evaluates) {
        this.evaluates = evaluates;
    }

    public Set<Bill> getBills() {
        return bills;
    }

    public void setBills(Set<Bill> bills) {
        this.bills = bills;
    }

    public String getIdCustomer() {
        return idCustomer;
    }

    public void setIdCustomer(String idCustomer) {
        this.idCustomer = idCustomer;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
