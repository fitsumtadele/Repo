import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { StorageService } from './storage.service';
import { AppConst } from './helper/constants';
import * as _ from 'underscore';
import { HttpClient } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class AccountService {

constructor(public commonservice: CommonService, public storageservice: StorageService, private http: HttpClient ) { }
   // var deferred = $q.defer();
    login (loginModel, loginForm) {
        return this.http.post(this.commonservice.buildUrl(AppConst.API_URL.Account.Autenticate) , loginModel)
        .toPromise().then(this.loginSuccess(Response))
        
    }

    loginSuccess(response: any) {
        this.storageservice.set(AppConst.StorageKeys.Token, response.data.token);
        this.storageservice.set(AppConst.StorageKeys.UserInfo, response.data.user);
        this.storageservice.set(AppConst.StorageKeys.Permissions, response.data.permissions);
        return response.data;
    }

    logout (reason) {
        this.commonservice.buildUrl((AppConst.API_URL.Account.Logout), ''),{ userID: this.userInfo().id, reason:reason};
        this.storageservice.removeAll();
    }

    userInfo () {
        var userInfo = this.storageservice.get(AppConst.StorageKeys.UserInfo);
        return userInfo;
    };

    token () {
        var token = this.storageservice.get(AppConst.StorageKeys.Token);
        if (token != undefined) {
            return 'Bearer ' + token.access_token;
        }
        return null;
    }

    permissions () {
        var permissions = this.storageservice.get(AppConst.StorageKeys.Permissions);
        return permissions;
    }

    hasThisPermission (permission) {
        var permissions = this.permissions();
        var hasPermission = _.contains(permissions, permission);
        return hasPermission;
    }

    hasThesePermissions (permissions) {
        var hasPermission = false;
        _.each(permissions, function(permission) {
            //return true if user has access to one of the permissions
            hasPermission = hasPermission || this.hasThisPermission(permission);
        })
        return hasPermission;
    }


}