import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import * as angular from "angular";
import { AccountService } from '../../account.service';
import { Location } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent  {

form = new FormGroup({
    userName : new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
})
  constructor(public commonservice: CommonService, public accountservice: AccountService, public location: Location, public deviceDetector: DeviceDetectorService, public router: Router) { 
    
  }

  ngOnInit() {
  }
 /*
  year = (new Date()).getFullYear();
  company = "John Snow Inc | AIDSFree Project";


  //build logger
  data = this.deviceDetector;
  //build the login Model
  loginModel = {
      clientInfo: {
          os: this.data.os,
          osVersion: this.data.os_version,
          deviceType: this.data.isDesktop() ? "Desktop" : this.data.device,
          browser: this.data.browser,
          browserVersion: this.data.browser_version
      }
  };

  loginModelValidation = {};


  showError = false;
  loginFailed = false;

  Authenticate = function () {

      if (this.loginModelValidation.isValid) {
          this.accountservice.login(this.loginModel)
              .then(function(result) {
                  //redirect to main
                  if (result.token != undefined && result.token.access_token != undefined) {
                      //check if there exists a return url and route to there ... or else route to home.
                      var returnUrl = this.commonservice.getReturnUrl();
                      if (angular.isDefined(returnUrl)) {
                          this.location.path(returnUrl);
                          //Reset the return ulr once its consumed.
                          this.commonservice.resetReturnUrl();

                      } else {
                          this.router.navigate(['home']);
                      }

                  } else {
                      this.loginFailed = true;
                  }
              }, function(error) {
                  //show alert or something
                  this.log.log(error);
              })
      }
  }


*/

}
