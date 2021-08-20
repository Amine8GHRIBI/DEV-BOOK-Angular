import { User } from './../modele/User.modele';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
 

};
let headers = new HttpHeaders({'Content-Type': 'application/json'});  
  headers.append('Authorization','Bearer ')


const optionRequete = {
  headers: headers
    
  };
  

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

   login(user : User): Observable<any> {
    
    let host = environment.host;
    return this.http.post(host + "/api/Membre/authenticate", user ,   { observe: 'response' });
  }

}
