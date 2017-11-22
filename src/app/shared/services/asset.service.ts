import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Asset } from '../../shared/models/asset';
import { Location } from '../../shared/models/location';
import { Vehicle } from '../models/Vehicle';

const urlBase = 'http://localhost:54154/';
const mvcCtrl = 'Assets/';
const url: string = urlBase + mvcCtrl;


@Injectable()
export class AssetService {

  licenseplate: string;
  location: Location;

// Dummy data that we can test with
  //Here we have our fake vehicle information, which has three fields at the moment
testVehicle:Vehicle[]=[
    {License: "Feature", VIN: "TestGibberish", Make: ".NET", Model: "Bootcamp", HasLights: false}
];
  
  //Id, Name, Department, Address, City, State, Phone
  testLocation: Location[] = [
    {Id: 0, Name: 'The Place', Department: 'Test Department', Address: 'Here', City: 'Queen City', State: 'Testing', Phone: '5558675309'}
  ];
  //Id, Vendor, Name, PurchaseDate, PurchaseOrderNumber, AssetCost, OutForRepairDate, BackFromRepairDate
  //RetiredDate, SurplusDate, SalesProceeds, PhotoPath, Type, Vehicle, LocationId, Location
//Here is our fake asset, which has our fake vehicle and location built into it
testAsset: Asset[];

  
  constructor(private http: Http) {}
  
 
    search(): Promise<Asset[]> {
        let locId = (typeof this.location === "undefined") ? "" : this.location.Id;
        let parms = "?licenseplate=" + this.licenseplate + "&location=" + locId;
        console.log (parms);
        return this.http.get(url+'Search' + parms)
        .toPromise()
        .then(resp => resp.json() as Asset[])
        .catch(this.handleError);
    }

    list(): Promise<Asset[]> {
         return this.http.get(url+'List')
           .toPromise()
           .then(resp => resp.json() as Asset[])
           .catch(this.handleError);
       }

    get(id): Promise<Asset> {
         return this.http.get(url+'Get/'+id)
           .toPromise()
           .then(resp => resp.json() as Asset)
           .catch(this.handleError);
      }

    add(asset:Asset): Promise<any> {
        console.log("service add()");
        console.log(asset);
        return this.http.post(url+'Add', asset)
        .toPromise()
        .then(resp => resp.json() || {})
        .catch(this.handleError);
      }

    change(asset:Asset): Promise<any> {
        return this.http.post(url+'Change', asset)
        .toPromise()
        .then(resp => resp.json() || {})
        .catch(this.handleError);
      }

     remove(asset:Asset): Promise<any> {
        return this.http.post(url+'Remove', asset)
        .toPromise()
        .then(resp => resp.json() || {})
        .catch(this.handleError);
      }


  private handleError(error: any): Promise<any> {  //returns a Promise of any type
    console.error('An error has occurred', error);
    return Promise.reject(error.message || error); //reject means failed (so whatever user tried to do didn't work)
  }
  
}
