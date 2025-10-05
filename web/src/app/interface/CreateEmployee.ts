import {IPosition} from "./IPosition";

export class CreateEmployee {
  idEmployee: String;
  fullName: String;
  dateOfBirth: String;
  email: String;
  address: String;
  phone: String;
  avtUrl: String;
  userName: String;
  password: String;
  positionId: IPosition;

 
  constructor(idEmployee: String, fullName: String, dateOfBirth: String, email: String, address: String, phone: String, avtUrl: String, userName: String, password: String, positionId: IPosition) {
    this.idEmployee = idEmployee;
    this.fullName = fullName;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.avtUrl = avtUrl;
    this.userName = userName;
    this.password = password;
    this.positionId = positionId;
  }
}
