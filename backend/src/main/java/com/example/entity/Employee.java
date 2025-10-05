package com.example.entity;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class Employee {
    @Id
    @NotBlank
    private String idEmployee;
    private String fullName;
    private String dateOfBirth;
    private String email;
    private String address;
    private String phone;
    private String avtUrl;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "userName", referencedColumnName = "userName")
    private Account account;

    @ManyToOne(targetEntity = Position.class)
    @JoinColumn(name = "positionId", referencedColumnName = "positionId")
    private Position position;

    public Employee() {
    }

    public Employee(@NotBlank String idEmployee, String fullName, String dateOfBirth, String email, String address,
            String phone, String avtUrl, Account account, Position position) {
        this.idEmployee = idEmployee;
        this.fullName = fullName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.avtUrl = avtUrl;
        this.account = account;
        this.position = position;
    }

    public String getIdEmployee() {
        return idEmployee;
    }

    public void setIdEmployee(String idEmployee) {
        this.idEmployee = idEmployee;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAvtUrl() {
        return avtUrl;
    }

    public void setAvtUrl(String avtUrl) {
        this.avtUrl = avtUrl;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }
}
