import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss']
})
export class CourseDetailPage {
  @Input()
  course: Course;

  @Output()
  back: EventEmitter<void> = new EventEmitter<void>();

  onBack() {
    this.back.emit();
  }
}
