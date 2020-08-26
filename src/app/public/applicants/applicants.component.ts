import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { CommonService } from 'src/app/common.service';
import { AppConst } from 'src/app/helper/constants';



class Person {
  id: Number;
  name: string;
  contactPerson: string;
  phone: Number;
  email: string;
  agentTypeName: string;
  countryName: string;
  isActive: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}


@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.less']
})
export class ApplicantsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: Person[];
  public headers = new HttpHeaders();

  constructor(private http: HttpClient, public commonservice: CommonService) {}
  

  ngOnInit(): void {

    let headers;
    headers = this.headers.set('Content-Type', 'application/x-www-form-urlencoded');

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      dom: AppConst.UIConfig.DataTable.DOM.All,
      serverSide: true,
      responsive: true, 
      language: AppConst.UIConfig.DataTable.Language,
      stateSaveCallback: this.commonservice.SaveDataTableStatus,
    //  stateLoadCallback: this.commonservice.LoadSavedDataTableStatus,
     
      ajax: (dataTablesParameters: any, callback) => {
        this.http
          .post<DataTablesResponse>(
          //  'http://api.iimportfeature.hcmis.org/api/Public/Agent/List'
          // 'http://192.168.2.81:8084/api/Public/Agent/List',
          this.commonservice.buildUrl(AppConst.API_URL.Public.AgentList),
            dataTablesParameters, {headers: headers}
          ).subscribe(resp => {
            this.persons = resp.data;
            console.log(resp);

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, 
                { data: 'name' }, 
                { data: 'contactPerson' },
                { data: 'phone' }, 
                { data: 'email' }, 
                { data: 'agentTypeName' }, 
                { data: 'countryName' },
                { data: 'isActive' }
              ]
    };
  }
}
