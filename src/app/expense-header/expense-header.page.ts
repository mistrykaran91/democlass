import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import * as Selectors from '@app/selectors';
import * as Reducers from '@app/reducers';
import * as Actions from '@app/actions';

import { ExpenseHeader } from '@interfaces/expense-header.interface';

@Component({
  selector: 'app-expense-header',
  templateUrl: './expense-header.page.html',
  styleUrls: ['./expense-header.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpenseHeaderPage implements OnInit {
  expenseHeaders$: Observable<Array<ExpenseHeader>> = this.store.select(
    Selectors.getExpenseHeaders
  );
  isExpenseHeaderEmpty$: Observable<boolean> = this.store.select(
    Selectors.getIsExpenseHeaderEmpty
  );

  constructor(
    private store: Store<Reducers.ExpenseHeaderState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(Actions.loadExpenseHeader());
  }

  onExpenseHeaderSelected(expenseHeader: ExpenseHeader) {
    this.store.dispatch(Actions.setCurrentExpenseHeader({ expenseHeader }));
    this.router.navigate([`/expenseHeader/${expenseHeader.id}`]);
  }

  onAddExpenseHeader() {
    this.store.dispatch(
      Actions.setCurrentExpenseHeader({ expenseHeader: null })
    );
    this.router.navigate(['/', 'expenseHeader', 0, 'edit']);
  }

  onEditExpenseHeader(
    expenseHeader: ExpenseHeader,
    slidingItem: IonItemSliding
  ) {
    slidingItem.close();
    this.store.dispatch(Actions.setCurrentExpenseHeader({ expenseHeader }));
    this.router.navigate(['/', 'expenseHeader', expenseHeader.id, 'edit']);
  }

  onDeleteExpenseHeader(
    expenseHeader: ExpenseHeader,
    slidingItem: IonItemSliding
  ) {
    slidingItem.close();
    this.store.dispatch(
      Actions.showExpenseHeaderDeleteConfirmation({ expenseHeader })
    );
  }
}
