package com.example.entity;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class BillProductKey implements Serializable {
    @Column(name = "id_bill")
    private int idBill;
    @Column(name = "id_product")
    private int idProduct;

    public BillProductKey() {
    }

    public BillProductKey(int idBill, int idProduct) {
    }

    public int getIdBill() {
        return idBill;
    }

    public void setIdBill(int idBill) {
        this.idBill = idBill;
    }

    public int getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(int idProduct) {
        this.idProduct = idProduct;
    }
}
