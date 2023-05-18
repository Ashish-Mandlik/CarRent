import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  constructor(private userS:UserServiceService,private rout:Router,private toastr:ToastrService){

  }
 
  onSubmit(data:any){
    // console.log("Form submit");
    
    // console.log(data);
    var encrypted = this.userS.set('123456$#@$^@1ERF', data.password);
    data.password=encrypted;
    // console.log(data);
    // console.log(data)
    this.userS.insertUserData(data).subscribe((data:any)=>{
      this.toastr.success("User Register Succesfully","Registration",{timeOut:2000,progressBar:true})
      this.rout.navigate(['']);
    });
  }

}
