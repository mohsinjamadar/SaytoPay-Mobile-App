import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AccountsService } from './accounts.service'
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'page-account',
  templateUrl: 'accounts.html'
})
export class AccountsPage {

  accountsList;
  constructor(private ref: ChangeDetectorRef, public nav: NavController, private accountsService: AccountsService) {
  }
  ngOnInit() {
    this.getAccounts()
  }

  public getAccounts() {
    this.accountsService.getAccounts().subscribe(
         data => {

           this.accountsList = JSON.parse(data._body);
           console.log(this.accountsList);
           this.ref.markForCheck();
         }
    )
  }

}
