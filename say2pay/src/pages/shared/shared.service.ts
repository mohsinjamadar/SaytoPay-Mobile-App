import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  //URL for CRUD operations
  baseUrl = "http://saytopay.us-east-1.elasticbeanstalk.com/";

  //Create constructor to get Http instance
  constructor() {
  }
}
