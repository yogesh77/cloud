import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

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
	token: string;
  flag: boolean = true;
	accountscredentials = new FormGroup({
	userid: new FormControl(this.username,[Validators.required,
      Validators.minLength(4)]),
		userpassword: new FormControl('')
	});

  constructor(private loginService: LoginService, private router: Router) { }

  
  ngOnInit() {
  }

  login(){
  	this.loginService.newuserlogin(this.username,this.password)
  	.then((res => {
  		// this.userdetails = JSON.parse(res._body); 
  		this.userdetails = res.json(); 
  		// this.userdata = this.userdetails.Session_token;
  		this.userdata = this.userdetails['Session_token'];
  		localStorage.setItem("setToken",this.userdata);
  		// this.token = localStorage.getItem('setToken')
  		// console.log(res._body);
  		// console.log("tyty" + this.userdetails);
  		console.log("tt" + this.userdata);
      this.flag= false;  	
  		this.router.navigate(['/mainmenu/userlogin/updateprofile']);	
  		// this.router.navigate(['/mainmenu/dashboard']);
  		// console.log('val' ,typeof localStorage.getItem('setToken'));
  		// console.log('val' + localStorage.getItem('setToken'));
  		this.loginService.getprofiledetails()
  		.then((res=> console.log('hel', res)))
  		.catch()

  	}))
  	.catch()
  }

  profile(){
  	this.loginService.getprofiledetails()
  	.then((res=> console.log('hel', res)))
  	.catch
  }

  //Function
  showalert(){
    return "Incedo";
  }
  

}
