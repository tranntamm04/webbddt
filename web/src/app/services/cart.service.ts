import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }
  getListGioHang(){
    // @ts-ignore
    return JSON.parse(localStorage.getItem("cart"));
  } 
  setListGioHang(list: any){
    localStorage.setItem('cart',JSON.stringify(list));
  }

  addToGioHang(masp: number, productName: String, price: number,avt: string){
    var currentList = this.getListGioHang();
    if (!currentList){
      currentList= [];
    }
    var daCo =false;
    for (var sp of currentList){
      if (sp.idProduct == masp){
        sp.quantity++;
        daCo = true;
      }
    }
    if(!daCo) {
      currentList.push({
        idProduct: masp,
        quantity: 1,
        productName: productName,
        price: price,
        avt: avt
      })
    }
    this.setListGioHang(currentList);
  }
  tangSoLuongSanPham(id: number){
    var listProduct = this.getListGioHang();

    for (var p of listProduct) {
      if (p.idProduct == id) {
        p.quantity++;
      }
    }

    this.capNhatMoiThu(listProduct);
  }

  giamSoLuongSanPham(id: number){
    var listProduct = this.getListGioHang();

    for (var p of listProduct) {
      if (p.idProduct == id && p.quantity > 1) {
        p.quantity--;
      }
    }

    this.capNhatMoiThu(listProduct);
  }

  xoaSanPham(masp: number){
    var currentList = this.getListGioHang();
    for (var i =0;i<currentList.length;i++){
      if (currentList[i].idProduct == masp){
        currentList.splice(i,1);
        break;
      }
    }
    this.capNhatMoiThu(currentList);
  };
  capNhatMoiThu(list: any){
    this.setListGioHang(list);
    this.getListGioHang();
  }
  xoaHet(){
    var currentList = this.getListGioHang();
    currentList = [];
    this.capNhatMoiThu(currentList);
  }
  getSoLuongGioHang():number {
    var currentList = this.getListGioHang();

    var soLuong = 0;
    if(currentList != null) {
      for(var sp of currentList) {
        soLuong += sp.quantity;
      }
    }

    return soLuong;
  }
}
