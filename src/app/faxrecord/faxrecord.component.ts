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
	productList: any;
  dataSource: any;
  elementdata= [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}
  ];
    displayedColumns = ['position', 'name', 'weight', 'symbol'];
  
  constructor(private loginService: LoginService){  	
    this.dataSource = this.elementdata;
    this.productlist = [];
    this.details = {};
    this.loginService.accountsenderid()
    /*.then((res) => console.log(JSON.parse(res._body)))*/
    .then((res) => {
      
      this.details = JSON.parse(res._body);
      this.data = this.details.sender;

      for(let key in this.data[0]){
         this.productlist.push(key);
       }

      console.log(this.details);
      console.log( this.data);

    }) 
  } 
  
}


export class TableBasicExample {

}

/*export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}*/

