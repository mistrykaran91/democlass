import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Subject } from '../../interfaces/subject.interface';
import * as Actions from '../../actions';
import * as Reducers from '../../reducers';
import * as Selectors from '../../selectors/index';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.page.html',
  styleUrls: ['./subject-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectDetailPage implements OnInit {
  subject$: Observable<Subject> = this.store.select(
    Selectors.getCurrentSubject
  );

  constructor(private store: Store<Reducers.SubjectState>) {}

  ngOnInit() {}

  onDeleteSubject(subject: Subject) {
    this.store.dispatch(Actions.showDeleteConfirmation({ subject }));
  }
}
