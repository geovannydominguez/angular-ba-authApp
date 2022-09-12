import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

import { User } from '../../interfaces/interfaces';
import { AuthService } from '../../services/auth.service';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  loading: boolean;
  user: User;

  miFormulario: FormGroup = this.fb.group({
    email: ['geovannyadq@gmail.com', [Validators.required, Validators.email]],
    password: ['P@ssw0rd', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loading = false;
    this.user = {} as User;
  }

  /**
   * Call service for login
   */
  public signIn(): void {
    // this.user = <User>this.miFormulario.value;

    // this.loading = true;
    // console.log(this.user);
    // this.authService.signIn(this.user)
    //   .then(() => {
    //     this.router.navigateByUrl('/dashboard');
    //   }).catch((err) => {
    //     this.loading = false;
    //     console.log(err);
    //     Swal.fire('Error', err.name, 'error');
    //   });

    this.authService.federatedSignIn()
      .then((resp)=>{
        console.log(resp);
      }).catch((err)=>{
        console.log(err);
      });

  }

}
