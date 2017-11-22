import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import {User} from '../../../shared/models/User';
import {UserService} from '../../../shared/services/user.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

	user:User;

	update(){
		this.UserSvc.change(this.user).then(
			resp => {console.log(resp);
				this.router.navigate(['/users'])}
		)
	}

    remove() {
    console.log("remove()");
    this.UserSvc.remove(this.user)
      .then(resp => { 
        console.log(resp); 
        this.router.navigate(["/users"]); 
      });
  }


  constructor(private UserSvc: UserService, 
  	private route: ActivatedRoute, 
  	private router: Router) { }

  ngOnInit() {
  	this.route.paramMap
  	 	.switchMap((params: ParamMap) =>
  	 		this.UserSvc.get(params.get('id')))
  	 	//Subscribe reads the data currently held by User, and stores it in the user variable above
           .subscribe((user: User) => this.user = user);
  }

}
