import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PrivacyService } from './privacy.service'
import { ChangeDetectorRef } from '@angular/core';
import { AccountsPage } from '../accounts/accounts.component';

@Component({
  selector: 'page-privacy',
  templateUrl: 'privacy.html'
})
export class PrivacyPage {

  isActiveToggleTextPassword: Boolean = true;
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

  public toggleTextPassword(): void{
      this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword==true)?false:true;
  }
  public getType() {
      return this.isActiveToggleTextPassword ? 'password' : 'text';
  }

  public backButtonAction() {
    this.nav.setRoot(AccountsPage);
  }

}
