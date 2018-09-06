import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../login/login.service';
import { TabView, TabPanel } from 'primeng/primeng';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable"

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
	/*userList: any;*/
	authorizedUserDetails:string;
	addRecordError: any;
  loading: boolean = false;
 
  constructor(private loginService: LoginService, private router: Router,) {
  	// this.userlist = [];  	

   }

  showDialog(){
  	this.display = true;
  }

  focus() {
    this.addRecordError = '';
  }

  submituserdetails(){  	
  	
  	this.loginService.adduserauthorization(this.authorizedUserDetails)    
    this.loading  = true; 
    this.userlist = [];
    this.loginService.showuserauthorization()
    .then((res) => {
      /*this.userdetails = JSON.parse(res._body);      */
      this.userdetails = res.json();
        this.userdata = this.userdetails.authorization;
        for (let key in this.userdata[0]){
          if(key=='username')
          this.userlist.push(key);
        }

        this.loading  = false;
    })
  	
  }

showErrorOnFailedLogin(){}

deleteuserprofile(recordType: string){
    this.loginService.deleteuserauthorization(); 
 }

displayusernames(){
  this.loginService.showuserauthorization()
    .then((res) => {
      this.userlist = []; 
      this.userdetails = JSON.parse(res._body);      
        this.userdata = this.userdetails.authorization;
        for (let key in this.userdata[0]){
          this.userlist.push(key);
        }      
            
    })

.catch((error) => this.showErrorOnFailedLogin());
}

  ngOnInit() {

    // this.loading  = true;
    this.userlist = []; 
    this.loading  = true;
  	this.loginService.showuserauthorization()

    .then((res) => {
      // this.userdetails = JSON.parse(res._body);    
         this.userdetails = res.json();      
      // this.userdetails = res.json().authorization['username'];
      console.log('hee', this.userdetails.authorization[0].id);      
        this.userdata = this.userdetails.authorization;
        console.log('this.userdetails', this.userdetails.authorization[0].username);
        console.log('this.userdetails', this.userdetails);

        // for (let key in this.userdata[0]){
        //   if(key=='username')
        //   this.userlist.push(key);
        // }

            this.loading  = false;
            // console.log("userdata",this.userdata);
    })

.catch((error) => this.showErrorOnFailedLogin());
  }

}

