import { Injectable } from '@angular/core';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class HardCodedFlightDataService {

  flightData: Flight[] = [];
  constructor() { 
    this.flightData.push(new Flight(1,'https://images.indianexpress.com/2016/04/vistara-759.png','Vistara','Mumbai, India','BOM','New Delhi, India','DEL','20:05','2h 20m',2085,6553,'17:45'));
    this.flightData.push(new Flight(2,'https://i.pinimg.com/originals/5f/9b/e5/5f9be5876eda5d373d7f91a8faf5e659.jpg','Air India','Mumbai, India','BOM','New Delhi, India','DEL','17:10','2h 05m',1987,5763,'15:05'));
    this.flightData.push(new Flight(3,'https://th.bing.com/th/id/R.032eba4da0b54d568f8b4203f60fb9c6?rik=d%2fAJgerf9A62qg&riu=http%3a%2f%2fwww.contactnumbers.in%2fwp-content%2fuploads%2f2015%2f04%2fIndiGo_airlines_Logo2.jpg&ehk=JkB2AETVW%2ftF1tUOzpgf728DfV4L63CEutBqzRI9N6g%3d&risl=&pid=ImgRaw&r=0','Indigo','Mumbai, India','BOM','New Delhi, India','DEL','21:00','1h 50m',2134,7002,'19:10'));
    this.flightData.push(new Flight(4,'https://th.bing.com/th/id/OIP.UYRukWfiC6TpT9SjDNLeRAHaEq?pid=ImgDet&rs=1','SpiceJet','Mumbai, India','BOM','New Delhi, India','DEL','20:20','2h 30m',1976,6543,'17:50'));
  }

  sortByPrice(){
    this.flightData.sort(this.compareByPrice);
  }

  sortByDuration(){
    this.flightData.sort(this.compareByDuration);
  }

  sortByArrival(){
    this.flightData.sort(this.compareByArrival);
  }

  sortByDeparture(){
    this.flightData.sort(this.compareByDeparture);
  }

  compareByPrice(a:any,b:any){
    if(a.price>b.price){
      return 1;
    } else if(a.price<b.price){
      return -1;
    } else{
      return 0
    }
  }

  compareByDuration(a:any,b:any){
    let hour1 = parseInt(a.duration.slice(0,1));
    let min1 = parseInt(a.duration.slice(3,5));
    let hour2 = parseInt(b.duration.slice(0,1));
    let min2 = parseInt(b.duration.slice(3,5));
    if(hour1>hour2){
      return 1;
    } else if(hour1==hour2 && min1>min2){
      return 1;
    } else if(hour1==hour2 && min1==min2){
      return 0
    } else{
      return -1;
    }
  }

  compareByArrival(a:any,b:any){
    let hour1 = parseInt(a.arrivalTime.slice(0,2));
    let min1 = parseInt(a.arrivalTime.slice(3,5));
    let hour2 = parseInt(b.arrivalTime.slice(0,2));
    let min2 = parseInt(b.arrivalTime.slice(3,5));
    if(hour1>hour2){
      return 1;
    } else if(hour1==hour2 && min1>min2){
      return 1;
    } else if(hour1==hour2 && min1==min2){
      return 0
    } else{
      return -1;
    }
  }

  compareByDeparture(a:any,b:any){
    let hour1 = parseInt(a.departure.slice(0,2));
    let min1 = parseInt(a.departure.slice(3,5));
    let hour2 = parseInt(b.departure.slice(0,2));
    let min2 = parseInt(b.departure.slice(3,5));
    if(hour1>hour2){
      return 1;
    } else if(hour1==hour2 && min1>min2){
      return 1;
    } else if(hour1==hour2 && min1==min2){
      return 0
    } else{
      return -1;
    }
  }
  
}
