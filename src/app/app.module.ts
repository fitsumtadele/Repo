import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { ApplicantsComponent } from './public/applicants/applicants.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisteredComponent } from './public/registered/registered.component';
import { SuspendedComponent } from './public/suspended/suspended.component';
import { CancelledComponent } from './public/cancelled/cancelled.component';
import { NavigationComponent } from './public/navigation/navigation.component';



@NgModule({
  declarations: [
    AppComponent,
routingComponent,
ApplicantsComponent,
RegisteredComponent,
SuspendedComponent,
CancelledComponent,
NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DeviceDetectorModule,
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
