import { Subject } from './../../interfaces/subject.interface';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-subject-item',
  templateUrl: './subject-item.page.html',
  styleUrls: ['./subject-item.page.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectItemPage implements OnInit {
  @Input()
  subject: Subject;

  constructor(
    private router: Router,
    private subjectService :SubjectService) {}

  ngOnInit() {}

  onSubjectSelected() {
    this.subjectService.setCurrentSubject(this.subject);
    this.router.navigate([`/subject/${this.subject.id}`]);
  }
}
