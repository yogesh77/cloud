import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.scss']
})
export class UpdateprofileComponent implements OnInit {

	// country: string = "england";
  country: string;
  credentials: any;
  userprofile:any;
  userlastname: any;
  messageForUser: any;
  flag: boolean = true;
  message: any = [] ;
	

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.updateprofile()
  }

  updateprofile(){

    // alert("hello");

    this.credentials = { "country": this.country}

    this.loginService.getprofiledetails()
  	
  	.then((res=> {
      // console.log('response', res);            
      this.userprofile = JSON.parse(res._body);
      // console.log('body', this.userprofile);  
      this.userlastname = this.userprofile.message;
      // console.log('message', this.userlastname);      
      this.messageForUser = this.userprofile['message'][0]['user_info']['lastname'];
      console.log('class', this.messageForUser);

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



finallyupdate(){
  this.loginService.updateuserprofile(this.messageForUser)
  .then((res=> {console.log('toto' + res)
    this.show()
    this.updateprofile();
}))
  .catch()
}

show() {
    // this.message.push({detail:'Update Successfully'});
    alert("Profile updated successfully");
}

cancelupdate(){
  this.updateprofile();  
  this.flag = true;

}

}
