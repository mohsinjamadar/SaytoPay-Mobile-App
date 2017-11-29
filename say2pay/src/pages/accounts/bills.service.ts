import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { SharedService } from '../shared/shared.service';

@Injectable()
export class BillsService {

  //URL for CRUD operations
  baseUrl = "";

  //Create constructor to get Http instance
  constructor(private http:Http, sharedService: SharedService) {
    this.baseUrl = sharedService.baseUrl;
  }

  //List Bills
  getBills():Observable<any> {
    return this.http.get(this.baseUrl + 'getBills')
    .map((response) => response)
    .catch((error) => error);
  }
}
