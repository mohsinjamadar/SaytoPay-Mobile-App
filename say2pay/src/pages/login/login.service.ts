import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  //URL for CRUD operations
  baseUrl = "http://saytopay.us-east-1.elasticbeanstalk.com/";

  //Create constructor to get Http instance
  constructor(private http:Http) {
  }

  //Login
  doLogin(userName:string, password:string):Observable<any> {
    return this.http.get(this.baseUrl + 'login?name=' + userName + '&password=' + password)
    .map((response) => response)
    .catch((error) => error);
  }
}
