import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from '../models/User';
import { StartupService } from '../services/startup.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  url = this.StartupSvc.settings['serverURL'] + 'Users/';

  constructor(private http: Http,
              private StartupSvc: StartupService) { }


  	login(username: string, password: string): Promise<User[]> {
  		let parms = "username=" + username + "&password=" + password;
      console.log("login() UserSVC", username, password)
  		return this.http.get(this.url+'Login?'+parms)
  			.toPromise()
  			.then(resp => resp.json() as User[])
  			.catch(this.handleError);
  	}

  	list(): Promise<User[]> {
  		return this.http.get(this.url+'List')
  			.toPromise()
  			.then(resp => resp.json() as User[])
  			.catch(this.handleError);
  	}  	

    get(id): Promise<User> {
      return this.http.get(this.url+'Get/' + id)
      .toPromise()
      .then(resp => resp.json() as User)
      .catch(this.handleError);
    }

     change(user: User): Promise<any>{
    // This function requires the user to be passed in, so we can change it
      //Because we are making a change, just like when we use the Postman app,
      //we need to use "post" instead of "get"
      return this.http.post(this.url+'Change', user)
      .toPromise()
      //The .then determines what a Promise returns, in this case, a specified user
      .then(resp => resp.json() || {})
      .catch(this.handleError);
  }

    add(user: User): Promise<any>{
      return this.http.post(this.url+'Add', user)
      .toPromise()
      .then(resp => resp.json() || {})
      .catch(this.handleError);
  }

    remove(user: User): Promise<any>{
      return this.http.post(this.url+'Remove', user)
      .toPromise()
      .then(resp => resp.json() || {})
      .catch(this.handleError);
  }

    	//generic error handling
  	private handleError(error:any): Promise<any> { //private functions and properties must be specified, public do not have to be specified
  		console.error('An error has occurred', error);
  		return Promise.reject(error.message || error);
  	}

}
