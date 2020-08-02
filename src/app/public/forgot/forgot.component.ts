import { Component, OnInit } from '@angular/core';

import { CommonService } from 'src/app/common.service';
import { Router } from '@angular/router';
import { AppConst } from '../../helper/constants';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.less']
})
export class ForgotComponent implements OnInit {
  form = new FormGroup({
    userName : new FormControl ('', Validators.required),
    email : new FormControl ('', [Validators.required, Validators.email])
  })

  constructor(public commonservice: CommonService, public router: Router) { }

  ngOnInit(): void {
  }
 /*
  year = (new Date()).getFullYear();
  company = "John Snow Inc | AIDSFree Project";

  //build the login Model
  forgotModel = {};
  forgotValidation = {};

  submitEmail = function() {
      this.forgotValidation.showError = true;
      if (this.forgotValidation.isValid) {
          var model = { username: this.forgotModel.username };
          this.commonservice.buildUrl((AppConst.API_URL.Account.ResetPassword), { username: "@username" }), AppConst.ResourceMethods.Save(model, function(result) {
              state.go('login');
              NotificationService.notify('An instruction is sent to your email to reset your password. Please follow the link to proceed.','alert-success',1000*60*60);
          }, function(error) {})
      }*/
  }

