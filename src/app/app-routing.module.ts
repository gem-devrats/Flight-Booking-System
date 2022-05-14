import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BookedFlightDetailsComponent } from './booked-flight-details/booked-flight-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { SignInScreenComponent } from './sign-in-screen/sign-in-screen.component';
import { SignUpScreenComponent } from './sign-up-screen/sign-up-screen.component';

const routes: Routes = [{ path: '', redirectTo: 'signIn', pathMatch: 'full' },
{ path: 'signIn', component: SignInScreenComponent },
{ path: 'signUp', component: SignUpScreenComponent },
{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
{ path: 'flightDetail/:id', component: FlightDetailsComponent, canActivate: [AuthGuard] },
{
  path: 'bookedFlightDetails', component: BookedFlightDetailsComponent, canActivate: [AuthGuard]
},
{path:'**',redirectTo:''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
