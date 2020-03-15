import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IonItemSliding } from '@ionic/angular';
import { Subject } from '../interfaces/subject.interface';
import { Observable } from 'rxjs';

import * as Actions from '../actions';
import * as Reducers from '../reducers';
import * as Selectors from '../selectors/index';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectPage implements OnInit {
  subjects$: Observable<Subject[]> = this.store.select(Selectors.getSubjects);

  constructor(
    private store: Store<Reducers.SubjectState>,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(Actions.loadSubject());
  }

  ionViewWillEnter() {}

  onSubjectSelected(subject: Subject) {
    this.store.dispatch(Actions.setCurrentSubject({ subject }));
    this.router.navigate([`/subject/${subject.id}`]);
  }

  onAddSubject() {
    this.store.dispatch(Actions.setCurrentSubject({ subject: null }));
    this.router.navigate(['/', 'subject', 'edit', 0]);
  }

  onEditSubject(subject: Subject, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.store.dispatch(Actions.setCurrentSubject({ subject }));
    this.router.navigate(['/', 'subject', 'edit', subject.id]);
  }

  onDeleteSubject(subject: Subject, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.store.dispatch(Actions.showDeleteConfirmation({ subject }));
  }
}
