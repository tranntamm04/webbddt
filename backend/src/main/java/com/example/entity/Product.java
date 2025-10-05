package com.example.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idProduct;
    private String productName;
    private int price;
    private int quantity;
    private String avt;
    private String screen;
    private String hdh;
    private String cameraT;
    private String cpu;
    private String ram;
    private String rom;
    private String sdCard;
    private String pin;
    private int numOfStar;
    private int numOfReview;
    private int status;

    @ManyToOne(targetEntity = Promotion.class)
    @JoinColumn(name = "idPromotion", referencedColumnName = "idPromotion")
    private Promotion promotion;

    @ManyToOne(targetEntity = ProductType.class)
    @JoinColumn(name = "idType", referencedColumnName = "idType")
    private ProductType productType;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Evaluate> evaluates;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    @JsonIgnore
    Set<ContractDetail> contractDetails;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    @JsonIgnore
    Set<Evaluates> evaluatess;

    public Product() {
    }

    public Product(String productName, int price, int quantity, String avt, String screen, String hdh,
            String cameraT, String cpu, String ram, String rom, String sdCard, String pin, int numOfStar,
            int numOfReview, int status, Promotion promotion, ProductType productType) {
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
        this.avt = avt;
        this.screen = screen;
        this.hdh = hdh;
        this.cameraT = cameraT;
        this.cpu = cpu;
        this.ram = ram;
        this.rom = rom;
        this.sdCard = sdCard;
        this.pin = pin;
        this.numOfStar = numOfStar;
        this.numOfReview = numOfReview;
        this.status = status;
        this.promotion = promotion;
        this.productType = productType;
    }

    public Product(int idProduct, String productName, int price, int quantity, String avt,
            String screen, String hdh, String cameraT, String cpu, String ram, String rom, String sdCard, String pin,
            int numOfStar, int numOfReview, int status, Promotion promotion, ProductType productType,
            Set<Evaluate> evaluates, Set<ContractDetail> contractDetails) {
        this.idProduct = idProduct;
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
        this.avt = avt;
        this.screen = screen;
        this.hdh = hdh;
        this.cameraT = cameraT;
        this.cpu = cpu;
        this.ram = ram;
        this.rom = rom;
        this.sdCard = sdCard;
        this.pin = pin;
        this.numOfStar = numOfStar;
        this.numOfReview = numOfReview;
        this.status = status;
        this.promotion = promotion;
        this.productType = productType;
        this.evaluates = evaluates;
        this.contractDetails = contractDetails;
    }

    public Product(int idProduct, String productName, int price, int quantity, String avt, String screen, String hdh,
            String cameraT, String cpu, String ram, String rom, String sdCard, String pin, int numOfStar,
            int numOfReview, int status, Promotion promotion, ProductType productType, Set<Evaluate> evaluates,
            Set<ContractDetail> contractDetails, Set<Evaluates> evaluatess) {
        this.idProduct = idProduct;
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
        this.avt = avt;
        this.screen = screen;
        this.hdh = hdh;
        this.cameraT = cameraT;
        this.cpu = cpu;
        this.ram = ram;
        this.rom = rom;
        this.sdCard = sdCard;
        this.pin = pin;
        this.numOfStar = numOfStar;
        this.numOfReview = numOfReview;
        this.status = status;
        this.promotion = promotion;
        this.productType = productType;
        this.evaluates = evaluates;
        this.contractDetails = contractDetails;
        this.evaluatess = evaluatess;
    }

    public Set<Evaluates> getEvaluatess() {
        return evaluatess;
    }

    public void setEvaluatess(Set<Evaluates> evaluatess) {
        this.evaluatess = evaluatess;
    }

    public int getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(int idProduct) {
        this.idProduct = idProduct;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getAvt() {
        return avt;
    }

    public void setAvt(String avt) {
        this.avt = avt;
    }

    public String getScreen() {
        return screen;
    }

    public void setScreen(String screen) {
        this.screen = screen;
    }

    public String getHdh() {
        return hdh;
    }

    public void setHdh(String hdh) {
        this.hdh = hdh;
    }

    public String getCameraT() {
        return cameraT;
    }

    public void setCameraT(String cameraT) {
        this.cameraT = cameraT;
    }

    public String getCpu() {
        return cpu;
    }

    public void setCpu(String cpu) {
        this.cpu = cpu;
    }

    public String getRam() {
        return ram;
    }

    public void setRam(String ram) {
        this.ram = ram;
    }

    public String getRom() {
        return rom;
    }

    public void setRom(String rom) {
        this.rom = rom;
    }

    public String getSdCard() {
        return sdCard;
    }

    public void setSdCard(String sdCard) {
        this.sdCard = sdCard;
    }

    public String getPin() {
        return pin;
    }

    public void setPin(String pin) {
        this.pin = pin;
    }

    public int getNumOfStar() {
        return numOfStar;
    }

    public void setNumOfStar(int numOfStar) {
        this.numOfStar = numOfStar;
    }

    public int getNumOfReview() {
        return numOfReview;
    }

    public void setNumOfReview(int numOfReview) {
        this.numOfReview = numOfReview;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Promotion getPromotion() {
        return promotion;
    }

    public void setPromotion(Promotion promotion) {
        this.promotion = promotion;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    public Set<Evaluate> getEvaluates() {
        return evaluates;
    }

    public void setEvaluates(Set<Evaluate> evaluates) {
        this.evaluates = evaluates;
    }

    public Set<ContractDetail> getContractDetails() {
        return contractDetails;
    }

    public void setContractDetails(Set<ContractDetail> contractDetails) {
        this.contractDetails = contractDetails;
    }
}
