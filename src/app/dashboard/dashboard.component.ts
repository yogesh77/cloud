import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{

	itemCount: number = 4;

	 btnText: string = 'Add an Item';    // Add this line

	 goalText: string = 'My first life goal';    // Add this

   heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

	 goals = [];

   show: boolean = true;

   // Email: string;
   // Password: string;
   // Mobile: string;
   // Firstname: string;
   // Lastname: string;
   // Studentclass: string;
   // Gender: string;
   registration: any;
   userverification: any;

   Email: string = 'yatagiwoxa@zippiex.com';
   Password: string = '123456';
   Mobile: string = '9874563210';
   Firstname: string = 'kolo';
   Lastname: string = 'lolo'
   Studentclass: string = 'I';
   Gender: string = 'Male';
   mail: boolean = false;
   mobile: boolean = false;

   
   
   constructor(public loginService: LoginService){
     
     // this.loginService.sendemail(this.registration);

        }

   
   signup(){

 this.registration = {"email":this.Email, "password":this.Password, "mobile":this.Mobile,
    "firstname":this.Firstname,"lastname":this.Lastname,"class":this.Studentclass,"gender":this.Gender}


         this.loginService.userregistration(this.registration) 
         // this.loginService.registrationemail(this.Email)        

         .then((res) => {
           console.log(res);
           this.emailverfication();
         })
         // .then((res => {console.log(res._body.message);} ))
         // .then((res => alert('hello'+ res._body) ))
         .catch((error) => this.handleError());
         
   }
handleError(){}
	 ngOnInit() {
  //   this.itemCount = this.goals.length;

	 // console.log(this.itemCount);
  }

addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
     console.log(this.itemCount);
  }

  emailverfication(){

    this.userverification = {'email': this.Email, 'verify_mobile': this.mobile, 'verify_email': this.mail}

    this.loginService.registrationemail(this.userverification)

         .then((res) => {console.log(res);})
         // .then((res => {console.log(res._body.message);} ))
         // .then((res => alert('hello'+ res._body) ))
         .catch((error) => this.handleError());

  }

  
  }


