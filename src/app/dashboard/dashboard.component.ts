import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Validators, FormControl,  FormGroup } from '@angular/forms';

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

   name = new FormControl('', Validators.required);
   // this.name.value = 'df';

    profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
    street: new FormControl('')})
  });


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
   account: any;
   mailValue: any = [];
   values: string;
   message: string;

   // message: Message[];

   // selectedValues: string[] = ['userEmail','userMobile'];

   selectedValues: boolean = false;    

   constructor(public loginService: LoginService){
     
     // this.loginService.sendemail(this.registration);

        }

   
   signup(){

 this.registration = {"email":this.Email, "password":this.Password, "mobile":this.Mobile,
    "firstname":this.Firstname,"lastname":this.Lastname,"class":this.Studentclass,"gender":this.Gender}


         this.loginService.userregistration(this.registration) 
         // this.loginService.registrationemail(this.Email)        

         .then((res) => {
           // let response = JSON.stringify(res._body.message);
           // console.log('resy' + response);
           // console.log(myJSON._body.message);
            let value = JSON.parse(res._body);                       
           // console.log(JSON.parse(res._body.message));
           console.log(value['message']);
           // console.log('va' + value.message);
           // alert(res._body.message);
           if(value['status']==200){
             alert('welcome');
             // this.showToast();
           }

           else{
              this.showToast();
           }
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

    // this.userverification = {'email': this.Email, 'verify_mobile': this.mobile, 'verify_email': this.mail}
    this.userverification = {'email': this.Email, 'verify_mobile': this.mobile, 'verify_email': this.selectedValues}    

    this.loginService.registrationemail(this.userverification)

         .then((res) => {console.log(res);})         
         // .then((res => alert('hello'+ res._body) ))
         .catch((error) => this.handleError());

  }

  showToast() {
    // this.mailValue.push({severity:'info', summary:'User Registered ', detail:'Email Id Is Already Exists', duration: 2000,   position: 'bottom'});
    this.mailValue.push({severity:'info', summary:'User Registered ', detail:this.message});
}

updateName() {
  this.name.setValue('Nancy');
}

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.log(this.profileForm.value);
}

  onKey(event: any){
    // this.values = '';
  }

  }


