import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Email} from './email';
import {EmailService} from './email.service';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email>{

  constructor(private emailService: EmailService, private router : Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const {id} = route.params;

    return this.emailService.getEmail(id).pipe(
      catchError(() => {
        this.router.navigateByUrl('/inbox/not-found');
        return EMPTY;
    })
    );
  }
}
