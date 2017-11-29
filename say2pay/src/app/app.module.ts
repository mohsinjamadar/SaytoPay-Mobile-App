import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

import { MyApp } from './app.component';
import { LoginService } from '../pages/login/login.service';
import { AccountsService } from '../pages/accounts/accounts.service';
import { BillsService } from '../pages/bills/bills.service';
import { PrivacyService } from '../pages/privacy/privacy.service';
import { LoginPage } from '../pages/login/login.component';
import { AccountsPage } from '../pages/accounts/accounts.component';
import { BillsPage } from '../pages/bills/bills.component';
import { PrivacyPage } from '../pages/privacy/privacy.component';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AccountsPage,
    BillsPage,
    PrivacyPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AccountsPage,
    BillsPage,
    PrivacyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    AccountsService,
    BillsService,
    PrivacyService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
