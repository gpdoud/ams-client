import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable()
export class SystemService {

	loggedInUser: User;
	
	getLoggedIn(): User {
		console.log("SystemService", "getLoggedIn()", this.loggedInUser);
		return this.loggedInUser;
	}

	setLoggedIn(user: User): void {
		console.log("SystemService", "setLoggedIn()", user);
		this.loggedInUser = user;
	}
	isLoggedIn(): boolean {
		console.log("SystemService", "isLoggedIn()", this.loggedInUser != null);
		return this.loggedInUser != null;
	}

  constructor() { }

}
