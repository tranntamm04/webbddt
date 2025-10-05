package com.example.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class Evaluate {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idEvaluate;
    private int numberOfStar;
    private String comment;
    private String dateFounded;

    @ManyToOne(targetEntity = Product.class)
    @JoinColumn(name = "idProduct", referencedColumnName = "idProduct")
    @JsonBackReference
    private Product product;

    public Evaluate() {
    }

    public Evaluate(int idEvaluate, int numberOfStar, String comment, String dateFounded, Product product) {
        this.idEvaluate = idEvaluate;
        this.numberOfStar = numberOfStar;
        this.comment = comment;
        this.dateFounded = dateFounded;
        this.product = product;
    }

    public int getIdEvaluate() {
        return idEvaluate;
    }

    public void setIdEvaluate(int idEvaluate) {
        this.idEvaluate = idEvaluate;
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

    public String getDateFounded() {
        return dateFounded;
    }

    public void setDateFounded(String dateFounded) {
        this.dateFounded = dateFounded;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
