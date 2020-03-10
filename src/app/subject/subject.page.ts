import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { IonItemSliding } from '@ionic/angular';
import { Subject } from '../interfaces/subject.interface';
import { SubjectService } from '../services/subject.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectPage {
  subjects$: Observable<Subject[]> = this.subjectService.subjects$;

  constructor(private subjectService: SubjectService, private router: Router) {}

  ionViewWillEnter() {}

  onEdit(subjectId: number, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'subject', 'edit', subjectId]);
  }

  onDelete(subjectId: number, slidingItem: IonItemSliding) {
    slidingItem.close();
  }
}
