import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as Selectors from '@app/selectors';
import * as Reducers from '@app/reducers';
import * as Actions from '@app/actions';

import { ExpenseHeader } from '@interfaces/expense-header.interface';

@Component({
  selector: 'app-expense-header-detail',
  templateUrl: './expense-header-detail.page.html',
  styleUrls: ['./expense-header-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpenseHeaderDetailPage implements OnInit {
  expenseHeader$: Observable<ExpenseHeader> = this.store.select(
    Selectors.getCurrentExpenseHeader
  );

  constructor(
    private store: Store<Reducers.ExpenseHeaderState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const expenseHeaderId = +this.activatedRoute.snapshot.paramMap.get(
      'expenseHeaderId'
    );
    this.store.dispatch(Actions.loadExpenseHeaderById({ expenseHeaderId }));
  }

  onDeleteExpenseHeader(expenseHeader: ExpenseHeader) {
    this.store.dispatch(
      Actions.showExpenseHeaderDeleteConfirmation({ expenseHeader })
    );
  }
}
