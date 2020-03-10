import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProfile } from '../interfaces/user-profile.interface';
import { map, catchError, switchMap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { handleError } from '../helpers/util.helper';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private userProfileUrl = 'api/userProfiles';
  private reloadUserProfileSubject = new BehaviorSubject(null);

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private authService: AuthService) {}

  userProfile$ = combineLatest([
    this.authService.userId,
    this.reloadUserProfileSubject.asObservable()
  ]).pipe(
    switchMap(selectedUser =>
      this.http
        .get<UserProfile>(`${this.userProfileUrl}/${selectedUser}`, {
          headers: this.headers
        })
        .pipe(
          map(user => (user ? user : this.initializeUserProfile())),
          catchError(handleError)
        )
    )
  );

  createUserProfile(userProfile: UserProfile) {
    userProfile.id = null;

    return this.http
      .post<UserProfile>(`${this.userProfileUrl}`, userProfile)
      .pipe(
        map(data => {
          this.reloadUserProfileSubject.next(null);
          return data;
        }),
        catchError(handleError)
      );
  }

  updateUserProfile(userProfile: UserProfile): Observable<UserProfile> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .put<UserProfile>(
        `${this.userProfileUrl}/${userProfile.id}`,
        userProfile,
        { headers }
      )
      .pipe(
        map(() => userProfile),
        catchError(handleError)
      );
  }

  deleteUserProfile(id: number) {
    const url = `${this.userProfileUrl}/${id}`;

    return this.http.delete<UserProfile>(`${url}`).pipe(
      map(data => {
        this.reloadUserProfileSubject.next(null);
        return data;
      }),
      catchError(handleError)
    );
  }

  private initializeUserProfile(): UserProfile {
    // Return an initialized object
    return {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      mobile: '',
      gender: null,
      dob: null,
      contactDetails: {
        addressLine1: '',
        addressLine2: '',
        landmark: '',
        city: '',
        state: '',
        country: '',
        pincode: ''
      },
      branchId: null,
      displayPhoto: null,
      profileDescription: ``,
      roleId: null
    };
  }
}
