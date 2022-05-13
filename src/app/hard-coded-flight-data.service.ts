import { Injectable } from '@angular/core';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class HardCodedFlightDataService {

  flightData: Flight[] = [];
  constructor() { 
    this.flightData.push(new Flight(1,'https://images.indianexpress.com/2016/04/vistara-759.png','Vistara','Mumbai, India','BOM','New Delhi, India','DEL','17;45','2h 20m',2085,6553,'20:05'));
    this.flightData.push(new Flight(2,'https://i.pinimg.com/originals/5f/9b/e5/5f9be5876eda5d373d7f91a8faf5e659.jpg','Air India','Mumbai, India','BOM','New Delhi, India','DEL','15;05','2h 05m',1987,5763,'17:10'));
    this.flightData.push(new Flight(3,'https://th.bing.com/th/id/R.032eba4da0b54d568f8b4203f60fb9c6?rik=d%2fAJgerf9A62qg&riu=http%3a%2f%2fwww.contactnumbers.in%2fwp-content%2fuploads%2f2015%2f04%2fIndiGo_airlines_Logo2.jpg&ehk=JkB2AETVW%2ftF1tUOzpgf728DfV4L63CEutBqzRI9N6g%3d&risl=&pid=ImgRaw&r=0','Indigo','Mumbai, India','BOM','New Delhi, India','DEL','19;10','1h 50m',2134,7002,'21:00'));
    this.flightData.push(new Flight(4,'https://th.bing.com/th/id/OIP.UYRukWfiC6TpT9SjDNLeRAHaEq?pid=ImgDet&rs=1','SpiceJet','Mumbai, India','BOM','New Delhi, India','DEL','11;30','2h 30m',1976,6543,'14:00'));
  }
  
}
