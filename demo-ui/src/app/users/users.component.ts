import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';
import {DataTableColumn} from '../shared/ui-components/data-table/data-table.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AddUserComponent} from './add-user/add-user.component';
import {AlertComponent} from 'ngx-bootstrap/alert';
import {FormControl} from '@angular/forms';
import {UsersFacade, UsersViewModel} from '../facades/users.facade';

export interface Alert {
  type: string,
  msg: string,
  timeout: number
}

@Component({
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  //users$: Observable<Array<User>>;
  userModel: User;
  addUserModalRef: BsModalRef;

  userColumns: Array<DataTableColumn<User>>;

  alerts: Array<Alert> = new Array<Alert>();




  //searchTerm: FormControl;
  vm$: Observable<UsersViewModel> = this.userFacade.vm$;



  constructor(public userFacade: UsersFacade,
              private modalService: BsModalService) {
    this.userFacade.loadAll();
  }

  ngOnInit(): void {
    // const {criteria} = this.userFacade.getStateSnapshot();

    // this.searchTerm = this.userFacade.buildSearchTermControl();
    // this.searchTerm.patchValue(criteria, {emitEvent: false});

    this.userColumns = [
      {colName: 'Id', colVal: t => t.id.toString()},
      {colName: 'user.table.firstName', colVal: t => t.firstName},
      {colName: 'user.table.lastName', colVal: t => t.lastName},
      {colName: 'user.table.birthDate', colVal: t => t.birthDate?.toString()} // ->TODO: This does not seem to be a date type. Something might be wrong in the rest api
    ];
  }

  SelectUser(_selectedUser: User) {
    this.userModel = _selectedUser;
  }

  openAddUserDialog(): void {
    const initialState = {
      title: 'Create User',
      buttonText: 'Create',
      saveUser: (user: User) => {
        // this.userFacade.createUser(user, value => {
        //   this.alerts.push({
        //     msg: 'user.create.success',
        //     type: 'success',
        //     timeout: 5000
        //   });
        //   this.addUserModalRef.hide();
        // }, error => {
        //   this.alerts.push({
        //     msg: 'user.create.error',
        //     type: 'danger',
        //     timeout: 5000
        //   });
        //   this.addUserModalRef.hide();
        // });
      }
    };
    this.addUserModalRef = this.modalService.show(AddUserComponent, {initialState});
  }


  onAlertClosed(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
