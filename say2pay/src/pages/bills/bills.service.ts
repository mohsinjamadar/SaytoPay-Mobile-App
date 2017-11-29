import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class BillsService {

  //URL for CRUD operations
  baseUrl = "http://saytopay.us-east-1.elasticbeanstalk.com/";

  //Create constructor to get Http instance
  constructor(private http:Http) {
  }

  //List Bills
  getBills():Observable<any> {
    return this.http.get(this.baseUrl + 'getBills')
    .map((response) => response)
    .catch((error) => error);
  }
}
