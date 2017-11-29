import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class PrivacyService {

  //URL for CRUD operations
  baseUrl = "http://saytopay.us-east-1.elasticbeanstalk.com/";

  //Create constructor to get Http instance
  constructor(private http:Http) {
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
