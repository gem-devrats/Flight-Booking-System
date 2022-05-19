import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Flight } from '../flight';
import { HardCodedFlightDataService } from '../hard-coded-flight-data.service';
import Razorpay from 'razorpay';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private flightData: HardCodedFlightDataService,private router:Router) { }

  id: any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: Params) => {
      this.id = parseInt(param['get']('id') || '');
    })
    let flightData: Flight[] = this.flightData.flightData;
    for (let i = 0; i < flightData.length; i++) {
      if (flightData[i].id == this.id) {
        this.flight = flightData[i];
        break;
      }
    }
  }

  flight: Flight = new Flight(0, '', '', '', '', '', '', '', '', 0, 0, '');

  pay() {
    let data: Flight[] = JSON.parse(localStorage.getItem('bookedFlightData') || "");
    data.push(this.flight);
    localStorage.setItem('bookedFlightData', JSON.stringify(data));
    this.router.navigate(['/dashboard'])
  }

}
