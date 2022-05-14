import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Flight } from '../flight';
import { UserService } from '../user.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute,private userService:UserService) { }

  id : any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:Params)=>{
      this.id = parseInt(param['get']('id') || '');
    })
    this.pay();
  }


  pay(){
    let user: Flight[] = this.userService.user.bookedFlightData;
    var flight :Flight= new Flight(0,'','','','','','','','',0,0,'');
    for(let i = 0;i<user.length;i++){
      if(user[i].id==this.id){
        flight = user[i];
        break;
      }
    }
    let data:Flight[] = JSON.parse(localStorage.getItem('bookedFlightData')||"");
    data.push(flight);
    localStorage.setItem('bookedFlightData',JSON.stringify(data));
  }

}
