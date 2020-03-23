import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from '@services/message.service';
import * as IncomeHeaderActions from '@app/actions/income-header.actions';
import * as Selectors from '@app/selectors';
import * as Reducers from '@app/reducers';
import { concatMap, map, tap, withLatestFrom } from 'rxjs/operators';
import { IncomeHeader } from '@interfaces/income-header.interface';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomeHeaderEffects {
  private incomeHeaderUrl = 'api/incomeHeaders';

  loadIncomeHeader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IncomeHeaderActions.loadIncomeHeader),
      concatMap(_ => {
        debugger;
        return this.http.get<IncomeHeader[]>(`${this.incomeHeaderUrl}`).pipe(
          map(incomeHeaders => {
            debugger;
            return IncomeHeaderActions.loadIncomeHeaderSuccess({
              incomeHeaders
            });
          })
        );
      })
    )
  );

  loadIncomeHeaderById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IncomeHeaderActions.loadIncomeHeaderById),
      withLatestFrom(this.store.select(Selectors.getCurrentIncomeHeader)),
      concatMap(([action, currentIncomeHeader]) => {
        if (currentIncomeHeader) {
          return [];
        }

        const { incomeHeaderId } = action;

        if (!incomeHeaderId) {
          return of(
            IncomeHeaderActions.setCurrentIncomeHeader({ incomeHeader: null })
          );
        }

        return this.http
          .get<IncomeHeader>(`${this.incomeHeaderUrl}/${incomeHeaderId}`)
          .pipe(
            map(incomeHeader =>
              IncomeHeaderActions.loadIncomeHeaderByIdSuccess({ incomeHeader })
            )
          );
      })
    )
  );

  createIncomeHeader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IncomeHeaderActions.createIncomeHeader),
      withLatestFrom(this.store.select(Selectors.getIncomeHeaderGenId)),
      concatMap(([action, genId]) => {
        const incomeHeader = { ...action.incomeHeader, id: genId };

        return this.http
          .post<IncomeHeader>(`${this.incomeHeaderUrl}`, incomeHeader)
          .pipe(
            map(incomeHeader =>
              IncomeHeaderActions.createIncomeHeaderSuccess({ incomeHeader })
            ),
            tap(() => {
              this.messageService.successToast(
                `IncomeHeader Created Successfully.`
              );
              this.router.navigate(['/incomeHeader']);
            })
          );
      })
    )
  );

  updateIncomeHeader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IncomeHeaderActions.updateIncomeHeader),
      concatMap(action => {
        const { incomeHeader } = action;
        return this.http
          .put<IncomeHeader>(
            `${this.incomeHeaderUrl}/${incomeHeader.id}`,
            incomeHeader
          )
          .pipe(
            map(_ =>
              IncomeHeaderActions.updateIncomeHeaderSuccess({ incomeHeader })
            ),
            tap(() => {
              this.messageService.successToast(
                `IncomeHeader Updated Successfully.`
              );
              this.router.navigate(['/incomeHeader']);
            })
          );
      })
    )
  );

  showDeleteConfirmation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IncomeHeaderActions.showIncomeHeaderDeleteConfirmation),
      concatMap(async action => {
        const { incomeHeader } = action;
        const confirm = await this.messageService.confirmation(
          `Delete ${incomeHeader.name} IncomeHeader ?`,
          null
        );
        confirm.present();
        const { role } = await confirm.onDidDismiss();
        if (role === 'yes') {
          return IncomeHeaderActions.deleteIncomeHeader({
            incomeHeaderId: incomeHeader.id
          });
        } else {
          return IncomeHeaderActions.deleteIncomeHeaderRevert();
        }
      })
    )
  );

  deleteIncomeHeader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IncomeHeaderActions.deleteIncomeHeader),
      concatMap(action => {
        const { incomeHeaderId } = action;

        return this.http
          .delete(`${this.incomeHeaderUrl}/${incomeHeaderId}`)
          .pipe(
            map(_ =>
              IncomeHeaderActions.deleteIncomeHeaderSuccess({ incomeHeaderId })
            ),
            tap(() => {
              this.messageService.successToast(
                `IncomeHeader Deleted Successfully.`
              );
              this.router.navigate(['/incomeHeader']);
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
    private store: Store<Reducers.IncomeHeaderState>
  ) {}
}
