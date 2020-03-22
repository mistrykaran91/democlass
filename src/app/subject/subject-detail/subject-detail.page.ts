import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Subject } from '@interfaces/subject.interface';

import * as Selectors from '@app/selectors';
import * as Reducers from '@app/reducers';
import * as Actions from '@app/actions';

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

  constructor(
    private store: Store<Reducers.SubjectState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const subjectId = +this.activatedRoute.snapshot.paramMap.get('subjectId');
    this.store.dispatch(Actions.loadSubjectById({ subjectId }));
  }

  onDeleteSubject(subject: Subject) {
    this.store.dispatch(Actions.showDeleteConfirmation({ subject }));
  }
}
