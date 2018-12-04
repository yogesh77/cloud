import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

// import { EditprofileComponent } from '../editprofile/editprofile.component';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.scss']
})
export class PractiseComponent implements OnInit {

	details: any;
	data: any;
	value: any;
	dataValue: any;
	countNumber: number = 10; 
	agreed = 0;
 	disagreed = 0;	
	voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto']
	displayedColumns: string[];
	accountsDisplayColumns = ['PhoneNumber'];
	accountsDataSource: any|null;
  

  constructor(private loginService: LoginService) { 

  	this.value = "";
  	this.displayedColumns = ['Status','id','Faxnumber','Alias','DisplayNumber'];   
  }

   onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;

  }

  ngOnInit() {

  	 	this.loginService.getUseraccountsdetail()
    .subscribe((res) => {

    	this.data = res.userAccounts;
    	this.details = this.data[0].faxNumber;

    	console.log("Detail"+this.details);    	

    	for(let i in this.data){
    		this.value += " " + this.data[i].faxNumber;
    	}

    	console.log("Value"+this.value);
    	console.log(this.data);
    	console.log(res);
    	/*this.details = JSON.parse(res._body).userAccounts;
    	this.data = this.details[0].faxNumber;
    	console.log(this.data);
    	console.log(this.details);*/	


     this.accountsDataSource = new PractiseComponent(this.loginService);
     this.accountsDataSource = this.data;

    }) 

  }

}
