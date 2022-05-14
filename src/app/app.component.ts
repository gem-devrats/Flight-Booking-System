import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from './firebase-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router,private auth: FirebaseAuthService){

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

  signOut(){
    this.auth.SignOut();
    this.router.navigate(['/'])
  }
}
