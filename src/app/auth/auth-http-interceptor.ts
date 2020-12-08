import {Injectable} from '@angular/core';
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor{
  // @ts-ignore
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ):
    Observable<HttpEvent<any>>{
    // Modify or log the outgoing request
    const modifiedReq = req.clone({
      withCredentials : true
    });
    return next.handle(modifiedReq)
      .pipe(
        tap(val => {
          if (val.type === HttpEventType.Sent){
            console.log('Request was sent to server');
          }
          if (val.type === HttpEventType.Response){
            console.log('Got a response from API', val);
          }
        })
    );

  }

}
