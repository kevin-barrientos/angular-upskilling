import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable()
export class ConsoleLogInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<Todo[]>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        console.warn(err);
        return throwError(() => new Error(`Http Error Intercepted - ${err.status}`));
      })
    );
  }
}
