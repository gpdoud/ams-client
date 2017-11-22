import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { User } from '../../../shared/models/User';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

		//creates new blank instance of user
	user: User = new User(0, '', '', '', '', '', 0, true);
	
	add() {
		this.UserSvc.add(this.user).then(
			//resp is JSON message from backend
			resp => { 
			console.log(this.user)
				console.log(resp); 
				this.router.navigate(["/users"]); 
			}
		);			
	}

  constructor(private UserSvc: UserService, 
  	private router: Router) { }

  ngOnInit() {

  }

}
