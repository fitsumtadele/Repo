import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { CommonService } from 'src/app/common.service';
import { AppConst } from 'src/app/helper/constants';
import { data } from 'jquery';

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

  constructor(private http: HttpClient, public commonservice: CommonService) {}
  

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      serverSide: true,
      responsive: true,
      language: AppConst.UIConfig.DataTable.Language,
      stateSaveCallback: this.commonservice.SaveDataTableStatus,
    //  stateLoadCallback: this.commonservice.LoadSavedDataTableStatus,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.http
          .post<DataTablesResponse>(
            'http://api.iimportfeature.hcmis.org/api/Public/Agent/List',
            dataTablesParameters, {}
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
