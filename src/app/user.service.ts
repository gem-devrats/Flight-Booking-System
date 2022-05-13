import { Injectable } from '@angular/core';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : any = {};
  constructor() {
    this.user.name = '';
    this.user.email = '';
    let data:[] = JSON.parse(localStorage.getItem('bookedFlightData')||"[]");
    this.user.bookedFlightData = data;
   }
}
