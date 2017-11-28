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
import { LoginPage } from '../pages/login/login.component';
import { AccountsPage } from '../pages/accounts/accounts.component';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AccountsPage
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
    AccountsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    AccountsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
