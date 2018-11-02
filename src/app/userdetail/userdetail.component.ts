import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {

  heading: string = 'Welcome';

  @Input() useralert: string;

  constructor() { }

  ngOnInit() {
  }

}
