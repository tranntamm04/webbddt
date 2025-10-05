package com.example.entity;

import javax.persistence.*;

@Entity
public class ContractDetail {
    @EmbeddedId
    private BillProductKey id;

    @ManyToOne
    @MapsId("idBill")
    @JoinColumn(name = "id_bill")
    private Bill bill;

    @ManyToOne
    @MapsId("idProduct")
    @JoinColumn(name = "id_product")
    private Product product;

    private int quantity;
    private float price;

    public ContractDetail() {
    }

    public ContractDetail(BillProductKey id, Bill bill, Product product, int quantity, float price) {
        this.id = id;
        this.bill = bill;
        this.product = product;
        this.quantity = quantity;
        this.price = price;
    }

    public BillProductKey getId() {
        return id;
    }

    public void setId(BillProductKey id) {
        this.id = id;
    }

    public Bill getBill() {
        return bill;
    }

    public void setBill(Bill bill) {
        this.bill = bill;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
}
