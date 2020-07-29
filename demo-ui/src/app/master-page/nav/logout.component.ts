import {Component} from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'logout',
  template: `
    <a (click)="logout()" translate>main.nav.logout</a>
  `
})
export class LogoutComponent {
  constructor(private authService: AuthenticationService,
              private http: HttpClient,
              private router: Router) {
  }

  logout(): void {
    this.http.post('logout', {}).finally(() => {
      this.authService.authenticated = false;
      this.router.navigateByUrl('/login');
    }).subscribe();
  }
}
