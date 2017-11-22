import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from '../models/User';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

//the URL's called from this service all have these elements
const urlBase = 'http://localhost:54154/';
const mvcCtrl = 'Users/';
const url: string = urlBase + mvcCtrl;


@Injectable()
export class UserService {

  constructor(private http: Http) { }


  	login(username: string, password: string): Promise<User[]> {
  		let parms = "username=" + username + "&password=" + password;
      console.log("login() UserSVC", username, password)
  		return this.http.get(url+'Login?'+parms)
  			.toPromise()
  			.then(resp => resp.json() as User[])
  			.catch(this.handleError);
  	}

  	list(): Promise<User[]> {
  		return this.http.get(url+'List')
  			.toPromise()
  			.then(resp => resp.json() as User[])
  			.catch(this.handleError);
  	}  	

    get(id): Promise<User> {
      return this.http.get(url+'Get/' + id)
      .toPromise()
      .then(resp => resp.json() as User)
      .catch(this.handleError);
    }

     change(user: User): Promise<any>{
    // This function requires the user to be passed in, so we can change it
      //Because we are making a change, just like when we use the Postman app,
      //we need to use "post" instead of "get"
      return this.http.post(url+'Change', user)
      .toPromise()
      //The .then determines what a Promise returns, in this case, a specified user
      .then(resp => resp.json() || {})
      .catch(this.handleError);
  }

    add(user: User): Promise<any>{
      return this.http.post(url+'Add', user)
      .toPromise()
      .then(resp => resp.json() || {})
      .catch(this.handleError);
  }

    remove(user: User): Promise<any>{
      return this.http.post(url+'Remove', user)
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
