import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from './login.service'
import { AccountsPage } from '../accounts/accounts.component'


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username:string = '';
  password:string = '';
  constructor(public nav: NavController, private loginService: LoginService) {
  }

  login() {
    this.loginService.doLogin(this.username, this.password).subscribe(
         data => {

           let res = JSON.parse(data._body)
           if(res.loggedIn == true){
           //Navigate to home page
              this.nav.setRoot(AccountsPage);
           }else{
             alert(res.errorMessage);
           }
         }
    )
 }

}
