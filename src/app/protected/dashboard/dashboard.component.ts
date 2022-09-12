import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/interfaces';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
    * {
      margin: 15px;
    }
    `
  ]
})
export class DashboardComponent implements OnInit {

  user: User;

  constructor(private router: Router, private authService: AuthService) {
    this.user = {} as User;
  }

  ngOnInit(): void {
    this.authService.getUser().then((user: any) => {
      console.log(user);
      this.user = user;
    });

    this.authService.currentUserCredentials().then((user: any) => {
      console.log(user);
    });
  }

  logout() {
    this.authService.signOut().then(() => {
      this.router.navigateByUrl('/auth');
    });
  }

}
