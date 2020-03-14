import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-subject-skeleton-detail',
  templateUrl: './subject-skeleton-detail.component.html',
  styleUrls: ['./subject-skeleton-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectSkeletonDetailComponent {
  repeatElement = Array(10);
  constructor() {}
}
