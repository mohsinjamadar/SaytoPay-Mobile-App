import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav } from 'ionic-angular';

import { LoginPage } from '../pages/login/login.component';
import { AccountsPage } from '../pages/accounts/accounts.component';
import { PrivacyPage } from '../pages/privacy/privacy.component';

@Component({
  templateUrl: 'app.html'
})
export class Say2Pay {
  rootPage:any = LoginPage;
  @ViewChild(Nav) nav:Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  public goToDashboard(){
    this.nav.setRoot(AccountsPage);
  }
  public goToPrivacyPolicy(){
    this.nav.setRoot(PrivacyPage);
  }
  public goToLogin(){
    this.nav.setRoot(LoginPage);
  }
}
