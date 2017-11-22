import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Asset } from '../../../shared/models/asset';
import { AssetService } from '../../../shared/services/asset.service';
import { Vehicle } from '../../../shared/models/vehicle';


@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {
vehicle: Vehicle;
asset: Asset;

remove() {
    console.log("remove()");
    this.AssetSvc.remove(this.asset)
        .then(resp => {
          console.log(resp);
          this.router.navigate(["/assets"]);
        });
  }

  update() {
    this.AssetSvc.change(this.asset).then(
      resp => {
        console.log(resp);
        this.router.navigate(['/assets']);
      }
      )
  } 	

  constructor(private AssetSvc: AssetService, private router: Router, 
  	private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.paramMap
  			.switchMap((params: ParamMap) =>
  				//Method for testing with dummy data
          //this.AssetSvc.dummydetail())
          this.AssetSvc.get(params.get('id')))
  			.subscribe((asset: Asset) => { this.asset = asset; 
          console.log("asset"); console.log(asset); console.log("this.asset");console.log(this.asset);});
        
  }

}
