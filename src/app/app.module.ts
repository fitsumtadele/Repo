import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { ApplicantsComponent } from './public/applicants/applicants.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisteredComponent } from './public/registered/registered.component';
import { SuspendedComponent } from './public/suspended/suspended.component';
import { CancelledComponent } from './public/cancelled/cancelled.component';



@NgModule({
  declarations: [
    AppComponent,
routingComponent,
ApplicantsComponent,
RegisteredComponent,
SuspendedComponent,
CancelledComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DeviceDetectorModule,
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
