import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { handleError } from '../helpers/util.helper';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseUrl = 'api/courses';

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  courses$ = this.http.get<Course>(this.courseUrl).pipe(
    map(courses => (courses ? courses : this.initializeCourse())),
    catchError(handleError)
  );

  createCourse(course: Course): Observable<Course> {
    course.id = null;

    return this.http.post<Course>(`${this.courseUrl}`, course).pipe(
      map(data => data),
      catchError(handleError)
    );
  }

  updateCourse(course: Course): Observable<Course> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .put<Course>(`${this.courseUrl}/${course.id}`, course, { headers })
      .pipe(
        map(() => course),
        catchError(handleError)
      );
  }

  deleteCourse(id: number) {
    const url = `${this.courseUrl}/${id}`;

    return this.http.delete<Course>(`${url}`).pipe(
      map(data => data),
      catchError(handleError)
    );
  }

  private initializeCourse(): Course {
    // Return an initialized object
    return {
      id: 0,
      name: '',
      displayName: '',
      avatar: null,
      branchId: null,
      code: '',
      description: '',
      duration: null,
      fees: null,
      status: null,
      subjectId: [],
      summary: null,
      tax: null,
      university: null
    };
  }
}
