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
  selectedIndex = 1;

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
  	
  	// this.email =this.authorizedUserDetails.emailAddress
  	this.loginService.adduserauthorization(this.authorizedUserDetails)
  	// .then (() => this.onAddRecordSuccess(recordType))
  	// .catch((error) => this.addRecordError = error._body);
  }

  // onAddRecordSuccess(recordType: string)){
  // 	this.authorizedUserDetails.emailAddress = '';
  // }

  
  onChange($event) {   
   
    this.selectedIndex = $event.index;    
    switch (this.selectedIndex) {
      case 0: 
      alert("dashboard");       
        this.router.navigate(['/dashboard']);                  
        break;
      case 1: 
        alert("accounts");
      this.router.navigate(['/accounts']);     
      default:
      alert("hello");
      break;
    }

    console.log(this.selectedIndex);
  }
  
  



  ngOnInit() {

  	
  }

}

// @Component({
//   selector: 'first',
//   template: '<p>first component</p>'
// })
// export class FirstComponent {
//   constructor() {
//     console.log('first component constructor');
//   }
  
//   ngOnInit() {
//     console.log('first component ngOnInit');
//   }
// }