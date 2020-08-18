import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { CommonService } from 'src/app/common.service';
import { AppConst } from 'src/app/helper/constants';


class Item {
  id: Number;
  fullItemName: string;
  agentName: string;
  registrationDate: Number;
  expiryDate: string;
  supplierName: string;
  manufacturerName: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}


@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.less']
})
export class RegisteredComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  items: Item[];

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
          //  'http://api.iimportfeature.hcmis.org/api/Public/Agent/List'
          // 'http://192.168.2.81:8084/api/Public/Agent/List',
          this.commonservice.buildUrl(AppConst.API_URL.Public.ProductList),
            dataTablesParameters, {}
          ).subscribe(resp => {
            this.items = resp.data;
            console.log(resp);

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, 
                { data: 'fullItemName' }, 
                { data: 'agentName' },
                { data: 'registrationDate' }, 
                { data: 'expiryDate' }, 
                { data: 'supplierName' }, 
                { data: 'manufacturerName' }
              ]
    };
  }
}
