import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
	
	@Input() countNumber: string;
	@Input()  name: string;
	
  	@Output() voted = new EventEmitter<boolean>();
  	didVote = false;

  	constructor() {
  	
  	 }


  	ngOnInit() {
 	 }

 	 vote(agreed: boolean) {
    	this.voted.emit(agreed);
    	this.didVote = true;
  }
 	 


}
