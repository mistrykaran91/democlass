import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from '@services/message.service';
import * as ExpenseHeaderActions from '@app/actions/expense-header.actions';
import * as Selectors from '@app/selectors';
import * as Reducers from '@app/reducers';
import { concatMap, map, tap, withLatestFrom } from 'rxjs/operators';
import { ExpenseHeader } from '@interfaces/expense-header.interface';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseHeaderEffects {
  private expenseHeaderUrl = 'api/expenseHeaders';

  loadExpenseHeader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseHeaderActions.loadExpenseHeader),
      concatMap(_ => {
        return this.http
          .get<ExpenseHeader[]>(`${this.expenseHeaderUrl}`)
          .pipe(
            map(expenseHeaders =>
              ExpenseHeaderActions.loadExpenseHeaderSuccess({ expenseHeaders })
            )
          );
      })
    )
  );

  loadExpenseHeaderById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseHeaderActions.loadExpenseHeaderById),
      withLatestFrom(this.store.select(Selectors.getCurrentExpenseHeader)),
      concatMap(([action, currentExpenseHeader]) => {
        if (currentExpenseHeader) {
          return [];
        }

        const { expenseHeaderId } = action;

        if (!expenseHeaderId) {
          return of(
            ExpenseHeaderActions.setCurrentExpenseHeader({
              expenseHeader: null
            })
          );
        }

        return this.http
          .get<ExpenseHeader>(`${this.expenseHeaderUrl}/${expenseHeaderId}`)
          .pipe(
            map(expenseHeader =>
              ExpenseHeaderActions.loadExpenseHeaderByIdSuccess({
                expenseHeader
              })
            )
          );
      })
    )
  );

  createExpenseHeader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseHeaderActions.createExpenseHeader),
      withLatestFrom(this.store.select(Selectors.getExpenseHeaderGenId)),
      concatMap(([action, genId]) => {
        const expenseHeader = { ...action.expenseHeader, id: genId };

        return this.http
          .post<ExpenseHeader>(`${this.expenseHeaderUrl}`, expenseHeader)
          .pipe(
            map(expenseHeader =>
              ExpenseHeaderActions.createExpenseHeaderSuccess({ expenseHeader })
            ),
            tap(() => {
              this.messageService.successToast(
                `ExpenseHeader Created Successfully.`
              );
              this.router.navigate(['/expenseHeader']);
            })
          );
      })
    )
  );

  updateExpenseHeader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseHeaderActions.updateExpenseHeader),
      concatMap(action => {
        const { expenseHeader } = action;
        return this.http
          .put<ExpenseHeader>(
            `${this.expenseHeaderUrl}/${expenseHeader.id}`,
            expenseHeader
          )
          .pipe(
            map(_ =>
              ExpenseHeaderActions.updateExpenseHeaderSuccess({ expenseHeader })
            ),
            tap(() => {
              this.messageService.successToast(
                `ExpenseHeader Updated Successfully.`
              );
              this.router.navigate(['/expenseHeader']);
            })
          );
      })
    )
  );

  showDeleteConfirmation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseHeaderActions.showExpenseHeaderDeleteConfirmation),
      concatMap(async action => {
        const { expenseHeader } = action;
        const confirm = await this.messageService.confirmation(
          `Delete ${expenseHeader.name} ExpenseHeader ?`,
          null
        );
        confirm.present();
        const { role } = await confirm.onDidDismiss();
        if (role === 'yes') {
          return ExpenseHeaderActions.deleteExpenseHeader({
            expenseHeaderId: expenseHeader.id
          });
        } else {
          return ExpenseHeaderActions.deleteExpenseHeaderRevert();
        }
      })
    )
  );

  deleteExpenseHeader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseHeaderActions.deleteExpenseHeader),
      concatMap(action => {
        const { expenseHeaderId } = action;

        return this.http
          .delete(`${this.expenseHeaderUrl}/${expenseHeaderId}`)
          .pipe(
            map(_ =>
              ExpenseHeaderActions.deleteExpenseHeaderSuccess({
                expenseHeaderId
              })
            ),
            tap(() => {
              this.messageService.successToast(
                `ExpenseHeader Deleted Successfully.`
              );
              this.router.navigate(['/expenseHeader']);
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
    private store: Store<Reducers.ExpenseHeaderState>
  ) {}
}
