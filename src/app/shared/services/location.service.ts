import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Location } from '../models/Location';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

//the URL's called from this service all have these elements
const urlBase = 'http://localhost:54154/';
const mvcCtrl = 'Locations/';
const url: string = urlBase + mvcCtrl;

@Injectable()
export class LocationService {

	login(locationname: string, password: string): Promise<Location[]> {
  		let parms = "locationname=" + locationname + "&password=" + password;
      console.log("login() LocationSVC", locationname, password)
  		return this.http.get(url+'Login?'+parms)
  			.toPromise()
  			.then(resp => resp.json() as Location[])
  			.catch(this.handleError);
  	}

  	list(): Promise<Location[]> {
  		return this.http.get(url+'List')
  			.toPromise()
  			.then(resp => resp.json() as Location[])
  			.catch(this.handleError);
  	}  	

    get(id): Promise<Location> {
      	return this.http.get(url+'Get/' + id)
      		.toPromise()
     		.then(resp => resp.json() as Location)
      		.catch(this.handleError);
    }

     change(location: Location): Promise<any>{
    // This function requires the location to be passed in, so we can change it
      //Because we are making a change, just like when we use the Postman app,
      //we need to use "post" instead of "get"
		    return this.http.post(url+'Change', location)
		      .toPromise()
		      //The .then determines what a Promise returns, in this case, a specified location
		      .then(resp => resp.json() || {})
		      .catch(this.handleError);
  }

    add(location: Location): Promise<any>{
		    return this.http.post(url+'Add', location)
		      .toPromise()
		      .then(resp => resp.json() || {})
		      .catch(this.handleError);
  }

    remove(location: Location): Promise<any>{
		    return this.http.post(url+'Remove', location)
		      .toPromise()
		      .then(resp => resp.json() || {})
		      .catch(this.handleError);
  }

      	//generic error handling
  	private handleError(error:any): Promise<any> { //private functions and properties must be specified, public do not have to be specified
  		console.error('An error has occurred', error);
  		return Promise.reject(error.message || error);
  	}

  constructor(private http: Http) { }

}
