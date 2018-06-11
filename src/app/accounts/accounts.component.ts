import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  providers: [ LoginService ]
})
export class AccountsComponent implements OnInit {

  data: any [];
  details: any;  
  loginservice: any [];
  accountlist: any = [];
  productList: any = [];

  detail: {emplid: string, Department: string }[]; 

  constructor(private loginService: LoginService) { 

    this.loginService.getaccounts()
    .then((res) => {
      this.details = JSON.parse(res._body);
      /*this.data = res.json().productSummaries;*/
      this.data = this.details.productSummaries;
      console.log("hello"+res._body);
      console.log("hel"this.details.productSummaries);
      console.log("akha"this.data);
      /*console.log("hi"+JSON.stringify(this.details));*/
      

       }) 
    /*.then((res) => this.accountrecords(JSON.parse(res._body)))*/   
    .catch(this.handleError());

              /*console.log(this.details);*/
   
       /*this.details = [
       { emplid : 'Akshat', Department:"CE" },       
    ];*/

    this.detail = [
       { emplid : 'Akshat', Department:"CE" },     
    ];


  }

  ngOnInit()

  {   
    
  }

  /*accountrecords(){
    this.productListDetails = response.productSummaries;
    for(let i = 0; i < response.productSummaries.length; i++) {
      this.productList.push(
      { name: response.productSummaries[i].name, id: response.productSummaries[i].id });
    }
  }*/


    
handleError(){
     
   }

  EmpName = [{id: 1, name:'Yogesh'}];
  
 }