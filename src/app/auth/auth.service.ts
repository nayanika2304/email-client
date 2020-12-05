import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


interface UserAvailableResponse{
  available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  userNameAvailable(username: string){
    return this.http.post<UserAvailableResponse>('https://api.angular-email.com/auth/username', {
      username
    });
  }
}
