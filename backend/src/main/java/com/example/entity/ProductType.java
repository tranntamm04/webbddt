package com.example.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class ProductType {
   @Id
   private int idType;
   private String nameType;
   private String avt;
   private String description;
   @OneToMany(
      mappedBy = "productType",
      cascade = {CascadeType.ALL}
   )
   @JsonIgnore
   private Set<Product> products;

   public ProductType() {
   }

   public ProductType(int idType, String nameType, String avt, String description, Set<Product> products) {
      this.idType = idType;
      this.nameType = nameType;
      this.avt = avt;
      this.description = description;
      this.products = products;
   }

   public int getIdType() {
      return this.idType;
   }

   public void setIdType(int idType) {
      this.idType = idType;
   }

   public String getNameType() {
      return this.nameType;
   }

   public void setNameType(String nameType) {
      this.nameType = nameType;
   }

   public String getAvt() {
      return this.avt;
   }

   public void setAvt(String avt) {
      this.avt = avt;
   }

   public String getDescription() {
      return this.description;
   }

   public void setDescription(String description) {
      this.description = description;
   }

   public Set<Product> getProducts() {
      return this.products;
   }

   public void setProducts(Set<Product> products) {
      this.products = products;
   }
}
