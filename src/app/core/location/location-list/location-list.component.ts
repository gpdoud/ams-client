import { Component, OnInit } from '@angular/core';
import { Location } from '../../../shared/models/Location';
import { LocationService } from '../../../shared/services/location.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

	locations: Location[];

	getLocations(): void {
		this.LocationSvc.list()
			.then(resp => this.locations = resp);
	}


  constructor(private LocationSvc: LocationService) { }

  ngOnInit() {
  	this.getLocations();  	
  }

}
