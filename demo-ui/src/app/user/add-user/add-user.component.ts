import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user.model';
import {HttpClient} from '@angular/common/http';

@Component({
  templateUrl: './user-add.component.html'
})
export class UserAddComponent implements OnInit {
  UserModel: User = new User();


  constructor(public httpClient: HttpClient) {
  }

  ngOnInit(): void {

  }
}
