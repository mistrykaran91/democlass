import { PROFILE_UPDATED_SUCCESS } from './../profile/profile.constant';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserProfile } from '../interfaces/user-profile.interface';
import * as UserProfileActions from '../actions/user-profile.actions';
import { concatMap, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileEffects {
  private userProfileUrl = 'api/userProfiles';

  loadUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserProfileActions.loadUserProfile),
      concatMap(action => {
        return this.http.get<UserProfile>(`${this.userProfileUrl}/1`).pipe(
          map(userProfile => {
            return UserProfileActions.loadUserProfileSuccess({ userProfile });
          })
        );
      })
    )
  );

  updateUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserProfileActions.updateUserProfile),
      concatMap(action => {
        const { userProfile } = action;
        return this.http
          .put<UserProfile>(
            `${this.userProfileUrl}/${userProfile.id}`,
            userProfile
          )
          .pipe(
            map(() =>
              UserProfileActions.updateUserProfileSuccess({ userProfile })
            ),
            tap(() => {
              this.messageService.successToast(PROFILE_UPDATED_SUCCESS);
              this.router.navigate(['/dashboard']);
            })
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {}
}
