import { Component, OnInit } from '@angular/core';
// import { SystemService } from '../shared/services/system.service';
import { User } from '../../shared/models/User';
import { Asset } from '../../shared/models/asset';
//imports menu.ts file
import { Menu } from './menu';

@Component({
  selector: 'menu-comp',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	name = "Menu Component";
  
  	loggedInUser: User;

	menus: Menu[] = [
	  new Menu("BROWSE ", "/assets", "Home menu item"),
    new Menu("LOGIN ", "/login", "Login menu item"),
  	new Menu("USERS ", "/users", "Users menu item"),
  	// new Menu("VENDORS ", "/vendors", "Vendor menu item"),
  	new Menu("ASSETS ", "/assets", "Asset menu item"),
  	// new Menu("VEHICLES ", "/vehicles", "Vehicles menu item"),
  	// new Menu("RECORDS ", "/records", "Records menu item"),
  	// new Menu("DOCUMENTS ", "/documents", "Documents menu item"),
  	new Menu("LOCATIONS ", "/locations", "Locations menu item")
];


  constructor() { }

  ngOnInit() {
  }

}
