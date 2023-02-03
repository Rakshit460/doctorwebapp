import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { DoctorCardComponent } from './component/doctor-card/doctor-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{MatSliderModule} from '@angular/material/slider'
import { MatToolbarModule } from '@angular/material/toolbar';
import { SlotbookingComponent } from './component/slotbooking/slotbooking.component';
import { BookingsComponent } from './component/bookings/bookings.component';
import{MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './component/login/login.component';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    DoctorCardComponent,
    SlotbookingComponent,
    BookingsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSelectModule,
    MatTableModule,
    CdkTableModule,
    MatSnackBarModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
