import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {DataTableColumn} from '../../../shared/ui-components/data-table/data-table.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AddUserComponent} from './add-user/add-user.component';
import {UserService} from '../../../user/user.service';
import {User} from '../../../user/user.model';

interface Alert {
  type: string;
  msg: string;
  timeout: number;
}

interface UsersViewModel {
  users: User[];
  // selectedUsers: User
  loaded: boolean;
  loading: boolean;
  error: any;
}


@Component({
  templateUrl: './user-admin-page.component.html'
})
export class UserAdminPageComponent implements OnInit {

  userModel: User;
  addUserModalRef: BsModalRef;
  userColumns: Array<DataTableColumn<User>>;
  alerts: Array<Alert> = new Array<Alert>();

  //searchTerm: FormControl;

  // NGRX Data
  users$: Observable<User[]>;
  // selectedUser$:  Observable<User>    = this.userService.;
  loaded$: Observable<boolean>;
  loading$: Observable<boolean>;
  errors$: Observable<any>;

  constructor(public userService: UserService,
              private modalService: BsModalService) {
    this.users$ = this.userService.entities$;
    this.loading$ = this.userService.loading$;
    this.loaded$ = this.userService.loaded$;
    this.errors$ = this.userService.errors$;
  }

  ngOnInit(): void {
    // const {criteria} = this.userFacade.getStateSnapshot();

    // this.searchTerm = this.userFacade.buildSearchTermControl();
    // this.searchTerm.patchValue(criteria, {emitEvent: false});

    this.userColumns = [
      {colName: 'Id', colVal: t => t.id.toString()},
      {colName: 'user.table.firstName', colVal: t => t.firstName},
      {colName: 'user.table.lastName', colVal: t => t.lastName},
      {colName: 'user.table.birthDate', colVal: t => t.birthDate?.toDateString()},
      {colName: 'user.table.createdAt', colVal: t => t.createdAt?.toLocaleString()},
      {colName: 'user.table.lastModified', colVal: t => t.lastModified?.toLocaleDateString()},
    ];
  }

  SelectUser(_selectedUser: User) {
    this.userModel = _selectedUser;
    this.userService.delete(_selectedUser);
  }

  openAddUserDialog(): void {
    const initialState = {
      title: 'Create User',
      buttonText: 'Create',
      saveUser: this.getSaveUser.bind(this)
    };
    this.addUserModalRef = this.modalService.show(AddUserComponent, {initialState});
  }

  private getSaveUser(user: User) {
    this.userService.add(user).subscribe(
      value => {
        this.alerts.push({
          msg: 'user.create.success',
          type: 'success',
          timeout: 5000
        });
        this.addUserModalRef.hide();
      }, error => {
        this.alerts.push({
          msg: 'user.create.error',
          type: 'danger',
          timeout: 5000
        });
        this.addUserModalRef.hide();
      });
  }

  onAlertClosed(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
