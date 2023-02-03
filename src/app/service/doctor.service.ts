import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseEnvelope } from '../models/responseEnvelope.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private REST_API_SERVER = '/api/v1/doctors';

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

getAllDoctors(){
  return this.httpClient.get<ResponseEnvelope>(this.REST_API_SERVER);
}

getScheduleForDoctor(docName:String,day:String){
  return this.httpClient.get<ResponseEnvelope>(this.REST_API_SERVER+`/name/${docName}/day/${day}`);
}

}
