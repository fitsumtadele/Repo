import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { CommonService } from 'src/app/common.service';

class Person {
  id: Number;
  firstName: string;
  lastName: string;
  /*
  Name: string;
  ContactName: string;
  Phone: Number;
  Email: string;
  Type: string;
  Country: string;
  Status: string;
*/
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
      
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.http
          .post<DataTablesResponse>(
            'https://angular-datatables-demo-server.herokuapp.com/',
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
                { data: 'firstName' }, 
                { data: 'lastName' }
               // { data: 'Email' }, 
               // { data: 'Type' }, 
               // { data: 'Country' }, 
               // { data: 'Status' }
              ]
    };
  }
}
