import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from '@services/message.service';
import * as UniversityActions from '@app/actions/university.actions';
import * as Selectors from '@app/selectors';
import * as Reducers from '@app/reducers';
import { concatMap, map, tap, withLatestFrom } from 'rxjs/operators';
import { University } from '@interfaces/university.interface';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversityEffects {
  private universityUrl = 'api/universities';

  loadUniversity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UniversityActions.loadUniversity),
      concatMap(_ => {
        return this.http
          .get<University[]>(`${this.universityUrl}`)
          .pipe(
            map(universities =>
              UniversityActions.loadUniversitySuccess({ universities })
            )
          );
      })
    )
  );

  loadUniversityById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UniversityActions.loadUniversityById),
      withLatestFrom(this.store.select(Selectors.getCurrentUniversity)),
      concatMap(([action, currentUniversity]) => {
        if (currentUniversity) {
          return [];
        }

        const { universityId } = action;

        if (!universityId) {
          return of(
            UniversityActions.setCurrentUniversity({ university: null })
          );
        }

        return this.http
          .get<University>(`${this.universityUrl}/${universityId}`)
          .pipe(
            map(university =>
              UniversityActions.loadUniversityByIdSuccess({ university })
            )
          );
      })
    )
  );

  createUniversity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UniversityActions.createUniversity),
      withLatestFrom(this.store.select(Selectors.getGenId)),
      concatMap(([action, genId]) => {
        const university = { ...action.university, id: genId };

        return this.http
          .post<University>(`${this.universityUrl}`, university)
          .pipe(
            map(university =>
              UniversityActions.createUniversitySuccess({ university })
            ),
            tap(() => {
              this.messageService.successToast(
                `University Created Successfully.`
              );
              this.router.navigate(['/university']);
            })
          );
      })
    )
  );

  updateUniversity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UniversityActions.updateUniversity),
      concatMap(action => {
        const { university } = action;
        return this.http
          .put<University>(`${this.universityUrl}/${university.id}`, university)
          .pipe(
            map(_ => UniversityActions.updateUniversitySuccess({ university })),
            tap(() => {
              this.messageService.successToast(
                `University Updated Successfully.`
              );
              this.router.navigate(['/university']);
            })
          );
      })
    )
  );

  showDeleteConfirmation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UniversityActions.showUniversityDeleteConfirmation),
      concatMap(async action => {
        const { university } = action;
        const confirm = await this.messageService.confirmation(
          `Delete ${university.name} University ?`,
          null
        );
        confirm.present();
        const { role } = await confirm.onDidDismiss();
        if (role === 'yes') {
          return UniversityActions.deleteUniversity({
            universityId: university.id
          });
        } else {
          return UniversityActions.deleteUniversityRevert();
        }
      })
    )
  );

  deleteUniversity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UniversityActions.deleteUniversity),
      concatMap(action => {
        const { universityId } = action;

        return this.http.delete(`${this.universityUrl}/${universityId}`).pipe(
          map(_ => UniversityActions.deleteUniversitySuccess({ universityId })),
          tap(() => {
            this.messageService.successToast(
              `University Deleted Successfully.`
            );
            this.router.navigate(['/university']);
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService,
    private store: Store<Reducers.UniversityState>
  ) {}
}
