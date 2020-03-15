import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CourseActions from '../actions/course.actions';
import { concatMap, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseEffects {
  private courseUrl = 'api/courses';

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadCourses),
      concatMap(action => {
        debugger;
        return this.http.get<Course[]>(`${this.courseUrl}`).pipe(
          map(courses => {
            debugger;
            return CourseActions.loadCoursesSuccess({ courses });
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {}
}
