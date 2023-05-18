import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public sharedData: any;
  public sharedCardata:any;

  constructor(private http: HttpClient) { }

  setSharedData(data: any) {
    this.sharedData = data;
  }

  getSharedData() {
    return this.sharedData;
  }

  setSharedCardata(data:any){
    this.sharedCardata=data;
  }
  getSharedCardata(){
    return this.sharedCardata;
  }



  // user CURD 

  getUsersData(){
    return this.http.get("/users")
  }

  updateUserData(id:any,user:any){
    return this.http.put(`/users/${id}`,user);
  }

  insertUserData(user:any){
    return this.http.post("/users",user);
  }



  // Cars CURD 

  getCarData(){
    return this.http.get("/cars");
  }

  deleteCarData(id:any){
    return this.http.delete(`/cars/${id}`);
  }

  insertCarData(car:any){
    return this.http.post('/cars',car);
  }

  updateCarData(car:any){
    return this.http.put(`/cars/${car.id}`,car)
  }



  // operation 

  findAvailableCarBaseOnDate(startDate:any,endDate:any){
    return this.http.get(`/search-cars?startDate=${startDate}&&endDate=${endDate}`)
  }

  carBooking(id:any,carLicense:any,startDate:any,endDate:any){
    return this.http.post(`/car/book?id=${id}&&carLicenseNumber=${carLicense}&&startDate=${startDate}&&endDate=${endDate}`,{})
  }


  getRentalDeatailsBasedOnCarLicenseNumber(carLicenseNumber:any){
    return this.http.get(`/car/bookings?carLicenseNumber=${carLicenseNumber}`)

  }





  // Encription Decription Method
  
  set(keys:any, value:any){
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
    {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
  }

  //The get method is use for decrypt the value.
  get(keys:any, value:any){
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var decrypted = CryptoJS.AES.decrypt(value, key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
