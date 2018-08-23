import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {

	selectedIndex: any = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

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
      break;     
      default:
      alert("hello");
      break;
    }

    console.log(this.selectedIndex);
  }


}
