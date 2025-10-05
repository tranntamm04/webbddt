package com.example.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Promotion {
    @Id
    private int idPromotion;
    private String namePromotion;
    private String typePromotion;
    private float promotionalValue;
    private String dateStart;
    private String dateEnd;

    @OneToMany(mappedBy = "promotion", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Product> products;

    public Promotion() {
    }

    public Promotion(int idPromotion, String namePromotion, String typePromotion, float promotionalValue,
            String dateStart, String dateEnd, Set<Product> products) {
        this.idPromotion = idPromotion;
        this.namePromotion = namePromotion;
        this.typePromotion = typePromotion;
        this.promotionalValue = promotionalValue;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.products = products;
    }

    public int getIdPromotion() {
        return idPromotion;
    }

    public void setIdPromotion(int idPromotion) {
        this.idPromotion = idPromotion;
    }

    public String getNamePromotion() {
        return namePromotion;
    }

    public void setNamePromotion(String namePromotion) {
        this.namePromotion = namePromotion;
    }

    public String getTypePromotion() {
        return typePromotion;
    }

    public void setTypePromotion(String typePromotion) {
        this.typePromotion = typePromotion;
    }

    public float getPromotionalValue() {
        return promotionalValue;
    }

    public void setPromotionalValue(float promotionalValue) {
        this.promotionalValue = promotionalValue;
    }

    public String getDateStart() {
        return dateStart;
    }

    public void setDateStart(String dateStart) {
        this.dateStart = dateStart;
    }

    public String getDateEnd() {
        return dateEnd;
    }

    public void setDateEnd(String dateEnd) {
        this.dateEnd = dateEnd;
    }

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }
}
