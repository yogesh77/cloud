import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from './login.service';
import { CookieService, TokenService, RefreshService } from '../app.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent  {

    userName: string;
    authenticationMessage: string;
    password: string;
    account_response : any;
    
    constructor(private router: Router, private loginService: LoginService,
     private tokenService: TokenService
    ){

    }
    
    currentInputFieldFocus() {
    this.authenticationMessage = '';
  }
  

  submitUserDetailsOnLogin() {                 
     const UserName = "ivan.smirnov@sendfax.io";
     const Password = "fooBar1";

     if (UserName == "ivan.smirnov@sendfax.io" && Password == "fooBar1" ){                  
     this.loginService.submit(UserName, Password)
     .then((response) =>
        this.onLoginSuccess(JSON.parse(response._body))) 
      .catch((error) => this.showErrorOnFailedLogin());     
     /*this.router.navigate(['/accounts/']);*/ 
          }

     else {
       alert("Please register");
     }
  }

  showErrorOnFailedLogin(){ }

  

  onLoginSuccess(loginResponse: any) {
    this.tokenService.setToken(loginResponse.jwt);
    console.log(this.tokenService.getToken());
    this.router.navigate(['/accounts/']);
    
    /*let account = this.loginService.getaccounts();
    this.loginService.getaccounts()
    .then((res) => console.log(res))
    .catch(this.handleError);*/


    
    
    /*console.log(this.loginService.getaccounts());*/
    /*.then((res) => console.log(response._body))
      this.account_response = (JSON.parse(res._body)))
    this.onLoginSuccess(JSON.parse(res._body)))*/
    /*.catch((error) => this.showErrorOnFailedLogin())*/
    
  }
  handleError(){}

  /*accountsreport(){
    this.loginService.getaccounts();
  }*/

}
