import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
	authorizedUserDialog: boolean;

  constructor() { }

  addAuthorisedUser(){
  	alert("hello");
  }

  ngOnInit() {
  }

}
