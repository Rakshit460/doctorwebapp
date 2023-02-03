import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseEnvelope } from '../models/responseEnvelope.model';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private REST_API_SERVER = '/api/v1/bookings';


  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

getAllBookingOfUser(userName:String){
 return this.httpClient.get<ResponseEnvelope>(this.REST_API_SERVER+`/user/${userName}`);
}

addBookingOfUser(docName:String,userName:String,booking:Booking){
  return this.httpClient.post<ResponseEnvelope>(this.REST_API_SERVER+`/doctor/${docName}/user/${userName}`,booking);
}



}
