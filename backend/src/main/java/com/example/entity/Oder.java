package com.example.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Oder {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int maSp;
    private String tenSp;
    private String img;
    private int gia;
    private int soLuong;
    private String maKH;

    public Oder() {
    }

    public Oder(int maSp, String tenSp, String img, int gia, int soLuong, String maKH) {
        this.maSp = maSp;
        this.tenSp = tenSp;
        this.img = img;
        this.gia = gia;
        this.soLuong = soLuong;
        this.maKH = maKH;
    }

    public Oder(String tenSp, String img, int gia, int soLuong, String maKH) {
        this.tenSp = tenSp;
        this.img = img;
        this.gia = gia;
        this.soLuong = soLuong;
        this.maKH = maKH;
    }

    public int getMaSp() {
        return maSp;
    }

    public void setMaSp(int maSp) {
        this.maSp = maSp;
    }

    public String getTenSp() {
        return tenSp;
    }

    public void setTenSp(String tenSp) {
        this.tenSp = tenSp;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public int getGia() {
        return gia;
    }

    public void setGia(int gia) {
        this.gia = gia;
    }

    public int getSoLuong() {
        return soLuong;
    }

    public void setSoLuong(int soLuong) {
        this.soLuong = soLuong;
    }

    public String getMaKH() {
        return maKH;
    }

    public void setMaKH(String maKH) {
        this.maKH = maKH;
    }
}
