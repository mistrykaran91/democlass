import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import * as Selectors from '@app/selectors';
import * as Reducers from '@app/reducers';
import * as Actions from '@app/actions';

import { IncomeHeader } from '@interfaces/income-header.interface';

@Component({
  selector: 'app-income-header',
  templateUrl: './income-header.page.html',
  styleUrls: ['./income-header.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncomeHeaderPage implements OnInit {
  incomeHeaders$: Observable<Array<IncomeHeader>> = this.store.select(
    Selectors.getIncomeHeaders
  );
  isIncomeHeaderEmpty$: Observable<boolean> = this.store.select(
    Selectors.getIsIncomeHeaderEmpty
  );

  constructor(
    private store: Store<Reducers.IncomeHeaderState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(Actions.loadIncomeHeader());
  }

  onIncomeHeaderSelected(incomeHeader: IncomeHeader) {
    this.store.dispatch(Actions.setCurrentIncomeHeader({ incomeHeader }));
    this.router.navigate([`/incomeHeader/${incomeHeader.id}`]);
  }

  onAddIncomeHeader() {
    this.store.dispatch(Actions.setCurrentIncomeHeader({ incomeHeader: null }));
    this.router.navigate(['/', 'incomeHeader', 0, 'edit']);
  }

  onEditIncomeHeader(incomeHeader: IncomeHeader, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.store.dispatch(Actions.setCurrentIncomeHeader({ incomeHeader }));
    this.router.navigate(['/', 'incomeHeader', incomeHeader.id, 'edit']);
  }

  onDeleteIncomeHeader(
    incomeHeader: IncomeHeader,
    slidingItem: IonItemSliding
  ) {
    slidingItem.close();
    this.store.dispatch(
      Actions.showIncomeHeaderDeleteConfirmation({ incomeHeader })
    );
  }
}
