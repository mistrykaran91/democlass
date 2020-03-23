import { MessageService } from './message.service';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  public pendingRequests: Array<string> = [];
  public loader = null;

  constructor(private messageService: MessageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let requestedResourceType = '';

    if (request.url.lastIndexOf('.') !== -1) {
      requestedResourceType = request.url.substring(
        request.url.lastIndexOf('.') + 1
      );
    }

    if (requestedResourceType.toLowerCase() !== 'html') {      
      if (request.method === 'POST' || request.method === 'PUT' || request.method === 'DELETE' ) {
        this.pendingRequests.push(request.url);
        setTimeout(() => {
          this.messageService.presentLoading();
        }, 500);
      }
    }

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        // debugger;
        if (event instanceof HttpResponse) {
          const rowIndex = this.pendingRequests.indexOf(request.url);
          if (rowIndex !== -1) {
            this.pendingRequests.splice(rowIndex, 1);
          }

          if (this.pendingRequests.length <= 0) {
            this.messageService.dismissLoader();
          }
        } else if (event instanceof HttpErrorResponse) {
          this.pendingRequests = [];
          if (event.status === 401) {
          } else {
            this.messageService.dismissLoader();
          }
        }
      }),
      catchError(err => {
        // debugger;
        this.pendingRequests = [];
        this.messageService.dismissLoader();
        return throwError(err.json ? err.json() : err);
      })
    );
  }
}
