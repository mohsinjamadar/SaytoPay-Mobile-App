import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { SharedService } from '../shared/shared.service';

@Injectable()
export class LoginService {

  //URL for CRUD operations
  baseUrl = "";

  //Create constructor to get Http instance
  constructor(private http:Http, sharedService: SharedService) {
    this.baseUrl = sharedService.baseUrl;
  }

  //Login
  doLogin(userName:string, password:string):Observable<any> {
    return this.http.get(this.baseUrl + 'login?name=' + userName + '&password=' + password)
    .map((response) => response)
    .catch((error) => error);
  }
}
