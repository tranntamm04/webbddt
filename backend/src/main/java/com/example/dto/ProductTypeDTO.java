package com.example.dto;

public class ProductTypeDTO {
    private int idType;
    private String nameType;
    private String avt;
    private String description;

    public ProductTypeDTO() {}

    public ProductTypeDTO(int idType, String nameType, String avt, String description) {
        this.idType = idType;
        this.nameType = nameType;
        this.avt = avt;
        this.description = description;
    }

    // Getter & Setter
    public int getIdType() { return idType; }
    public void setIdType(int idType) { this.idType = idType; }

    public String getNameType() { return nameType; }
    public void setNameType(String nameType) { this.nameType = nameType; }

    public String getAvt() { return avt; }
    public void setAvt(String avt) { this.avt = avt; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
