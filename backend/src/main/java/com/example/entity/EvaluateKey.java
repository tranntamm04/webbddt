package com.example.entity;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class EvaluateKey implements Serializable {
    @Column(name = "id_customer")
    private String idCustomer;

    @Column(name = "id_product")
    private int idProduct;

    public EvaluateKey() {
    }

    public EvaluateKey(String idCustomer, int idProduct) {
        this.idCustomer = idCustomer;
        this.idProduct = idProduct;
    }

    public String getIdCustomer() {
        return idCustomer;
    }

    public void setIdCustomer(String idCustomer) {
        this.idCustomer = idCustomer;
    }

    public int getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(int idProduct) {
        this.idProduct = idProduct;
    }
}
