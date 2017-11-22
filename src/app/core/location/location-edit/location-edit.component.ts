import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import {Location} from '../../../shared/models/Location';
import {LocationService} from '../../../shared/services/location.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.css']
})
export class LocationEditComponent implements OnInit {

	location: Location;

	update(){
		this.LocationSvc.change(this.location).then(
			resp => {console.log(resp);
				this.router.navigate(['/locations'])}
		)
	}

  remove() {
    console.log("remove()");
    this.LocationSvc.remove(this.location)
      .then(resp => { 
        console.log(resp); 
        this.router.navigate(["/locations"]); 
      });
  }

  constructor(private LocationSvc: LocationService, 
  	private route: ActivatedRoute, 
  	private router: Router) { }

  ngOnInit() {
  	this.route.paramMap
  	 	.switchMap((params: ParamMap) =>
  	 		this.LocationSvc.get(params.get('id')))
  	 	//Subscribe reads the data currently held by User, and stores it in the user variable above
           .subscribe((location: Location) => this.location = location);
  }
}
