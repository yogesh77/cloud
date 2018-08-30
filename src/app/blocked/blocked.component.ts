import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-blocked',
  templateUrl: './blocked.component.html',
  styleUrls: ['./blocked.component.scss']
})
export class BlockedComponent implements OnInit {

	userdetails: any;
	userdata: any[];
	userlist: any = [];	
	authorizedUserDetails:string;
	display: boolean = false;
	blockednumber: any;


  constructor(private loginService: LoginService) {

	// this.userlist = [];
  	this.loginService.getAuthorized()
  	.then((res) => {
  			this.userdetails = JSON.parse(res._body);
  			this.userdata = this.userdetails.blockedNumber;

  			for (let key in this.userdata[0]){
  				this.userlist.push(key);
  			}
  			console.log(this.userdetails);
  			console.log(this.userdata);
  	})
   }


addblockednumber(){
	this.display = true;
}

addBlockedNumber(){
	this.loginService.addBlockedNumber(this.blockednumber);
	this.display = false;
	console.log('hello', this.loginService.addBlockedNumber(this.blockednumber) )
}

  ngOnInit() {
  }

}
