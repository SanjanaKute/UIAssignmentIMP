import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketReservationDetailsService } from '../services/ticket-reservation-details.service';
import { User } from '../user';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  user: User = new User();
  
  constructor(private ticketReservationSeevice: TicketReservationDetailsService,
              private router:Router) { }

  ngOnInit(): void {
  }

  saveTicket(){
    this.ticketReservationSeevice.bookTicket(this.user).subscribe(
      data =>{
         console.log(data);
         this.gotoPaymentOption();     
      },
      error => console.log(error));
  }

  gotoPaymentOption(){
    //this.router.navigate(['/payment']);
    this.router.navigate(['/payment']);

  }
  onSubmit(){
    console.log(this.user);
    this.saveTicket();
    
  }
}
