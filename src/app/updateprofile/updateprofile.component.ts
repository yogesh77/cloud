import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Message } from 'primeng/components/common/api';


@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',  
  styleUrls: ['./updateprofile.component.scss']
})
export class UpdateprofileComponent implements OnInit {

	country: string = "India";
  name: string = 'Sachin';
  credentials: any;
  credential: any;
  userprofile:any;
  userlastname: any;
  userLastName: any;
  showHtml: boolean;
  flag: boolean = true;
  message: any = [] ;
  msgs: Message[] = [];
  isDisabled: boolean = true;
	

  constructor(private loginService: LoginService) { 
    this.name = 'Sachin';
  }

  ngOnInit() {
    this.viewprofile()
  }

  viewprofile(){
    this.showHtml = false;
    // alert("hello");

    // this.credentials = { "country": this.country, "address": this.country,
    //  "mobile": '9874563210', "firstname": 'Ram', "lastname": this.userLastName, birthdate: '12/12/2012',
    //  "state":'delhi', "city": 'delhi', "pincode": 2023632, "gender": 'Male', "school_id":1}

    this.loginService.getprofiledetails()
  	
  	.then((res=> {
      // console.log('response', res);            
      this.userprofile = JSON.parse(res._body);
      // this.credentials = this.userprofile['message'][0]['user_info'];
      this.credentials = this.userprofile.message[0].user_info;
      this.credential = this.userprofile.message[0]['class_info']['name'];
      
      console.log("class" , this.credential);

      // console.log('body', this.userprofile);  
      // this.userlastname = this.userprofile.message;
      // console.log('message', this.userlastname);      
      // this.userLastName = this.userprofile['message'][0]['user_info']['lastname'];
      // console.log('class', this.userLastName);
      this.showHtml = true;

      }))

    
  	.catch((error)=>{this.handleError()})

    // this.loginService.getprofiledetails()
    // .then((res=> console.log('hel', res)))
    // .catch
  }


  handleError(){}

  updateuserprofiles(){
   this.flag=false;    
   
}



updateprofile(){
  this.loginService.updateuserprofile(this.credentials)
  .then((res=> {console.log('toto' + res)
    this.msgs.push({severity:'info',detail:'Profile updated successfully'});
    this.viewprofile();
    this.flag = true;
}))
  .catch()
}

show() {
    
    // alert("Profile updated successfully");
}

cancelupdate(){
  this.viewprofile();  
  this.flag = true;

}

}
