import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { GooglePayButtonModule } from '@google-pay/button-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { PriceModalComponent } from './price-modal/price-modal.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AdminComponent } from './admin/admin.component';
import { InsertCarComponent } from './insert-car/insert-car.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { SuccesfullyRegisterComponent } from './succesfully-register/succesfully-register.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UserComponent,
    UpdateUserComponent,
    PriceModalComponent,
    UserRegistrationComponent,
    AdminComponent,
    InsertCarComponent,
    UpdateCarComponent,
    SuccesfullyRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    GooglePayButtonModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
