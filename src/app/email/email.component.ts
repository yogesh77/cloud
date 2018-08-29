import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../login/login.service';
import { TabView, TabPanel } from 'primeng/primeng';
import { Router } from '@angular/router';

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
  

  @ViewChild(TabView) tabView: TabView; 
 

  constructor(private loginService: LoginService, private router: Router,) {
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
  	
  	
  	this.loginService.adduserauthorization(this.authorizedUserDetails)
    this.display = false;
  	
  }

  ngOnInit() {

  	
  }

}

