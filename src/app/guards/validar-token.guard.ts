import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import Auth from '@aws-amplify/auth';
import { tap } from 'rxjs/operators';

/**
 * Prevent access to routes if access-token is not present.
 * 
 * @export
 * @class ValidarTokenGuard
 * @implements {CanActivate CanLoad}
 */
@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    console.log('canActivate');

    return Auth.currentAuthenticatedUser().then(() => {
      return true;
    })
      .catch(() => {
        this.router.navigate(['/auth']);
        return false;
      });
  }

  canLoad(): Observable<boolean> | boolean {
    console.log('canLoad');

    // return this.authService.validarToken()
    //   .pipe(
    //     tap(resp => {
    //       if (!resp) {
    //         this.router.navigateByUrl('/auth');
    //       }
    //     })
    //   );

    return true;
  }
}
