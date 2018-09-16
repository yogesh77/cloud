import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import * as moment from 'moment';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

	userId: any;  
  record_dialog: any;
  accRecService: any;
  faxRecordsLength: number;
  faxRecordsDateError: any;
  value: Date;
  faxRecords: any = [];
  details: any;	
	productlist: any[];
  faxRecordsDataSource: any|null;
  RecordsstartDate: any;
  RecordsendDate: any;
  recordsStartDate: any;
  recordsEndDate: any;
  faxRecordsStartDate: any;
  faxRecordsEndDate: any;
  faxRecordsCSV: any;
  faxRecordsResponse: any;
  userAccountDetails: any;
  faxRecordsBlobData: any;
  faxRecordsColumns = ['Calling' , 'Called' , 'Pages' , 'Direction' , 'DateReceived' , 'Actions'];  
  faxRecordsData: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  get data(): any {
   return this.faxRecordsData.value; }

  constructor(private loginService: LoginService) { 
       
}


/*showrecord(){
  this.recordsStartDate =  moment(this.faxRecordsStartDate).format('YYYY-MM-DD');
  this.recordsEndDate =  moment(this.faxRecordsEndDate).format('YYYY-MM-DD');

  
      const date = moment().format('YYYY-MM-DD');
      console.log('Date'+date);
      if ((Date.parse(this.faxRecordsStartDate.toString()) > Date.parse(this.faxRecordsEndDate.toString())))
        console.log('Startdate'+ this.faxRecordsStartDate);
      console.log('Enddate'+ this.faxRecordsEndDate);
      {
              alert("Thanks");
      }
      else {
        alert('try');
      }          
  }
*/

  onGetRecordSuccess(response: any) {
     this.faxRecords = response.faxRecord;     
     this.faxRecordsData.next (this.faxRecords);
      if (this.faxRecordsDataSource) {
      this.setValue();

}
}

setValue(){}

downloadFile(data: any) {
    this.faxRecordsBlobData = new Blob( [data], { type: 'text/csv' }
      );
    console.log('fax'+this.faxRecordsBlobData);
    // FileSaver.saveAs( this.faxRecordsBlobData, 'Fax Records' + '.csv' );
    }

recordDownlaod() {
    this.recordsStartDate =  moment(this.faxRecordsStartDate).format('YYYY-MM-DD');
    this.recordsEndDate =  moment(this.faxRecordsEndDate).format('YYYY-MM-DD');
    this.loginService.getDownloadRecords(1, this.recordsStartDate,
    this.recordsEndDate, this.faxRecordsCSV).subscribe(data => {
    this.faxRecordsResponse = data.text();

    console.log('record'+ this.userAccountDetails);

     /*if (this.userAccountDetails) {*/
         this.downloadFile(this.faxRecordsResponse);
       
     }
      , error => { console.log(error); }
        );
    }

    displayFaxRecords(){
      /*if (this.userId != this.userAccountDetails.id) {
        this.faxRecordsDateError = '';
        if ((Date.parse(this.faxRecordsStartDate.toString()) > Date.parse(this.faxRecordsEndDate.toString()))) {
        this.record_dialog.show();
        this.faxRecordsDateError = 'Start date should be less than End date';

      }


      this.recordsStartDate =  moment(this.faxRecordsStartDate).format('YYYY-MM-DD');
        this.recordsEndDate =  moment(this.faxRecordsEndDate).format('YYYY-MM-DD');
        this.accRecService
        .getRecords(this.userAccountDetails.id, this.recordsStartDate, this.recordsEndDate)
        .then((response) => {
          this.faxRecordsLength = JSON.parse(response._body).faxRecord.length;
          this.onGetRecordSuccess(JSON.parse(response._body));
          this.userId = JSON.parse(response._body).account;
          console.log(this.userId);
        })
        .catch((error) => console.log('Invalid Data Sent to Server'));
    }*/

    alert('Hello');


}

ngOnInit() {
  this.displayFaxRecords();
}


}