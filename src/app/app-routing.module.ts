import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'foodpage', component:FoodpageComponent},
  { path:'cart', component:CartComponent},
  { path:'service', component:ServiceComponent},
  { path:'contact', component:ContactComponent},
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
