import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable()
export class HttpReqinterceptorInterceptor implements HttpInterceptor {

  private access_key = environment.secret_key;

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setParams:{
        'access_key': this.access_key
      }
    })
    console.log(request)
    return next.handle(request).pipe(
        catchError(err => throwError(this.errorHandler(err))
     ),
   )

  }

  errorHandler(error: HttpErrorResponse) {
    switch (error.status) {
      case 404: {
          return alert(`Not Found: The resource you are searching for does not exist`);
      }
      case 403: {
          return `Access Denied: ${error.error.error.code}`;
      }
      case 500: {
          return `Internal Server Error: ${error.error.error.code}`;
      }
      default: {
          return alert(`Error: ${error.error.error.code}`);
      }
  }
  }
}
