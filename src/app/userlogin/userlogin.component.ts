import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {

	username: string;
	password: string;
	userdetails: any;
	userdata: string;
	accountscredentials = new FormGroup({
		userid: new FormControl(this.username,[Validators.required,
      Validators.minLength(4)]),
		userpassword: new FormControl('')
	});

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(){
  	this.loginService.newuserlogin(this.username,this.password)
  	.then((res => {
  		this.userdetails = JSON.parse(res._body); 
  		this.userdata = this.userdetails.Session_token;
  		// console.log(res._body);
  		// console.log("tyty" + this.userdetails);
  		console.log("tt" + this.userdata);

  	}))
  	.catch()
  }

}
