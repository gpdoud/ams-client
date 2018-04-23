import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Location } from '../models/Location';

import { StartupService } from '../services/startup.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class LocationService {

	url = this.StartupSvc.settings['serverURL'] + 'Locations/';

	constructor(private http: Http,
						  private StartupSvc: StartupService) { }

	login(locationname: string, password: string): Promise<Location[]> {
  		let parms = "locationname=" + locationname + "&password=" + password;
      console.log("login() LocationSVC", locationname, password)
  		return this.http.get(this.url+'Login?'+parms)
  			.toPromise()
  			.then(resp => resp.json() as Location[])
  			.catch(this.handleError);
  	}

  	list(): Promise<Location[]> {
  		return this.http.get(this.url+'List')
  			.toPromise()
  			.then(resp => resp.json() as Location[])
  			.catch(this.handleError);
  	}  	

    get(id): Promise<Location> {
      	return this.http.get(this.url+'Get/' + id)
      		.toPromise()
     		.then(resp => resp.json() as Location)
      		.catch(this.handleError);
    }

     change(location: Location): Promise<any>{
    // This function requires the location to be passed in, so we can change it
      //Because we are making a change, just like when we use the Postman app,
      //we need to use "post" instead of "get"
		    return this.http.post(this.url+'Change', location)
		      .toPromise()
		      //The .then determines what a Promise returns, in this case, a specified location
		      .then(resp => resp.json() || {})
		      .catch(this.handleError);
  }

    add(location: Location): Promise<any>{
		    return this.http.post(this.url+'Add', location)
		      .toPromise()
		      .then(resp => resp.json() || {})
		      .catch(this.handleError);
  }

    remove(location: Location): Promise<any>{
		    return this.http.post(this.url+'Remove', location)
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
