import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { ToastrService } from 'ngx-toastr/public_api';
// import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  email: any;
  password: any;
  role: any;
  users:any
  constructor(private userS:UserServiceService,private rout:Router,private toastr:ToastrService){
    this.getUserInfo();
  }


  ngOnInit() {
    // var encrypted = this.userS.set('123456$#@$^@1ERF', 'password4');
    // var decrypted = this.userS.get('123456$#@$^@1ERF', 'pDHTHvOIM0l5cayfMcbtLQ==');
    // console.log('Encrypted :' + encrypted);
    // console.log('Encrypted :' + decrypted);
  }


  onSubmit(loginData:any) 
{
  // Find the user with the given email and password
  // console.log(this.users);

  
  // console.log(loginData.value);
  const user = this.users.find((u:any) => u.email === loginData.value.email && this.userS.get('123456$#@$^@1ERF', u.password) === loginData.value.password);
  // console.log(user);
  if(loginData.value.role=='user')
  {
    if (user) {
      this.userS.setSharedData(user);
      this.toastr.success("User Login Succesful","Login",{timeOut:2000,progressBar:true})
      this.rout.navigate(['user']);
    } else {
      this.toastr.error("Users email or password Invalid","Login fail",{timeOut:2000,progressBar:true})
      // alert('Users Invalid email or password');

      this.rout.navigate(['']);
    }
  }
  if(loginData.value.role=='admin'){
    if(loginData.value.email=="admin@gmail.com" && loginData.value.password=="Admin@1"){
      this.toastr.success("Admin Login Succesful","Login",{timeOut:2000,progressBar:true})
      this.rout.navigate(['admin']);
    }else{
      this.toastr.error("Admin email or password Invalid","Login fail",{timeOut:2000,progressBar:true})
      // alert("Admin Password and Email is Incorrect ");
    }
  }
}

  
  getUserInfo(){
    return this.userS.getUsersData().subscribe((u:any)=>{
      this.users=u;
      // console.log(this.users);
    })
 }

}
