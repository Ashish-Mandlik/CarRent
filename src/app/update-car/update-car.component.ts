import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent {
  car:any;

  constructor(private userS:UserServiceService,private rout: Router,private route: ActivatedRoute,private toastr:ToastrService){}

  ngOnInit() {
    this.car=this.userS.getSharedCardata();
  }


  onSubmit(){
    console.log(this.car);
    this.userS.updateCarData(this.car).subscribe((data:any)=>{
      this.toastr.success("Car Updated Succesfully","Updat",{timeOut:2000,progressBar:true})
      this.rout.navigate(['admin']);
    })
    
  }

}
