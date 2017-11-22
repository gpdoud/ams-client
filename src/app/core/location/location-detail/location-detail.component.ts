import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import {Location} from '../../../shared/models/Location';
import {LocationService} from '../../../shared/services/location.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {

	location: Location;

	remove() {
		console.log("remove()");
		this.LocationSvc.remove(this.location)
			.then(resp => { 
				console.log(resp); 
				this.router.navigate(["/locations"]); 
			});
	}

  constructor(private LocationSvc: LocationService, 
  	private router: Router, 
  	private route: ActivatedRoute) { }

  ngOnInit() {
		this.route.paramMap
			.switchMap((params: ParamMap) =>
				this.LocationSvc.get(params.get('id')))
			.subscribe((location: Location) => this.location = location);  
	}
}
