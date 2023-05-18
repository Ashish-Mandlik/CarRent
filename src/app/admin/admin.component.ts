import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  carList:any;
  navbarOpen = false;
  carLicenseNumber:any;
  RentalList:any;
  constructor(private userS:UserServiceService,private rout: Router,private toastr:ToastrService){
    

  }
  ngOnInit(): void {
    this.getCarsData();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  goToLoginPage(){
    this.toastr.info("Admin Logout Successfully","Logout",{timeOut:2000,progressBar:true})
    this.rout.navigate(['']);
  }
  goToUpdateAdmin(){

  }

  getCarsData()
  {
    this.userS.getCarData().subscribe((data:any)=>{
      // console.log(data)
      this.carList=data;
    })
    
  }


  deleteCar(id:any){
    console.log(id);
    this.userS.deleteCarData(id).subscribe((data:any)=>{
      this.ngOnInit();
    })
  } 

  InsertCar(){
    this.rout.navigate(['insert-car'])
  }

  updateCar(car:any){
    console.log(car);
    this.userS.setSharedCardata(car);
    this.rout.navigate(['update-car']);
  }

  searchCars(){
    console.log(this.carLicenseNumber);
    let s=this.carLicenseNumber
    s=s.trim();
    this.userS.getRentalDeatailsBasedOnCarLicenseNumber(s).subscribe((data:any)=>{
      console.log(data);
      this.RentalList=data;
    })


  }


}
