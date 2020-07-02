import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {IUser, UserService} from '../service/user.service';
import {Observable} from 'rxjs';
import {DataTableColumn} from '../utility/data-table.component';

@Component({
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  users$: Observable<Array<IUser>>;
  userModel: User = new User();

  userColumns: Array<DataTableColumn<User>> = [
    {colName: 'Id', colVal: t => t.id.toString()},
    {colName: 'First Name', colVal: t => t.firstName},
    {colName: 'Last Name', colVal: t => t.lastName},
    {colName: 'Birthday', colVal: t => t.birthDate?.toString()}
  ];


  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.users$;
  }

  SelectUser(_selectedUser: User) {
    this.userModel = _selectedUser;
  }

}
