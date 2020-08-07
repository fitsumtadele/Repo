import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CommonService } from 'src/app/common.service';
import * as _angular_ from "angular";
import { DeviceDetectorService } from 'ngx-device-detector';
declare global {
    const angular: typeof _angular_;
  }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit{

form :  FormGroup;
submitted = false;

constructor(private formBuilder: FormBuilder, public router: Router, 
             public commonservice:CommonService,
            public devicedetector: DeviceDetectorService,/* public location: Location*/) { }
            data = this.devicedetector;
    loginModel = {
         clientInfo: {
            os: this.data.os,
            osVersion: this.data.os_version,
            deviceType: this.data.isDesktop() ? "Desktop" : this.data.device,
            browser: this.data.browser,
            browserVersion: this.data.browser_version
                }
            };
            loginFailed = false;
ngOnInit() {
    this.form = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}
get f() { return this.form.controls; }

  
        Authenticate() {
            this.submitted = true;
            if (this.form.invalid) {
                return;
            }
            
                alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
               /* login(this.loginModel)
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
                                this.router.navigate('home');
                            }

                        } else {
                            this.loginFailed = true;
                        }
                    }, function(error) {
                        //show alert or something
                        console.log(error);
                    })*/

            
        }
        // display form values on success
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
    
    } 
    
        
