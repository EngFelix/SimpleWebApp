import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.model';
import {HttpClient} from '@angular/common/http';

@Component({
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  UserModel: User = new User();
  UserModels: Array<User> = new Array<User>();


  constructor(public httpClient:HttpClient) { }

  ngOnInit(): void {
    this.GetAllUsers();
  }

  GetAllUsers() {
    this.httpClient.get('http://localhost:8080/api/users/').subscribe(res => this.onGetAllSuccess(res), error => this.onGetAllError(error))
  }

  onGetAllSuccess(res) {
    this.UserModels = res;
    this.UserModel = new User();
  }

  onGetAllError(error) {
    console.debug(error)
  }

  SelectUser(_selectedUser: User) {
    this.UserModel = _selectedUser;
  }

}
