import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { User } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _auth: User | undefined;

  constructor(private http: HttpClient) { }

  get user(): User {
    return { ...this._auth! };
  }

  login(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        tap(user => this._auth = user),
        tap(user => localStorage.setItem('token', user.id.toString()))
      );
  }
  logout(): void {
    this._auth = undefined;
  }

  isVerified(): Observable<boolean>{
    if (!localStorage.getItem('token')) {
      return of(false);
    }
    return this.http.get<User>(`${this.baseUrl}/usuarios/${localStorage.getItem('token')}`)
    .pipe(
      map(user => {
        if(user.id){
          this._auth = user;
          return true
        }
        return false
      })
    )
  }
}
