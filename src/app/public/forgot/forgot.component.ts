import { Component, OnInit } from '@angular/core';

import { CommonService } from 'src/app/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.less']
})
export class ForgotComponent implements OnInit {

  constructor(public commonservice: CommonService, public router: Router) { }

  ngOnInit(): void {
  }
 /* let vm = this;
  year = (new Date()).getFullYear();
  company = "John Snow Inc | AIDSFree Project";

  //build the login Model
  forgotModel = {};
  forgotValidation = {};

  submitEmail = function() {
      forgotValidation.showError = true;
      if (this.forgotValidation.isValid) {
          var model = { username: this.forgotModel.username };
          this.commonservice.buildUrl((AppConst.API_URL.Account.ResetPassword), { username: "@username" }), AppConst.ResourceMethods.Save(model, function(result) {
              $state.go('login');
              NotificationService.notify('An instruction is sent to your email to reset your password. Please follow the link to proceed.','alert-success',1000*60*60);
          }, function(error) {})
      }
  }*/
}
