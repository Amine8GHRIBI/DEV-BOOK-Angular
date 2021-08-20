import { Education } from './../modele/education.modele';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const optionRequete = {
  headers: new HttpHeaders({ 
    
    'Content-Type': 'application/json',
    'access-control-allow-origin': "http://localhost:4200/",
    'withCredentials': "true"
  })
  };

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http : HttpClient) { }


createEducation( Edu : Education ,username : string) : Observable<Education>{
  let host = environment.host;
  return this.http.post<Education>(host+"/api/Education/add/"+username, Edu  );

}

deleteEducation ( id :Number ) : Observable<Education>{
  let host = environment.host;
  return this.http.put<Education>(host+"/api/Education/delete/"+id ,optionRequete)
}


}
