import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { SelectItem } from 'primeng/api';
import * as moment from 'moment';

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
  faxrecordvalues: number;
  displayrecords: any;
  recordsStartDate: any;
  recordsEndDate:any;
  faxRecordsStartDate: Date;
  faxRecordsEndDate: any;
  
  constructor(private loginService: LoginService) {  	

  	this.productid = [];
  	this.productlist = [];
  	this.productlists = [];
 	this.faxRecordsStartDate = new Date(moment.utc().startOf('month').format('YYYY-MM-DD hh:mm:ss'));
    this.faxRecordsEndDate = new Date(moment.utc(this.faxRecordsStartDate).endOf('month').format('YYYY-MM-DD hh:mm:ss'));

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

	/*alert(value +"Fax record value");*/

	var len = this.allfaxrecords.length;

									
		for (var i = 0; i < len; i++) {			

		if (this.allfaxrecords[i].faxNumber == value ) {

			this.faxrecordvalues = this.allfaxrecords[i].id;

			
			 } 

	}

		console.log('value'+this.faxrecordvalues);
	}


displayfaxrecord(){

	/*this.loginService.displayRecords(1, this.recordsStartDate,this.recordsEndDate)*/

		this.loginService.displayRecords(this.faxrecordvalues,this.faxRecordsStartDate,this.faxRecordsEndDate)
			.then((res) => {

			/*this.displayrecords = res._body;*/

			console.log('Display'+ this.displayrecords);
		})
			.catch()
}

}