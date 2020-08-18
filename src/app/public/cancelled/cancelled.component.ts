import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { CommonService } from 'src/app/common.service';
import { AppConst } from 'src/app/helper/constants';


class Item {
  id: Number;
  brandName: string;
  fullItemName: string;
  commodityTypeName: Number;
  agentName: string;
  registrationDate: string;
  expiryDate: string;
  supplierName: string;
  manufacturerName: string;
  countryName: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}



@Component({
  selector: 'app-cancelled',
  templateUrl: './cancelled.component.html',
  styleUrls: ['./cancelled.component.less']
})
export class CancelledComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  items: Item[];

  constructor(private http: HttpClient, public commonservice: CommonService) {}
  

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      serverSide: true,
      responsive: true,
      language: AppConst.UIConfig.DataTable.Language,
      stateSaveCallback: this.commonservice.SaveDataTableStatus,
    //  stateLoadCallback: this.commonservice.LoadSavedDataTableStatus,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.http
          .post<DataTablesResponse>(

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
                { data: 'brandName' }, 
                { data: 'fullItemName' },
                { data: 'commodityTypeName' }, 
                { data: 'agentName' }, 
                { data: 'registrationDate' }, 
                { data: 'expiryDate' },
                { data: 'supplierName' },
                { data: 'manufacturerName' },
                { data: 'countryName' }
              ]
    };
  }
}
