import { Router } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest , HttpErrorResponse } from '@angular/common/http';

import { TokenStorageService } from '../services/TokenStorage.service';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/do';


const TOKEN_HEADER_KEY = 'Authorization';       // for Spring Boot back-end

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    console.log(token);
  if (token != null) {
      authReq = req.clone({
        setHeaders: {
          Authorization: "Bearer " + token
        }
        });
    }
    return next.handle(authReq);
  }
}


    /*.do(
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
         
          if (err.status === 401) {
            this.router.navigate(['user']);
          }
        }
      }
    );;*/
  

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
