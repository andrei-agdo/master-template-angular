import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { NgModule, Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ApplicationId } from 'src/environments/environment';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const _headers = { headers: req.headers.set('ApplicationId', ApplicationId) };


    return next.handle(req.clone(_headers)).pipe(
      catchError((error: any) => {
        return throwError(error);
      }));

  }

}


@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    }
  ],
})


export class Interceptor { }