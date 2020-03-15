import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import * as Actions from '../../actions';
import * as Reducers from '../../reducers';
import * as Selectors from '../../selectors/';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { Subject } from '../../interfaces/subject.interface';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.page.html',
  styleUrls: ['./edit-subject.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditSubjectPage implements OnInit {
  subjectForm: FormGroup;
  subject: Subject;

  constructor(
    private store: Store<Reducers.SubjectState>,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.store
      .select(Selectors.getCurrentSubject)
      .subscribe(subject => (this.subject = subject));
  }

  ngOnInit() {
    if (this.subject) {
      this.createForm(this.subject);
    }
  }

  createForm(subject: Subject): void {
    this.subjectForm = this.fb.group({
      id: [subject.id],
      name: [subject.name],
      code: [subject.code],
      description: [subject.description]
    });
  }

  save(): void {
    if (this.subjectForm.invalid) {
      return;
    }

    const subject: Subject = { ...this.subject, ...this.subjectForm.value };

    if (subject.id === 0) {
      this.store.dispatch(Actions.createSubject({ subject }));
    } else {
      this.store.dispatch(Actions.updateSubject({ subject }));
    }
  }
}
