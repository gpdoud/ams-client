import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Vehicle } from '../models/Vehicle';
import { Asset } from '../models/asset';

const urlBase = 'http://localhost:54154/';
const mvcCtrl = 'Vehicles/';
const url: string = urlBase + mvcCtrl;

@Injectable()
export class VehicleService {

 constructor(private http: Http) { }

	list(): Promise<Vehicle[]> {
		return this.http.get(url+'List')
			.toPromise()
			.then(resp => resp.json() as Vehicle[])
			.catch(this.handleError);	
	}

	get(id): Promise<Vehicle> {
		return this.http.get(url+'Get/'+id)
			.toPromise()
			.then(resp => resp.json() as Vehicle)
			.catch(this.handleError);	
	}

	add(vendor: Vehicle): Promise<any> {
		return this.http.post(url+'Add', vendor)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);
	}

	change(vendor: Vehicle): Promise<any> {
		return this.http.post(url+'Change', vendor)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);
	}

	remove(vendor: Vehicle): Promise<any> {
		return this.http.post(url+'Remove', vendor)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);	
	}
	private handleError(error: any): Promise<any> {
		console.error('An error has occurred', error);
		return Promise.reject(error.message || error);
	}	  

}
