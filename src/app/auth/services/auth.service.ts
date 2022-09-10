import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable, BehaviorSubject } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthResponse, User, Usuario } from '../interfaces/interfaces';
import Amplify, { Auth } from 'aws-amplify';
import awsmobile from '../../../../src/aws-exports';


@Injectable({
  providedIn: 'root' // To provide the service
})
export class AuthService {

  private authenticationSubject: BehaviorSubject<any>;

  constructor() {
    Amplify.configure(awsmobile);

    this.authenticationSubject = new BehaviorSubject<boolean>(false);
  }

  public federatedSignIn() {
    return Auth.federatedSignIn();
  }

  public signUp(user: User): Promise<any> {
    return Auth.signUp({
      username: user.email,
      password: user.password,
    });
  }

  public confirmSignUp(user: User): Promise<any> {
    return Auth.confirmSignUp(user.email, user.code);
  }

  public signIn(user: User): Promise<any> {
    return Auth.signIn(user.email, user.password)
      .then(() => {
        this.authenticationSubject.next(true);
      });
  }

  public signOut(): Promise<any> {
    return Auth.signOut()
      .then(() => {
        this.authenticationSubject.next(false);
      });
  }

  public isAuthenticated(): Promise<boolean> {
    if (this.authenticationSubject.value) {
      return Promise.resolve(true);
    } else {
      return this.getUser()
        .then((user: any) => {
          if (user) {
            return true;
          } else {
            return false;
          }
        }).catch(() => {
          return false;
        });
    }
  }

  public getUser(): Promise<any> {
    return Auth.currentUserInfo();
  }

  public updateUser(user: User): Promise<any> {
    return Auth.currentUserPoolUser()
      .then((cognitoUser: any) => {
        return Auth.updateUserAttributes(cognitoUser, user);
      });
  }


  // validarToken(): Observable<boolean> {
  //   const url: string = `${this.baseUrl}/auth/renew`;
  //   const headers = new HttpHeaders()
  //     .set('x-token', localStorage.getItem('myToken') || ''); // si localStorage.getItem('myToken') es null entonces envía string vacío ''.

  //   // En el segundo argumento del get(), en las opciones, Cuando la propiedad y la variable se llaman igual, puedo omitir el nombre de la propiedad
  //   // return this.http.get(url, {headers: headers});
  //   return this.http.get<AuthResponse>(url, { headers })
  //     .pipe(
  //       map(resp => { // Segun nuestro backend, llega a este punto solo cuando la respuesta es true exitosa.
  //         this.setLocalStorageAndUser(resp);
  //         return resp.ok
  //       }),
  //       catchError(err => of(false))
  //     );

  // }


}
