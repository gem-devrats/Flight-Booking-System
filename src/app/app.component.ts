import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flight-Booking-System';

  isToggleVisible:boolean = false;
  
  showToggle(e:any){
    console.log(e);
    this.isToggleVisible = !this.isToggleVisible;
  }
}
