import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  credentials = {username: '', password: ''};

  constructor(private authService: AuthenticationService, private http: HttpClient, private router: Router) {
  }

  login() {
    this.authService.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/');
    });
    return false;
  }

}
