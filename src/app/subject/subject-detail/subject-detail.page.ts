import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../../interfaces/subject.interface';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.page.html',
  styleUrls: ['./subject-detail.page.scss']
})
export class SubjectDetailPage implements OnInit {
  @Input()
  subject: Subject;

  constructor() {}

  ngOnInit() {}
}
