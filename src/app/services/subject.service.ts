import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { handleError } from '../helpers/util.helper';
import { Subject } from '../interfaces/subject.interface';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private subjectUrl = 'api/subjects';
  private currentSubject = new BehaviorSubject<Subject>(
    this.initializeSubject()
  );

  currentSubject$ = this.currentSubject.asObservable();

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  subjects$ = this.http.get<Subject[]>(this.subjectUrl).pipe(
    map(subjects => subjects),
    catchError(handleError)
  );

  createSubject(subject: Subject): Observable<Subject> {
    subject.id = null;

    return this.http.post<Subject>(`${this.subjectUrl}`, subject).pipe(
      map(data => data),
      catchError(handleError)
    );
  }

  setCurrentSubject(subject: Subject) {
    if (subject) {
      this.currentSubject.next(subject);
    } else {
      this.currentSubject.next(this.initializeSubject());
    }
  }

  updateSubject(subject: Subject): Observable<Subject> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .put<Subject>(`${this.subjectUrl}/${subject.id}`, subject, { headers })
      .pipe(
        map(() => subject),
        catchError(handleError)
      );
  }

  deleteSubject(id: number): Observable<any> {
    const url = `${this.subjectUrl}/${id}`;
    return this.http.delete<Subject>(`${url}`).pipe(catchError(handleError));
  }

  private initializeSubject(): Subject {
    // Return an initialized object
    return {
      id: 0,
      code: '',
      name: '',
      avatar: null,
      description: ''
    };
  }
}
