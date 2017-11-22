import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { Asset } from '../../../shared/models/asset';
import { AssetService } from '../../../shared/services/asset.service';
import { LocationService } from '../../../shared/services/location.service';
import { Location } from '../../../shared/models/location';


@Component({
  selector: 'app-asset-search',
  templateUrl: './asset-search.component.html',
  styleUrls: ['./asset-search.component.css']
})
export class AssetSearchComponent implements OnInit {
	//these two variables represent the current search criteria for the user to enter
	licenseplate: string = "";
	location: Location;
	locations: Location []; 

	//getting a list of the locations in the system for the dropdown items to search for
	getLocation(): void {
	this.LocationSvc.list()
		.then(resp => this.locations = resp);  
	}
	//this search function takes the user input and stores the information to the asset service
	//so that when it navigates to the search list it can communicate with the backend server
	search(): void {
		this.AssetSvc.licenseplate = this.licenseplate; 
		this.AssetSvc.location = this.location;
		this.router.navigate(['/assets/search-list']);  
	}
  constructor(private AssetSvc: AssetService, private LocationSvc: LocationService, private router: Router) { }

  ngOnInit() {
  this.getLocation();
  }

}
