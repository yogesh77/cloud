import { Component, OnInit, Input, ViewChild, TemplateRef} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit {

@ViewChild(TemplateRef) template: TemplateRef<any>;
@Input() public visible: boolean;
@Input() public width: any;
@Input() public height: any;

isPortrait: boolean;
timeouts: number[];

config = {
    disableClose: false,
    panelClass: 'custom-overlay-pane-class',
    hasBackdrop: true,
    backdropClass: '',
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  };
constructor(public dialog: MatDialog) { }
  /**
   * [show For showing the dialog]
   */
show() {
  // const mql: MediaQueryList = window.matchMedia('(min-width: 320px)');
  // mql.addListener((mql: MediaQueryList) => {
  //     // if (screen.availWidth >= 320) {
      
  //     // }
  //     console.log(mql);
  //     this.config.position.left = screen.availWidth * .1 + 'px';
  // });
    // console.log("left margin:" + screen.availWidth * .1 + 'px');
  //     console.log("top margin:" + this.config.position.top);
  //     console.log("bottom margin:" + this.config.position.bottom + 'px');
  //     console.log("left:" + this.config.position.left);
  //     console.log("right margin:" + this.config.position.right);
  //     console.log("width:" + this.config.width);
  //     console.log("height:" + this.config.height);
  // this.config.width = this.width + 'px';
  this.dialog.open(this.template, this.config);
  //console.log(this.dialog.width);
 }
 /**
  * for hiding the dialog
  */
hide() {
  this.dialog.closeAll();
}

ngOnInit() { }

}
