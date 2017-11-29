import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BillsService } from './bills.service'
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'page-bills',
  templateUrl: 'bills.html'
})
export class BillsPage {

  billsList;
  constructor(private ref: ChangeDetectorRef, public nav: NavController, private billsService: BillsService) {
  }
  ngOnInit() {
    this.getBills()
  }

  public getBills() {
    this.billsService.getBills().subscribe(
         data => {

           this.billsList = JSON.parse(data._body);
           console.log(this.billsList);
           this.ref.markForCheck();
         }
    )
  }

}
