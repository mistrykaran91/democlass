import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../../models/course.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.page.html',
  styleUrls: ['./course-list.page.scss']
})
export class CourseListPage {
  @Input()
  courses: Course[];

  @Output()
  courseSelected: EventEmitter<Course> = new EventEmitter<Course>();

  @Output()
  editCourse: EventEmitter<Course> = new EventEmitter<Course>();

  @Output()
  deleteCourse: EventEmitter<Course> = new EventEmitter<Course>();

  onCourseSelected(course: Course) {
    debugger;
    this.courseSelected.emit(course);
  }

  onEditCourse(course: Course, slidingItem: IonItemSliding) {}

  onDeleteCourse(course: Course, slidingItem: IonItemSliding) {}
}
