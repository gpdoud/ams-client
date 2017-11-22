import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import 'rxjs/add/operator/toPromise';

import { User } from '../../shared/models/User';
import { UserService } from '../../shared/services/user.service';
import { SystemService } from '../../shared/services/system.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	username: string = "";
	password: string = "";

	user: User;

	message: string = " ";

	login(): void {
		this.message = "";
		console.log("login method")
		this.UserSvc.login(this.username, this.password)
				.then(resp => this.checkData(resp));
	}

	checkData(users: User[]) : void {
		if(users.length > 0) {
			this.user = users[0];
			this.SystemSvc.setLoggedIn(this.user);
			console.log("Set SystemSvc logged in user to ", this.SystemSvc.loggedInUser);
			this.router.navigateByUrl("/home");
		}
		else {
			this.message = "USER NAME AND/OR PASSWORD NOT FOUND";
		}
	}

  	//injecting module we want to use into our component at run-time
  constructor(private UserSvc: UserService, private SystemSvc: SystemService, private router: Router) { }

  ngOnInit() {
  }

}

