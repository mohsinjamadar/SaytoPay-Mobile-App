import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { SharedService } from '../shared/shared.service';

@Injectable()
export class PrivacyService {

  //URL for CRUD operations
  baseUrl = "";

  //Create constructor to get Http instance
  constructor(private http:Http, sharedService: SharedService) {
    this.baseUrl = sharedService.baseUrl;
  }

  // get policy
  getPolicy():Observable<any> {
    return this.http.get(this.baseUrl + 'getPolicy')
    .map((response) => response)
    .catch((error) => error);
  }

  // update policy
  updatePrivacyPolicy(privacyData):Observable<any> {
    return this.http.get(this.baseUrl + 'updatePolicy?askPayPin='+ privacyData.askPaymentPIN + '&showAccountBalance='+ privacyData.showAccountBalance + '&allowTransfers='+ privacyData.shouldAllowTransfers)
    .map((response) => response)
    .catch((error) => error);
  }
}
