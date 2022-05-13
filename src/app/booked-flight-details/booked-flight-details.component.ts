import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { UserService } from '../user.service';


@Component({
  selector: 'app-booked-flight-details',
  templateUrl: './booked-flight-details.component.html',
  styleUrls: ['./booked-flight-details.component.css']
})
export class BookedFlightDetailsComponent implements OnInit {

  constructor(private user:UserService) { }

  bookedFlightData = this.user.user.bookedFlightData;

  ngOnInit(): void {

  }

}
