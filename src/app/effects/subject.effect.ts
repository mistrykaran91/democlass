import { SUBJECT_CREATED, SUBJECT_DELETED } from './../app.constant';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from '@services/message.service';
import * as SubjectActions from '@app/actions';
import * as Selectors from '@app/selectors';
import * as Reducers from '@app/reducers';
import { concatMap, map, tap, withLatestFrom } from 'rxjs/operators';
import { Subject } from '../interfaces/subject.interface';

import { SUBJECT_UPDATED } from '../app.constant';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class SubjectEffects {
  private subjectUrl = 'api/subjects';

  loadSubject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubjectActions.loadSubject),
      concatMap(_ => {
        return this.http
          .get<Subject[]>(`${this.subjectUrl}`)
          .pipe(
            map(subjects => SubjectActions.loadSubjectSuccess({ subjects }))
          );
      })
    )
  );

  loadSubjectById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubjectActions.loadSubjectById),
      withLatestFrom(this.store.select(Selectors.getCurrentSubject)),
      concatMap(([action, currentSubject]) => {
        if (currentSubject) {
          return [];
        }

        const { subjectId } = action;

        return this.http
          .get<Subject>(`${this.subjectUrl}/${subjectId}`)
          .pipe(
            map(subject => SubjectActions.loadSubjectByIdSuccess({ subject }))
          );
      })
    )
  );

  createSubject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubjectActions.createSubject),
      concatMap(action => {
        const subject = { ...action.subject };
        delete subject.id;

        return this.http.post<Subject>(`${this.subjectUrl}`, subject).pipe(
          map(subject => SubjectActions.createSubjectSuccess({ subject })),
          tap(() => {
            this.messageService.successToast(SUBJECT_CREATED);
            this.router.navigate(['/subject']);
          })
        );
      })
    )
  );

  updateSubject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubjectActions.updateSubject),
      concatMap(action => {
        const { subject } = action;
        return this.http
          .put<Subject>(`${this.subjectUrl}/${subject.id}`, subject)
          .pipe(
            map(_ => SubjectActions.updateSubjectSuccess({ subject })),
            tap(() => {
              this.messageService.successToast(SUBJECT_UPDATED);
              this.router.navigate(['/subject']);
            })
          );
      })
    )
  );

  showDeleteConfirmation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubjectActions.showDeleteConfirmation),
      concatMap(async action => {
        const { subject } = action;
        const confirm = await this.messageService.confirmation(
          `Delete ${subject.name} Subject ?`,
          null
        );
        confirm.present();
        const { role } = await confirm.onDidDismiss();
        if (role === 'yes') {
          return SubjectActions.deleteSubject({ subjectId: subject.id });
        } else {
          return SubjectActions.deleteSubjectRevert();
        }
      })
    )
  );

  deleteSubject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubjectActions.deleteSubject),
      concatMap(action => {
        const { subjectId } = action;

        return this.http.delete(`${this.subjectUrl}/${subjectId}`).pipe(
          map(_ => SubjectActions.deleteSubjectSuccess({ subjectId })),
          tap(() => {
            this.messageService.successToast(SUBJECT_DELETED);
            this.router.navigate(['/subject']);
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
    private store: Store<Reducers.SubjectState>
  ) {}
}
