import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private doctorService:DoctorService) { }

  doctorList:Doctor[]=[]
  gridColumns = 4;



  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe(responseEnv=>{
      this.doctorList=responseEnv.result;
    });

  }



}
