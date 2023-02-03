import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorage } from 'src/app/service/dataStorage';
import { Doctor } from 'src/app/models/doctor.model';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent implements OnInit {
  title = 'Card View Demo';

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  @Input() doctor?:Doctor
  
  constructor(private router: Router,private dataStorage:DataStorage) { }

  ngOnInit(): void {
  }

  callBooking(){

    console.log('inside function of routing ')
    this.dataStorage.data=this.doctor;

    this.router.navigate(['/slotbooking']);
  }

}
