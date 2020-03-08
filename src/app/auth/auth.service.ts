import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, BehaviorSubject, throwError, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Plugins } from '@capacitor/core';
import { AuthErrorCode } from '../enums/auth-error-code.enum';

export interface AuthResponseData {
  kind?: string;
  idToken?: string;
  email?: string;
  refreshToken?: string;
  localId?: string;
  expiresIn?: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line:variable-name
  private _user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {}

  get userIsAuthenticated() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return !!user.token;
        } else {
          return false;
        }
      })
    );
  }

  get userId() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return user.id;
        } else {
          return null;
        }
      })
    );
  }

  get token() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return user.token;
        } else {
          return null;
        }
      })
    );
  }

  autoLogin() {
    return from(Plugins.Storage.get({ key: 'authData' })).pipe(
      map(storedData => {        
        if (!storedData || !storedData.value) {
          return null;
        }

        const parsedData = JSON.parse(storedData.value) as {
          token: string;
          tokenExpirationDate: string;
          userId: string;
          email: string;
        };

        const expirationTime = new Date(parsedData.tokenExpirationDate);
        // if (expirationTime <= new Date()) {
        //   return null;
        // }
        const user = new User(
          parsedData.userId,
          parsedData.email,
          parsedData.token,
          expirationTime
        );
        return user;
      }),
      tap(user => {        
        if (user) {
          this._user.next(user);
          // this.autoLogout(user.tokenDuration);
        }
      }),
      map(user => {
        return !!user;
      })
    );
  }

  login(email: string, password: string) {
    // mocking the http request as of now :-
    if (email === 'admin@admin.com' && password === 'admin') {
      return of({
        localId: 1,
        email,
        idToken: 1,
        expiresIn: 30
      }).pipe(tap(this.setUserData.bind(this)));
    } else {
      return throwError({ code: AuthErrorCode.InvalidUser });
    }
  }

  logout() {
    this._user.next(null);
  }

  private setUserData(userData: AuthResponseData) {
    const expirationTime = new Date(
      new Date().getTime() + +userData.expiresIn * 1000
    );
    const user = new User(
      userData.localId,
      userData.email,
      userData.idToken,
      expirationTime
    );
    this._user.next(user);
    // this.autoLogout(user.tokenDuration);
    this.storeAuthData(
      userData.localId,
      userData.idToken,
      expirationTime.toISOString(),
      userData.email
    );
  }

  private storeAuthData(
    userId: string,
    token: string,
    tokenExpirationDate: string,
    email: string
  ) {
    const data = JSON.stringify({
      userId: userId,
      token: token,
      tokenExpirationDate: tokenExpirationDate,
      email: email
    });
    Plugins.Storage.set({ key: 'authData', value: data });
  }
}
