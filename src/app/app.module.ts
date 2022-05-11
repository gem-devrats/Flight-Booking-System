import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInScreenComponent } from './sign-in-screen/sign-in-screen.component';
import { SignUpScreenComponent } from './sign-up-screen/sign-up-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { BookedFlightDetailsComponent } from './booked-flight-details/booked-flight-details.component';
import { FormsModule } from '@angular/forms';
import { FirebaseAuthService } from './firebase-auth.service';
import { HardCodedFlightDataService } from './hard-coded-flight-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInScreenComponent,
    SignUpScreenComponent,
    DashboardComponent,
    FlightDetailsComponent,
    BookedFlightDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    FirebaseAuthService,
    HardCodedFlightDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
