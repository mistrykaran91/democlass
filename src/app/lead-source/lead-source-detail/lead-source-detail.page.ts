import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as Selectors from '@app/selectors';
import * as Reducers from '@app/reducers';
import * as Actions from '@app/actions';

import { LeadSource } from '@interfaces/lead-source.interface';

@Component({
  selector: 'app-lead-source-detail',
  templateUrl: './lead-source-detail.page.html',
  styleUrls: ['./lead-source-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeadSourceDetailPage implements OnInit {
  leadSource$: Observable<LeadSource> = this.store.select(
    Selectors.getCurrentLeadSource
  );

  constructor(
    private store: Store<Reducers.LeadSourceState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const leadSourceId = +this.activatedRoute.snapshot.paramMap.get(
      'leadSourceId'
    );
    this.store.dispatch(Actions.loadLeadSourceById({ leadSourceId }));
  }

  onDeleteLeadSource(leadSource: LeadSource) {
    this.store.dispatch(
      Actions.showLeadSourceDeleteConfirmation({ leadSource })
    );
  }
}
