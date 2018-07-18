import 'rxjs/add/operator/toPromise';
import { Inject, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CookieService, TokenService, RefreshService } from '../app.service';

@Injectable()

export class LoginService{

	account: string;
	public accountDetail:string;
	constructor(private http: Http, private tokenService: TokenService) {}

	API_END_POINT = 'https://cfax-sandbox.clearfly.net/cfax/rest/';
	URL = "https://cfax-sandbox.clearfly.net/cfax/rest/aaa/login?rememberMe=true";
	accountUrl = "https://cfax-sandbox.clearfly.net/cfax/rest/accounts/1/products";
	accountsender = "https://cfax-sandbox.clearfly.net/cfax/rest/accounts/1/senders";

	submit(userName: string, password: string){
		return this.post(userName, password);
	}

	//post method
	post(userName: string, password: string) : any{
  	const loginUrl = this.URL;
  	const headers = new Headers( 	
	{ 'Content-Type' : 'application/json', 
	  'Authorization': 'Basic' + btoa(userName + ':' + password) });	
	   return this.http.post(loginUrl, '', { headers })
	  .toPromise()
	  .then((response) => response)
      .catch(this.handleError);    	
	}

	//get function 
	getaccounts(): any{	
		const accountsUrl = this.accountUrl;
		const token: string = this.tokenService.getToken()
		const headers = new Headers(			
	{
		'Content-Type' : 'application/json',
		'authorization': 'Bearer ' + token });		
		return this.http.get(accountsUrl,{ headers })
		.toPromise()
	 	.then((res) => {return res;})		
      	.catch(this.handleError);
	}

	
	//for error handling
	handleError(){ }

	//on login success
	/*onLoginSuccess(response){
    let tokenvalue = JSON.parse(response._body);
    this.account = tokenvalue.jwt;
    this.getaccounts();
    console.log(response);
  	}
*/

	/*getAuthorized(accId: number): Promise<any>
	{ return this.get(accId); }*/

	accountsenderid(): any{	
		const accountSender = this.accountsender;
		const token: string = this.tokenService.getToken()
		const headers = new Headers(			
	{
		'Content-Type' : 'application/json',
		'authorization': 'Bearer ' + token });		
		return this.http.get(accountSender,{ headers })
		.toPromise()
	 	.then((res) => {return res;})		
      	.catch(this.handleError);
	}
/*
	onLoginSucces(){
    let tokenvalue = JSON.parse(response._body);
    this.account = tokenvalue.jwt;
    this.accountsenderid();
    console.log(this.accountsenderid());
  	}*/
	
  	getDownloadRecords(accId: number, startDate: string, endDate: string, csv: any) {
       // https://cfax-sandbox.clearfly.net/cfax/rest/accounts/1/records?start=2017-08-01&end=2017-11-16&number=4067940226&csv=flase
       const url = "https://cfax-sandbox.clearfly.net/cfax/rest/accounts/1/records?start=" +
       startDate + '&end=' + endDate + '&number=' +accId+ '&csv=' + 'true';
    const token: string = this.tokenService.getToken();
    const headers = new Headers({ Authorization: 'Bearer ' + token });
        return this.http.get(url, { headers });
      }


    getAccountsDetail(): Promise<any> {
    
      const url = this.API_END_POINT + 'users/accounts';
      const token: string = this.tokenService.getToken();
      const headers = new Headers({ Authorization: 'Bearer ' + token });
      return this.http.get(url, { headers })
        .toPromise()        
        .then((res) => res)
        .catch(this.handleError);        
    }

    accountDetails(): Promise<any> {
    	const url = "https://cfax-sandbox.clearfly.net/cfax/rest/accounts/1";
    	const token: string = this.tokenService.getToken();
    	const headers = new Headers({ Authorization: 'Bearer ' + token });
      	return this.http.get(url, { headers })
        .toPromise()
        .then((res) => res)
        .catch(this.handleError);    
    }
}

