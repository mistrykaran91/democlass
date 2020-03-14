import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { IonItemSliding } from '@ionic/angular';
import { Subject } from '../interfaces/subject.interface';
import { SubjectService } from '../services/subject.service';
import { Observable } from 'rxjs';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectPage {
  subjects$: Observable<Subject[]> = this.subjectService.subjects$;

  constructor(
    private subjectService: SubjectService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ionViewWillEnter() {}

  onDeleteSubject(subject: Subject, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.messageService.confirmation(
      `Delete ${subject.name} Subject ?`,
      this.confirmDelete.bind(this, subject.id)
    );
  }

  confirmDelete(subjectId: number) {
    this.subjectService.deleteSubject(subjectId).subscribe(() => {
      this.router.navigate(['/subject']);
    });
  }

  onAddSubject() {
    this.subjectService.setCurrentSubject(null);
  }

  onEditSubject(subject: Subject, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.subjectService.setCurrentSubject(subject);
    this.router.navigate(['/', 'subject', 'edit', subject.id]);
  }
}
