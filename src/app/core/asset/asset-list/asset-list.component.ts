import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Asset } from '../../../shared/models/asset';
import { AssetService } from '../../../shared/services/asset.service';


@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

assets: Asset[];
  

	getAssets(): void {
		this.AssetSvc.list()
			.then(resp => this.assets = resp);  //array of assets gets stored in this variable (resp)
	}


  constructor(private AssetSvc: AssetService) { }

  ngOnInit() {
  	this.getAssets();
  }

}