import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {


	selectedIndex: any = '';

  constructor(private router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

onChange($event) {   
   
    this.selectedIndex = $event.index;    
    switch (this.selectedIndex) {
      case 0: 
      // alert("dashboard");       
        this.router.navigate(['/mainmenu/dashboard']);                  
        break;
      case 1:         
      	this.router.navigate(['/mainmenu/accounts']);
      	break; 
      case 2:         
      	this.router.navigate(['/mainmenu/email']);
      	break;  
      default:
      alert("hello");
      break;
    }

    console.log(this.selectedIndex);
  }

  onMenuItemClick(menuItem: string) {
    switch (menuItem) {
      case 'email':
      // alert("email");
        this.router.navigate(['/mainmenu/email']);
        break;
      case 'dashboard':
      // alert("dashboard");
        this.router.navigate(['/mainmenu/dashboard']);
        break;
        default:
        alert("hello");
      	break;
}}
}
