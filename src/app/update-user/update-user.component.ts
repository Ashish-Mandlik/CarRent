// import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// import { User } from './user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  user:any;
  data:any;
  constructor( private userS:UserServiceService,private rout:Router){
    this.data=this.userS.getSharedData();
  }
  
  ngOnInit() {
    // console.log("OnInit")
    // let data=this.userS.getSharedData();
    // console.log(data.password,"A");
    // console.log(data.password);
    this.data.password=this.userS.get('123456$#@$^@1ERF', this.data.password);
    this.user = this.data;
    // console.log(data.password,"b")
    // console.log(data);
    this.user=this.userS.getSharedData();
    // console.log(this.user);
  }

  onSubmit(data:any){
    // console.log("Form submit");
    // console.log(data);
    // console.log(data.password);
    var encrypted = this.userS.set('123456$#@$^@1ERF', data.password);
    data.password=encrypted;
    // console.log(data)

    this.userS.updateUserData(data.id,data).subscribe((x:any)=>{
      this.rout.navigate(['user'])

    })
    
  }

}
