import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {IUser, UserService} from '../service/user.service';
import {Observable} from 'rxjs';
import {DataTableColumn} from '../utility/data-table.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AddUserComponent} from './add-user/add-user.component';

@Component({
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  users$: Observable<Array<IUser>>;
  userModel: User = new User();
  addUserModalRef: BsModalRef;

  userColumns: Array<DataTableColumn<User>> = [
    {colName: 'Id', colVal: t => t.id.toString()},
    {colName: 'First Name', colVal: t => t.firstName},
    {colName: 'Last Name', colVal: t => t.lastName},
    {colName: 'Birthday', colVal: t => t.birthDate?.toString()} // ->TODO: This does not seem to be a date type. Something might be wrong in the rest api
  ];


  constructor(private userService: UserService,
              private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.users$;
  }

  SelectUser(_selectedUser: User) {
    this.userModel = _selectedUser;
  }

  openAddUserDialog(): void {
    const initialState = {
      title: 'Create User',
      buttonText: 'Create',
      saveUser: (user: User) => {
        this.userService.createUser(user);
        this.addUserModalRef.hide();
      }
    };
    this.addUserModalRef = this.modalService.show(AddUserComponent, { initialState });
  }


}
