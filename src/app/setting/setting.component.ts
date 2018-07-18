import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  providers: [ LoginService ]
})
export class SettingComponent {

  userAccountDetails: any;
  accountCurrentUsage: number;  
  productdetails: any;
  accounts: any;
  details: any;
  allfaxrecords: any [];
  productlist:any[]; 
  faxvalues:any[];
  productid:any[];
  productlists: any[];
  faxrecordvalues: string;
  
  
  constructor(private loginService: LoginService) {  	

  	this.productid = [];
  	this.productlist = [];
  	this.productlists = [];

    this.loginService.getAccountsDetail()        

          .then((res) => {        	

        	this.details = JSON.parse(res._body);        	
        	this.allfaxrecords = this.details.userAccounts;
        	
        	
        	console.log('Details'+ this.details);
        	console.log('hello'+ this.allfaxrecords.length);
        	console.log("response"+res._body);
        	

        	for(let key in this.allfaxrecords[0]){
        		 this.productlist.push(key);

       }

       		var len = this.allfaxrecords.length;

				
				for (var i = 0; i < len; i++) {
					    this.productlists.push({ 
					        "label": this.allfaxrecords[i].faxNumber,
					        "value": this.allfaxrecords[i].faxNumber					       
					        
					    });
					}							 
						 /*console.log('aplle'+ this.allfaxrecords[i].faxNumber);*/

					        })
					        
			.catch();  

  }
  
faxrecordvalue(value:string){

	alert(value +"Fax record value");

	var len = this.allfaxrecords.length;

				/*for (var i = 0; i < len; i++) {
						this.productid.push({
						"value": this.allfaxrecords[i].id
						})}*/
					
		for (var i = 0; i < len; i++) {		
		

		if (this.allfaxrecords[i].faxNumber == value ) {

			this.faxrecordvalues = this.allfaxrecords[i].id;
			 	
			 } 

	}

		console.log('value'+this.faxrecordvalues);
	}


/*for(let key in this.allfaxrecords[0].id){
        		 this.allfaxrecords;

       }*/

	/*console.log('values'+ this.allfaxrecords[i].id);*/

}

}