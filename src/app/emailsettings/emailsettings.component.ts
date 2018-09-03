import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emailsettings',
  templateUrl: './emailsettings.component.html',
  styleUrls: ['./emailsettings.component.scss']
})
export class EmailsettingsComponent implements OnInit {

	emailCover: boolean;
	emailReport: boolean;
	userlist: any[];
	userdetails: string;
	userdata: any [];

  constructor(private loginService: LoginService, private router: Router) { 
  	this.userlist = []; 
  }


  showErrorOnFailedLogin(){}

  ngOnInit() {


  	this.loginService.showEmailReceiver()
  	.then((res) => {
  		this.userdetails = JSON.parse(res._body); 
  		this.userdata = this.userdetails['receiver'];

  		for (let key in this.userdata[0]){
  			if(key == 'emailAddress' || key == 'alias')
  			 this.userlist.push(key);
  		}
  	})


  	.catch((error) => this.showErrorOnFailedLogin());

  	
  }

}
