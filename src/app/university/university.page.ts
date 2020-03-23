import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import * as Selectors from '@app/selectors';
import * as Reducers from '@app/reducers';
import * as Actions from '@app/actions';

import { University } from '@interfaces/university.interface';

@Component({
  selector: 'app-university',
  templateUrl: './university.page.html',
  styleUrls: ['./university.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversityPage implements OnInit {
  universities$: Observable<Array<University>> = this.store.select(
    Selectors.getUniversities
  );
  isUniversityEmpty$: Observable<boolean> = this.store.select(
    Selectors.getIsUniversityEmpty
  );

  constructor(
    private store: Store<Reducers.UniversityState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(Actions.loadUniversity());
  }

  onUniversitySelected(university: University) {
    this.store.dispatch(Actions.setCurrentUniversity({ university }));
    this.router.navigate([`/university/${university.id}`]);
  }

  onAddUniversity() {
    this.store.dispatch(Actions.setCurrentUniversity({ university: null }));
    this.router.navigate(['/', 'university', 0, 'edit']);
  }

  onEditUniversity(university: University, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.store.dispatch(Actions.setCurrentUniversity({ university }));
    this.router.navigate(['/', 'university', university.id, 'edit']);
  }

  onDeleteUniversity(university: University, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.store.dispatch(
      Actions.showUniversityDeleteConfirmation({ university })
    );
  }
}
