import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from '../../interfaces/subject.interface';
import { Router } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { Observable } from 'rxjs';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.page.html',
  styleUrls: ['./subject-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectDetailPage implements OnInit {
  subject$: Observable<Subject> = this.subjectService.currentSubject$;

  constructor(
    private subjectService: SubjectService,
    private messageService: MessageService,
    private router: Router) {}

  ngOnInit() {}

  onDeleteSubject(subject: Subject) {
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
}
