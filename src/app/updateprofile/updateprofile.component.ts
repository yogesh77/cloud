import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.scss']
})
export class UpdateprofileComponent implements OnInit {

	country: string;
	credentials = { 'country': this.country}

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  updateprofile(){
  	this.loginService.updateuserprofile(this.credentials)
  	.then((res=> console.log(res)))
  	.catch();
  }

}
