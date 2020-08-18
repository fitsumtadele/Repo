import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { RegistrationComponent } from './public/registration/registration.component';
import { AboutUsComponent } from './public/about-us/about-us.component';
import { ForgotComponent } from './public/forgot/forgot.component';
import { ContactUsComponent } from './public/contact-us/contact-us.component';
import { ApplicantsComponent } from './public/applicants/applicants.component'
import { SuspendedComponent } from './public/suspended/suspended.component';
import { CancelledComponent } from './public/cancelled/cancelled.component';
import { RegisteredComponent } from './public/registered/registered.component'


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'contact-us', component: ContactUsComponent },
  {path: 'applicants', component: ApplicantsComponent},
  {path: 'suspended', component:SuspendedComponent},
  {path: 'cancelled', component:CancelledComponent},
  {path: 'registered', component:RegisteredComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [  LoginComponent,
  HomeComponent,
  RegistrationComponent,
  AboutUsComponent,
  ForgotComponent,
ContactUsComponent,
ApplicantsComponent,
SuspendedComponent]
