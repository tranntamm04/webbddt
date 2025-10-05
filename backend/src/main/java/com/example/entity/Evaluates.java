package com.example.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Evaluates {
    @EmbeddedId
    private EvaluateKey id;

    @ManyToOne
    @MapsId("idProduct")
    @JoinColumn(name = "id_product")
    private Product product;

    @ManyToOne
    @MapsId("idCustomer")
    @JoinColumn(name = "id_customer")
    private Customer customer;

    private int numberOfStar;
    private String comment;
    private LocalDate dateFounded;

    public Evaluates() {
    }

    public Evaluates(EvaluateKey id, Product product, Customer customer, int numberOfStar, String comment,
            LocalDate dateFounded) {
        this.id = id;
        this.product = product;
        this.customer = customer;
        this.numberOfStar = numberOfStar;
        this.comment = comment;
        this.dateFounded = dateFounded;
    }

    public EvaluateKey getId() {
        return id;
    }

    public void setId(EvaluateKey id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public int getNumberOfStar() {
        return numberOfStar;
    }

    public void setNumberOfStar(int numberOfStar) {
        this.numberOfStar = numberOfStar;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public LocalDate getDateFounded() {
        return dateFounded;
    }

    public void setDateFounded(LocalDate dateFounded) {
        this.dateFounded = dateFounded;
    }
}
