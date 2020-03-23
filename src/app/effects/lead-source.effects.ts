import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from '@services/message.service';
import * as LeadSourceActions from '@app/actions/lead-source.actions';
import * as Selectors from '@app/selectors';
import * as Reducers from '@app/reducers';
import { concatMap, map, tap, withLatestFrom } from 'rxjs/operators';
import { LeadSource } from '@interfaces/lead-source.interface';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadSourceEffects {
  private leadSourceUrl = 'api/leadSources';

  loadLeadSource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeadSourceActions.loadLeadSource),
      concatMap(_ => {
        return this.http
          .get<LeadSource[]>(`${this.leadSourceUrl}`)
          .pipe(
            map(leadSources =>
              LeadSourceActions.loadLeadSourceSuccess({ leadSources })
            )
          );
      })
    )
  );

  loadLeadSourceById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeadSourceActions.loadLeadSourceById),
      withLatestFrom(this.store.select(Selectors.getCurrentLeadSource)),
      concatMap(([action, currentLeadSource]) => {
        if (currentLeadSource) {
          return [];
        }

        const { leadSourceId } = action;

        if (!leadSourceId) {
          return of(
            LeadSourceActions.setCurrentLeadSource({ leadSource: null })
          );
        }

        return this.http
          .get<LeadSource>(`${this.leadSourceUrl}/${leadSourceId}`)
          .pipe(
            map(leadSource =>
              LeadSourceActions.loadLeadSourceByIdSuccess({ leadSource })
            )
          );
      })
    )
  );

  createLeadSource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeadSourceActions.createLeadSource),
      withLatestFrom(this.store.select(Selectors.getLeadSourceGenId)),
      concatMap(([action, genId]) => {
        const leadSource = { ...action.leadSource, id: genId };

        return this.http
          .post<LeadSource>(`${this.leadSourceUrl}`, leadSource)
          .pipe(
            map(leadSource =>
              LeadSourceActions.createLeadSourceSuccess({ leadSource })
            ),
            tap(() => {
              this.messageService.successToast(
                `LeadSource Created Successfully.`
              );
              this.router.navigate(['/leadSource']);
            })
          );
      })
    )
  );

  updateLeadSource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeadSourceActions.updateLeadSource),
      concatMap(action => {
        const { leadSource } = action;
        return this.http
          .put<LeadSource>(`${this.leadSourceUrl}/${leadSource.id}`, leadSource)
          .pipe(
            map(_ => LeadSourceActions.updateLeadSourceSuccess({ leadSource })),
            tap(() => {
              this.messageService.successToast(
                `LeadSource Updated Successfully.`
              );
              this.router.navigate(['/leadSource']);
            })
          );
      })
    )
  );

  showDeleteConfirmation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeadSourceActions.showLeadSourceDeleteConfirmation),
      concatMap(async action => {
        const { leadSource } = action;
        const confirm = await this.messageService.confirmation(
          `Delete ${leadSource.name} LeadSource ?`,
          null
        );
        confirm.present();
        const { role } = await confirm.onDidDismiss();
        if (role === 'yes') {
          return LeadSourceActions.deleteLeadSource({
            leadSourceId: leadSource.id
          });
        } else {
          return LeadSourceActions.deleteLeadSourceRevert();
        }
      })
    )
  );

  deleteLeadSource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeadSourceActions.deleteLeadSource),
      concatMap(action => {
        const { leadSourceId } = action;

        return this.http.delete(`${this.leadSourceUrl}/${leadSourceId}`).pipe(
          map(_ => LeadSourceActions.deleteLeadSourceSuccess({ leadSourceId })),
          tap(() => {
            this.messageService.successToast(
              `LeadSource Deleted Successfully.`
            );
            this.router.navigate(['/leadSource']);
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
    private store: Store<Reducers.LeadSourceState>
  ) {}
}
