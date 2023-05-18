import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { InsertCarComponent } from './insert-car/insert-car.component';
import { LoginComponent } from './login/login.component';
import { PriceModalComponent } from './price-modal/price-modal.component';
import { SuccesfullyRegisterComponent } from './succesfully-register/succesfully-register.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"",component:HeaderComponent},
  {path:"login" ,component:LoginComponent},
  {path:"user" ,component:UserComponent},
  {path:"update-user",component:UpdateUserComponent},
  {path:"price-modal",component:PriceModalComponent},
  {path:"user-registration",component:UserRegistrationComponent},
  {path:"admin" ,component:AdminComponent},
  {path:"insert-car" ,component:InsertCarComponent},
  {path:'update-car', component:UpdateCarComponent},
  {path:"successfully-register",component:SuccesfullyRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
