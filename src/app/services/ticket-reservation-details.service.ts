import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class TicketReservationDetailsService {
  [x: string]: any;

  baseUrl='http://localhost:8003'
  constructor(private http:HttpClient) { }

  getTicketDetails(){
    return this.http.get(`${this.baseUrl}/reserve/getAllTicketsDetails`)
  }

  bookTicket(user: User): Observable<Object>
  {
      return this.http.post(`http://localhost:8000/ticket-reservation-service/reserve/addTicket`,user);

  }
}
