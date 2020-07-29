/*import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { StorageService } from './storage.service';
import { AppConst } from './helper/constants';




@Injectable({
  providedIn: 'root'
})
export class AccountFactory {
    constructor(public commonservice: CommonService, public storageservice: StorageService) { }
users = $resource(this.commonservice.buildUrl((AppConst.API_URL.Account.Users), { id: "@id" }), AppConst.ResourceMethods.All);
authenticate = $resource(this.commonservice.buildUrl((AppConst.API_URL.Account.Autenticate), {}), AppConst.ResourceMethods.Post);
token = resource(this.commonservice.buildUrl((AppConst.API_URL.Account.ValidateToken), {}), AppConst.ResourceMethods.Post);
validateToken = resource(this.commonservice.buildUrl((AppConst.API_URL.Account.ValidateToken), {}), AppConst.ResourceMethods.Readonly);
changePassword = resource(this.commonservice.buildUrl((AppConst.API_URL.Account.ChangePassword), {}), AppConst.ResourceMethods.Save);
resetPassword = resource(this.commonservice.buildUrl((AppConst.API_URL.Account.ResetPassword), { username: "@username" }), AppConst.ResourceMethods.Save);
logout = resource(this.commonservice.buildUrl((AppConst.API_URL.Account.Logout), { userID: "@userID" }), AppConst.ResourceMethods.Save);
}*/