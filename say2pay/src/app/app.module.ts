import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

import { Say2Pay } from './app.component';
import { SharedService } from '../pages/shared/shared.service';
import { LoginService } from '../pages/login/login.service';
import { AccountsService } from '../pages/accounts/accounts.service';
import { BillsService } from '../pages/accounts/bills.service';
import { PrivacyService } from '../pages/privacy/privacy.service';
import { LoginPage } from '../pages/login/login.component';
import { AccountsPage } from '../pages/accounts/accounts.component';
import { PrivacyPage } from '../pages/privacy/privacy.component';

@NgModule({
  declarations: [
    Say2Pay,
    LoginPage,
    AccountsPage,
    PrivacyPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(Say2Pay)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Say2Pay,
    LoginPage,
    AccountsPage,
    PrivacyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SharedService,
    LoginService,
    AccountsService,
    BillsService,
    PrivacyService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
