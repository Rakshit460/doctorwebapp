import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './component/bookings/bookings.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SlotbookingComponent } from './component/slotbooking/slotbooking.component';

const routes: Routes = [
  { path: '', redirectTo:'/home' , pathMatch: 'full'}, // redirect to `home component` 
  { path: 'home',   component: HomeComponent}, // redirect to `home component`
  { path: 'login', component: LoginComponent },
  { path: 'slotbooking', component: SlotbookingComponent},
  { path: 'bookings', component: BookingsComponent ,pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
