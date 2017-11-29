import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AccountsService } from './accounts.service'
import { BillsService } from './bills.service'
import { ChangeDetectorRef } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'accounts.html'
})
export class AccountsPage {

  accountsList;
  billsList;
  viewMode: String = 'accounts'
  constructor(private ref: ChangeDetectorRef, public nav: NavController, public toastCtrl: ToastController, private accountsService: AccountsService, private billsService: BillsService) {
  }
  ngOnInit() {
    this.getAccounts();
    this.getBills();
  }

  public updateData() {
    this.getAccounts();
    this.getBills();
    this.presentToast("Records updated successfully")
  }

  public getAccounts() {
    this.accountsService.getAccounts().subscribe(
         data => {
           this.accountsList = JSON.parse(data._body);
           console.log(this.accountsList);
           //this.accountsList = [];
           this.ref.markForCheck();
         }
    )
  }

  public getBills() {
    this.billsService.getBills().subscribe(
         data => {
           this.billsList = JSON.parse(data._body);
           //this.billsList = [];
           this.ref.markForCheck();
         }
    )
  }
  public presentToast(toastText) {

    let toast = this.toastCtrl.create({
      message: toastText,
      duration: 3000
    });
    toast.present();
  }

}
