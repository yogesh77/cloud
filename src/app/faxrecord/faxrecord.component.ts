import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../login/login.service';
import { CookieService, TokenService, RefreshService } from '../app.service';


@Component({
  selector: 'app-faxrecord',
  templateUrl: './faxrecord.component.html',
  styleUrls: ['./faxrecord.component.scss'],
  providers: [ LoginService ]
})
export class FaxrecordComponent  {

	data: any [];
	details: any;
	productlist:any[];  
	loginservice: any [];
	accountlist: any = [];
	productList: any = [];

  constructor(private loginService: LoginService){  	
    this.loginService.accountsenderid()
    .then((res) => console.log(res))    
    .catch(this.handleError);
    /*this.data = res.json().productSummaries;
    .then((res) => console.log(this.data))*/
    /*.catch(this.handleError);*/
    /* console.log("akshat" + this.data);*/

  }

 
  handleError(){

  }

}