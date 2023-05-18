import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-insert-car',
  templateUrl: './insert-car.component.html',
  styleUrls: ['./insert-car.component.css']
})
export class InsertCarComponent {
  car = {
    basePrice: '',
    carLicenseNumber: '',
    manufacturer: '',
    model: '',
    pph: '',
    securityDeposit: ''
  };
  constructor( private userS:UserServiceService,private rout:Router,private toastr:ToastrService){}

  onSubmit(){
    console.log(this.car);
    this.userS.insertCarData(this.car).subscribe((data:any)=>{
      this.toastr.success("Car Addes Succesfully","Insert",{timeOut:2000,progressBar:true})
      this.rout.navigate(['admin']);
    })
  }

}
