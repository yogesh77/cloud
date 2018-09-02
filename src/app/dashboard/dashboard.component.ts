import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{

	itemCount: number = 4;

	 btnText: string = 'Add an Item';    // Add this line

	 goalText: string = 'My first life goal';    // Add this

	 goals = [];

	 ngOnInit() {
    this.itemCount = this.goals.length;

	 console.log(this.itemCount);
  }

addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
     console.log(this.itemCount);
  }
  }

}
