import { SUBJECT_CREATED, SUBJECT_DELETED } from './../app.constant';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import * as SubjectActions from '../actions/subject.actions';
import { concatMap, map, exhaustMap, switchMap, tap } from 'rxjs/operators';
import { Subject } from '../interfaces/subject.interface';
import { from, of, empty } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { SUBJECT_UPDATED } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class SubjectEffects {
  private subjectUrl = 'api/subjects';

  loadSubject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubjectActions.loadSubject),
      concatMap(action => {
        return this.http
          .get<Subject[]>(`${this.subjectUrl}`)
          .pipe(
            map(subjects => SubjectActions.loadSubjectSuccess({ subjects }))
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
    private messageService: MessageService
  ) {}
}
