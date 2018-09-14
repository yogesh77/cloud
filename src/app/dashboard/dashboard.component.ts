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

   Email: string;
   Password: string;
   Mobile: string;
   Firstname: string;
   Lastname: string;
   Studentclass: string;
   Gender: string;
   registration: any;

   
   
   constructor(public loginService: LoginService){
     
     // this.loginService.sendemail(this.registration);

        }

   
   signup(){
 this.registration = {"email":this.Email, "password":this.Password, "mobile":this.Mobile,
    "firstname":this.Firstname,"lastname":this.Lastname,"class":this.Studentclass,"gender":this.Gender}


         this.loginService.sendemail(this.registration);
         // console.log(this.loginService.sendemail(this.registration));
   }

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

  
  }


