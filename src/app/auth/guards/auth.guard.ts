import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //   const user = this.authService.user;
    //   if(!user.id){
    //     return false
    //   }
    // return true;
    return this.authService.isVerified()
      .pipe(tap(isVerified => {
        if (!isVerified) {
          this.router.navigate(['./auth/login']);
        }
      }));
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isVerified()
      .pipe(tap(isVerified => {
        if (!isVerified) {
          this.router.navigate(['./auth/login']);
        }
      }));
    //   const user = this.authService.user;
    //   if(!user.id){
    //     return false
    //   }
    // return true;
  }
}
