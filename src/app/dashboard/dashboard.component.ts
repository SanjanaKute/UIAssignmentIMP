import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TicketReservationDetailsService } from '../services/ticket-reservation-details.service';
import{BreakpointObserver} from '@angular/cdk/layout'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
  ticket:any

  constructor(private ticketbookingService: TicketReservationDetailsService,
              private observer: BreakpointObserver) { }
              

    ngAfterViewInit(){
      this.observer.observe(['(max-width:800px)']).subscribe((res) => {
        if (res.matches){
          this.sidenav.mode ='over';
          this.sidenav.close();
        }
        else{
          this.sidenav.mode='side';
          this.sidenav.open();
        }
      });
    }
  ngOnInit(): void {
  }

  getTicketDetails(){
    this.ticketbookingService.getTicketDetails().subscribe(
      ticket =>{
        console.log(ticket);
        this.ticket=ticket;
      },
      error=>{
        console.log(error);
        
      }
    )
  }
}
