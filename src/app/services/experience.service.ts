import { ProfilesService } from './profiles.service';
import { ExperienceComponent } from './../experience/experience.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Profile } from './../modele/profile.modele';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Experience } from './../modele/experience.modele';
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
export class ExperienceService {

    profile ?: Profile;
    Expe ? : Experience;

  constructor(private http : HttpClient , private profileservice : ProfilesService) { 
    
  }

createExperience(exp : Experience , username : string ): Observable<Experience>{
   let host = environment.host;
   console.log(username);
   console.log( exp);
   this.Expe =   exp; 
   return this.http.post<Experience>(host+"/api/Experience/add/"+username, exp);
   console.log(username);
}


deleteExperience(id : Number):Observable<Experience>{
  let host = environment.host;
  return this.http.put<Experience>(host+"/api/Experience/delete/"+id , optionRequete);
}
}