import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-booked-flight-details',
  templateUrl: './booked-flight-details.component.html',
  styleUrls: ['./booked-flight-details.component.css']
})
export class BookedFlightDetailsComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  bookedFlightData = this.userService.user.bookedFlightData;

  ngOnInit(): void {

  }

  bookFlight(id:Number){
    this.router.navigate(['flightDetail',id])
  }

}
