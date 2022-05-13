import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { HardCodedFlightDataService } from '../hard-coded-flight-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private hardCodedFlightData: HardCodedFlightDataService) { }

  flightData = this.hardCodedFlightData.flightData;

  departure :boolean = false;
  arrival : boolean = false;
  price : boolean = false;
  duration : boolean = false;
  ngOnInit(): void {
    console.log(this.flightData);
    let data:Flight[] = JSON.parse(localStorage.getItem('bookedFlightData')||"");
    data.push(new Flight(1,'https://images.indianexpress.com/2016/04/vistara-759.png','Vistara','Mumbai, India','BOM','New Delhi, India','DEL','17;45','2h 20m',2085,6553,'20:05'));
    data.push(new Flight(2,'https://i.pinimg.com/originals/5f/9b/e5/5f9be5876eda5d373d7f91a8faf5e659.jpg','Air India','Mumbai, India','BOM','New Delhi, India','DEL','15;05','2h 05m',1987,5763,'17:10'));
    localStorage.setItem('bookedFlightData',JSON.stringify(data));
  }

  departureFilterActive(){
    this.departure = true;
    this.arrival = false;
    this.price = false;
    this.duration = false;
  }

  arrivalFilterActive(){
    this.departure = false;
    this.arrival = true;
    this.price = false;
    this.duration = false;
  }

  pricreFilterActive(){
    this.departure = false;
    this.arrival = false;
    this.price = true;
    this.duration = false;
  }

  durationFilterActive(){
    this.departure = false;
    this.arrival = false;
    this.price = false;
    this.duration = true;
  }

}
