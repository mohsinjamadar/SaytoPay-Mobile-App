import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { SharedService } from '../shared/shared.service';

@Injectable()
export class AccountsService {

  //URL for CRUD operations
  baseUrl = "";

  //Create constructor to get Http instance
  constructor(private http:Http, sharedService: SharedService) {
      this.baseUrl = sharedService.baseUrl;
  }

  //List Account
  getAccounts():Observable<any> {
    return this.http.get(this.baseUrl + 'accounts')
    .map((response) => response)
    .catch((error) => error);
  }
}
