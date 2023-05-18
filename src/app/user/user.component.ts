import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../user-service.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: any;
  navbarOpen = false;
  startDate: any;
  endDate: any;
  carList:any;
  cardata:any;
  diffInDays:any;
  totalhours:any;
  totalbasedPrice:any;
  totalhoursPrice:any;
  total:any;
  startDate1:any; 


  constructor(private route: Router,private userS:UserServiceService,private rout:Router,private toastr:ToastrService) { }
 
   /*
    payment Getway Code start
    */
    
    onLoadPaymentData(event:any) :void {
      // console.log('load payment data', event.detail );
      // console.log("Ashish");
      // console.log(this.user.id,this.cardata.carLicenseNumber,this.startDate,this.endDate);
      this.userS.carBooking(this.user.id,this.cardata.carLicenseNumber,this.startDate,this.endDate).subscribe((data:any)=>{
      console.log(data);
    })
      this.route.navigate(['successfully-register'])
      

    }

    /*
    payment Getway Code end
    */
  

  ngOnInit() {
    this.user = this.userS.getSharedData();

    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().split('T')[0];
    this.startDate1 = currentDateString;
    // console.log(this.user);
  }

   
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  goToUpdateUser() {
    this.rout.navigate(['/update-user']);
  }

  goToLoginPage(){
    this.toastr.info("User Logout Successfully","Logout",{timeOut:2000,progressBar:true})
    this.rout.navigate(['']);
  }

  onSubmit(): void {
    if(this.startDate== null || this.endDate==null){
      // alert("Enter the dates");
      this.toastr.error("Enter the Dates","",{timeOut:2000,progressBar:true})
    } else{
    this.availableCarBetweenDates(this.startDate, this.endDate);
    }

  }

  availableCarBetweenDates(startDate: string, endDate: string): void {
    // console.log(startDate+"/"+endDate);
    this.userS.findAvailableCarBaseOnDate(endDate,startDate).subscribe((data:any)=>{
      console.log(data);
      this.carList=data;
    });
  }


  
  openModal(car:any){
    // console.log(this.startDate,this.endDate);
    // console.log(this.user);
    this.cardata=car;
    const sd=new Date(this.startDate);
    const ed=new Date(this.endDate);
    const oneDay = 24 * 60 * 60 * 1000;
    const diffInTime=ed.getTime()-sd.getTime();
    if(this.startDate==this.endDate){
      this.diffInDays=1;
    }else{
      this.diffInDays = Math.round(diffInTime / oneDay)  ;
    }
    // console.log(this.cardata);
    this.totalhours=this.diffInDays*24;
    // console.log(this.totalhours);
    // console.log(this.diffInDays);
    this.totalbasedPrice=this.diffInDays*this.cardata.basePrice;
    this.totalhoursPrice=this.totalhours*this.cardata.pph;
    // console.log(this.totalhoursPrice);
    // console.log(this.totalbasedPrice);
    this.total=this.totalbasedPrice+this.totalhoursPrice;

    const modalDiv=document.getElementById("myModal")
    if(modalDiv!=null){
      modalDiv.style.display="block";
    }
  }
  closeModal(){
    const modalDiv=document.getElementById("myModal")
    if(modalDiv!=null){
      modalDiv.style.display="none";
    }
  }


  rentCar(car:any){
    // console.log(car);
    // console.log(this.startDate);
    // console.log(this.endDate);
    // console.log(car.carLicenseNumber);
    // console.log(this.user.id);
    this.cardata=car;
    const sd=new Date(this.startDate);
    const ed=new Date(this.endDate);
    const oneDay = 24 * 60 * 60 * 1000;
    const diffInTime=ed.getTime()-sd.getTime();
    if(this.startDate==this.endDate){
      this.diffInDays=1;
    }else{
      this.diffInDays = Math.round(diffInTime / oneDay)  ;
    }
    // this.diffInDays = Math.round(diffInTime / oneDay)  ;
    this.totalhours=this.diffInDays*24;
    this.totalbasedPrice=this.diffInDays*this.cardata.basePrice;
    this.totalhoursPrice=this.totalhours*this.cardata.pph;
    this.total=this.totalbasedPrice+this.totalhoursPrice;
    // this.userS.carBooking(this.user.id,car.carLicenseNumber,this.startDate,this.endDate).subscribe((data:any)=>{
    //   console.log(data);
    // })

    
   

    const modalDiv=document.getElementById("myModal2")
    if(modalDiv!=null){
      modalDiv.style.display="block";
    }
  }

  closeModal2(){
    const modalDiv=document.getElementById("myModal2")
    if(modalDiv!=null){
      modalDiv.style.display="none";
    }
  }
  
  
}
