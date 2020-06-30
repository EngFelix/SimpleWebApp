import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {IUser, UserService} from '../service/user.service';
import {Observable} from 'rxjs';

@Component({
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  users$: Observable<Array<IUser>>;
  userModel: User = new User();


  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users$  = this.userService.users$;
  }

  SelectUser(_selectedUser: User) {
    this.userModel = _selectedUser;
  }

}
