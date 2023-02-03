import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.model';
import { Slot } from 'src/app/models/slot.model';

import { DoctorSchedule } from 'src/app/models/doctorSchedule.model';
import { BookingService } from 'src/app/service/booking.service';
import { DataStorage } from 'src/app/service/dataStorage';
import { DoctorService } from 'src/app/service/doctor.service';
import { Booking } from 'src/app/models/booking.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-slotbooking',
  templateUrl: './slotbooking.component.html',
  styleUrls: ['./slotbooking.component.css']
})


export class SlotbookingComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private dataStorage:DataStorage,
    private bookingService:BookingService,
    private doctorService:DoctorService,
    private matSnackBar: MatSnackBar) { }
  doctor?:Doctor;
  selected = "";
  displayedColumns: string[] = ['From', 'To','Select Slot'];
  inspectionTypes: any[] = [
    {inspection_type_id: 1, description: 'Monday'},
    {inspection_type_id: 2, description: 'Tuesday'},
    {inspection_type_id: 3, description: 'Wednesday'},
    {inspection_type_id: 4, description: 'Thursday'},
    {inspection_type_id: 5, description: 'Friday'},
    {inspection_type_id: 6, description: 'Saturday'},
    {inspection_type_id: 7, description: 'Sunday'},
  ];

  doctorSchedule!:DoctorSchedule;
  dataSource:Slot[]=[]

  showTable=false;
  ngOnInit(): void {

    this.doctor= this.dataStorage.data;
     }

  showSnack(message:string) {
    this.matSnackBar.open(message, "Close");
  }

  checkDoctorAvailavility(){
    this.doctorService.getScheduleForDoctor(this.doctor!.name,this.selected).subscribe(
      response=>{
        this.doctorSchedule= response.result;
        if(this.doctorSchedule!.slots.length>0){
          this.dataSource = this.doctorSchedule!.slots;
          this.showTable= true;
        }else{
          this.showTable= false;
          this.showSnack("Doctor not available for selected day "+this.selected+ ". Please book slot for other day.");
        }
      }
    )
  }


  bookSlot(element:Slot){

    const booking:Booking={
      day:this.selected,
      slot:element,
    }
    this.bookingService.addBookingOfUser(this.doctor!.name,'rakshit',booking).subscribe(
      bookingSaved=>{

        if(bookingSaved.status==201){
          console.log('booking saved for rakshit',bookingSaved);
          this.showSnack("Slot Booked Successfully");
        }
        if(bookingSaved.status==400){
          this.showSnack("Slot already booked");

        }
      }
    )
  }

}
