package com.example.dto;

import javax.validation.constraints.NotNull;

public class ProductDTO {
    private int idProduct;
    @NotNull
    private String productName;
    private int price;
    private int quantity;
    private String avt;
    private String screen;
    @NotNull
    private String hdh;
    @NotNull
    private String cameraT;
    private String cpu;
    @NotNull
    private String ram;
    @NotNull
    private String rom;
    @NotNull
    private String sdCard;
    private String pin;
    private int idType;
    private int idPromotion;
    private int numOfStar;
    private int numOfReview;
    private int status;
    private String nameType;

    public ProductDTO() {
    }

    public ProductDTO(int idProduct, @NotNull String productName, int price, int quantity, String avt, String screen,
            @NotNull String hdh, @NotNull String cameraT, String cpu, @NotNull String ram, @NotNull String rom,
            @NotNull String sdCard, String pin, int idType, int idPromotion, int numOfStar, int numOfReview, int status,
            String nameType) {
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
        this.idType = idType;
        this.idPromotion = idPromotion;
        this.numOfStar = numOfStar;
        this.numOfReview = numOfReview;
        this.status = status;
        this.nameType = nameType;
    }

    public ProductDTO(@NotNull String productName, int price, int quantity, String avt, String screen,
            @NotNull String hdh, @NotNull String cameraT, String cpu,
            @NotNull String ram, @NotNull String rom, @NotNull String sdCard, String pin, int idType, int idPromotion,
            int numOfStar, int numOfReview, int status) {
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
        this.idType = idType;
        this.idPromotion = idPromotion;
        this.numOfStar = numOfStar;
        this.numOfReview = numOfReview;
        this.status = status;
    }

    public ProductDTO(int idProduct, @NotNull String productName, int price, int quantity, String avt, String screen,
            @NotNull String hdh, @NotNull String cameraT,
            String cpu, @NotNull String ram, @NotNull String rom, @NotNull String sdCard, String pin, int idType,
            int idPromotion, int numOfStar, int numOfReview, int status) {
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
        this.idType = idType;
        this.idPromotion = idPromotion;
        this.numOfStar = numOfStar;
        this.numOfReview = numOfReview;
        this.status = status;
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

    public int getIdType() {
        return idType;
    }

    public void setIdType(int idType) {
        this.idType = idType;
    }

    public int getIdPromotion() {
        return idPromotion;
    }

    public void setIdPromotion(int idPromotion) {
        this.idPromotion = idPromotion;
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

    public String getNameType() {
        return nameType;
    }

    public void setNameType(String nameType) {
        this.nameType = nameType;
    }
}
