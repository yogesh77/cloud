import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
	userdata: any [];
	display: boolean = false;	
	userlist: any[];
	userdetails: any;
	userList: any = [];
	authorizedUserDetails:string;
	addRecordError: any;

  constructor(private loginService: LoginService) {
  	this.userlist = [];
  	this.loginService.showuserauthorization()
  	.then((res) => {
  		this.userdetails = JSON.parse(res._body);
  		
     	 this.userdata = this.userdetails.authorization;
     	 for (let key in this.userdata[0]){
     	 	this.userlist.push(key);
     	 }

  		
  		// console.log("userdata",this.userdata);
  	})


   }

  showDialog(){
  	this.display = true;
  }

  focus() {
    this.addRecordError = '';
  }

  submituserdetails(){
  	
  	// this.email =this.authorizedUserDetails.emailAddress
  	this.loginService.adduserauthorization(this.authorizedUserDetails)
  	// .then (() => this.onAddRecordSuccess(recordType))
  	// .catch((error) => this.addRecordError = error._body);
  }

  // onAddRecordSuccess(recordType: string)){
  // 	this.authorizedUserDetails.emailAddress = '';
  // }

  ngOnInit() {

  	
  }

}
