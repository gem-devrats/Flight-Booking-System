import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router){

  }
  title = 'Flight-Booking-System';

  isToggleVisible:boolean = false;
  
  showToggle(e:any){
    console.log(e);
    this.isToggleVisible = !this.isToggleVisible;
  }

  bookedFlights(){
    this.router.navigate(['/bookedFlightDetails']);
  }
}
