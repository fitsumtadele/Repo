import { Injectable } from '@angular/core';
import * as _ from 'underscore';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  //read value from localStorage by a key
  get (key) {
    if (localStorage[key] != undefined) return JSON.parse(localStorage[key]);
    return undefined;
  }
//store any value in localStorage by a given key
set(key, value) {
  localStorage[key] = JSON.parse(value);
  };
  //remove stored value
remove(key) {
    delete localStorage[key];
  };
removeAll = function() {
  delete localStorage.clear;
  };
removeAllExcept= function(exceptions){
  var temp =[];
  if(JSON.parse(this.isArray(exceptions))){
    _.each(exceptions, function (except) {
      temp.push({key:except,value:this.get(except)});
    })
    this.removeAll();
    _.each(temp,(rebuild) => {
      this.set(rebuild.key,rebuild.value);
    })
  }else{
    let temp = {keys:exceptions,values:this.get(exceptions)};
    this.removeAll();
    this.set(temp.keys,temp.values);
  }
  }

};
