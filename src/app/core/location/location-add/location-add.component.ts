import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Location } from '../../../shared/models/Location';
import { LocationService } from '../../../shared/services/location.service';

@Component({
  selector: 'app-location-add',
  templateUrl: './location-add.component.html',
  styleUrls: ['./location-add.component.css']
})


export class LocationAddComponent implements OnInit {

		//creates new blank instance of location
	location: Location = new Location(0, '', '', '', '', '', '');
	
	add() {
		this.LocationSvc.add(this.location).then(
			//resp is JSON message from backend
			resp => { 
			console.log(this.location)
				console.log(resp); 
				this.router.navigate(["/locations"]); 
			}
		);			
	}

  constructor(private LocationSvc: LocationService, 
  	private router: Router) { }

  ngOnInit() {
  }

}
