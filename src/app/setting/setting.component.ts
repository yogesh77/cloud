import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { LoginService } from '../login/login.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  providers: [ LoginService ]
})
export class SettingComponent implements OnInit {

  userAccountDetails: any;
  accountCurrentUsage: number;  
  productdetails: any;
  accounts: any;
  details: any;
  data: any [];
  productlist:any[]; 
  cars: SelectItem[];

  constructor(private loginService: LoginService) {


  	this.cars = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Ford', value: 'Ford'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'},
        ];

  	
  	this.productlist = [];
    this.loginService.getAccountsDetail()        
        

        .then((res) => {

        	/*.then((res) => (res))*/
        	/*.then((res) => console.log((JSON.parse(res._body))))*/
        	/*this.details = console.log((JSON.parse(res._body)))*/

        	this.details = JSON.parse(res._body);        	
        	this.data = this.details.userAccounts;

        	
        	console.log('Details'+ this.details);
        	console.log('hello'+ this.data.length);
        	console.log("response"+res._body);

        	/*for(let key in this.data[0]){
        		 this.productlist.push(key);

       }*/


        		/* for(let i = 0; i < this.data.length; i++){
        		 	this.productlist[i].label = this.data[i].faxNumber;
        		 	this.productlist[i].value = this.data[i].faxNumber;
        		 }*/
        		




var len = this.data.length;

this.productlist.push({
        "label": "Select", "value": "Select"
    });
for (var i = 0; i < len; i++) {
    this.productlist.push({    	
        "label": this.data[i].faxNumber,
        "value": this.data[i].faxNumber
        
        //sortable: true,
        //resizeable: true
    });
}

		 console.log(this.cars)
		 console.log(this.productlist)



        })
        
        .catch();    	

  }

  ngOnInit() {
  }

/*getproduct(res:any){
	this.productdetails = res.product;
	for(let i=0; i<res.productSummaries; i++)
}*/
	
	/*getproducts(){
		for (let key in )	
	}*/
	

}
