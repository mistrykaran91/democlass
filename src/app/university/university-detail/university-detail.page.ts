import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as Selectors from '@app/selectors';
import * as Reducers from '@app/reducers';
import * as Actions from '@app/actions';

import { University } from '@interfaces/university.interface';

@Component({
  selector: 'app-university-detail',
  templateUrl: './university-detail.page.html',
  styleUrls: ['./university-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversityDetailPage implements OnInit {
  university$: Observable<University> = this.store.select(
    Selectors.getCurrentUniversity
  );

  constructor(
    private store: Store<Reducers.UniversityState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const universityId = +this.activatedRoute.snapshot.paramMap.get(
      'universityId'
    );
    this.store.dispatch(Actions.loadUniversityById({ universityId }));
  }

  onDeleteUniversity(university: University) {
    this.store.dispatch(
      Actions.showUniversityDeleteConfirmation({ university })
    );
  }
}
