import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Vehicle } from '../models/Vehicle';
import { Asset } from '../models/asset';
import { StartupService } from '../services/startup.service';

@Injectable()
export class VehicleService {

	url = this.StartupSvc.settings['serverURL'] + 'Vehicles/';

	 constructor(private http: Http,
				 private StartupSvc: StartupService) { }

	list(): Promise<Vehicle[]> {
		return this.http.get(this.url+'List')
			.toPromise()
			.then(resp => resp.json() as Vehicle[])
			.catch(this.handleError);	
	}

	get(id): Promise<Vehicle> {
		return this.http.get(this.url+'Get/'+id)
			.toPromise()
			.then(resp => resp.json() as Vehicle)
			.catch(this.handleError);	
	}

	add(vendor: Vehicle): Promise<any> {
		return this.http.post(this.url+'Add', vendor)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);
	}

	change(vendor: Vehicle): Promise<any> {
		return this.http.post(this.url+'Change', vendor)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);
	}

	remove(vendor: Vehicle): Promise<any> {
		return this.http.post(this.url+'Remove', vendor)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);	
	}
	private handleError(error: any): Promise<any> {
		console.error('An error has occurred', error);
		return Promise.reject(error.message || error);
	}	  

}
