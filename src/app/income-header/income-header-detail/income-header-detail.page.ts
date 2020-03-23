import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as Selectors from '@app/selectors';
import * as Reducers from '@app/reducers';
import * as Actions from '@app/actions';

import { IncomeHeader } from '@interfaces/income-header.interface';

@Component({
  selector: 'app-income-header-detail',
  templateUrl: './income-header-detail.page.html',
  styleUrls: ['./income-header-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncomeHeaderDetailPage implements OnInit {
  incomeHeader$: Observable<IncomeHeader> = this.store.select(
    Selectors.getCurrentIncomeHeader
  );

  constructor(
    private store: Store<Reducers.IncomeHeaderState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const incomeHeaderId = +this.activatedRoute.snapshot.paramMap.get(
      'incomeHeaderId'
    );
    this.store.dispatch(Actions.loadIncomeHeaderById({ incomeHeaderId }));
  }

  onDeleteIncomeHeader(incomeHeader: IncomeHeader) {
    this.store.dispatch(
      Actions.showIncomeHeaderDeleteConfirmation({ incomeHeader })
    );
  }
}
