import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import * as Selectors from '@app/selectors';
import * as Reducers from '@app/reducers';
import * as Actions from '@app/actions';

import { LeadSource } from '@interfaces/lead-source.interface';

@Component({
  selector: 'app-lead-source',
  templateUrl: './lead-source.page.html',
  styleUrls: ['./lead-source.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeadSourcePage implements OnInit {
  leadSources$: Observable<Array<LeadSource>> = this.store.select(
    Selectors.getLeadSources
  );
  isLeadSourceEmpty$: Observable<boolean> = this.store.select(
    Selectors.getIsLeadSourceEmpty
  );

  constructor(
    private store: Store<Reducers.LeadSourceState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(Actions.loadLeadSource());
  }

  onLeadSourceSelected(leadSource: LeadSource) {
    this.store.dispatch(Actions.setCurrentLeadSource({ leadSource }));
    this.router.navigate([`/leadSource/${leadSource.id}`]);
  }

  onAddLeadSource() {
    this.store.dispatch(Actions.setCurrentLeadSource({ leadSource: null }));
    this.router.navigate(['/', 'leadSource', 0, 'edit']);
  }

  onEditLeadSource(leadSource: LeadSource, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.store.dispatch(Actions.setCurrentLeadSource({ leadSource }));
    this.router.navigate(['/', 'leadSource', leadSource.id, 'edit']);
  }

  onDeleteLeadSource(leadSource: LeadSource, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.store.dispatch(
      Actions.showLeadSourceDeleteConfirmation({ leadSource })
    );
  }
}
