import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PrivacyService } from './privacy.service'
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'page-privacy',
  templateUrl: 'privacy.html'
})
export class PrivacyPage {

  privacyData = {
                    "askPaymentPIN": false,
                    "showAccountBalance": false,
                    "shouldAllowTransfers": false
                };

  constructor(private ref: ChangeDetectorRef, public nav: NavController, private privacyService: PrivacyService) {
  }
  ngOnInit() {
    this.getPolicy();
  }

  public getPolicy() {
    this.privacyService.getPolicy().subscribe(
         data => {

           this.privacyData = JSON.parse(data._body);
           console.log(this.privacyData.showAccountBalance);
           console.log(this.privacyData.askPaymentPIN);
           console.log(this.privacyData.shouldAllowTransfers);

           this.ref.markForCheck();
         }
    );
  }

  public updatePrivacyPolicy() {
    this.privacyService.updatePrivacyPolicy(this.privacyData).subscribe(
         data => {

           var res = JSON.parse(data._body);
           if(res != true){
             alert("Unable to update privacy policies right now. Please try again later");
             this.getPolicy();
           }

           this.ref.markForCheck();
         }
    );
  }

}
