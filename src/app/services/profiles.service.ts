import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Profile } from './../modele/profile.modele';


const optionRequete = {
  headers: new HttpHeaders({ 
    
    'Content-Type': 'application/json',
    'access-control-allow-origin': "http://localhost:4200/",
    'withCredentials': "true"
  })
  };

 @Injectable({providedIn : "root"})

export class ProfilesService {

  Profiles ?: Profile[];
 // profile ?: Profile;
  
    constructor(private http : HttpClient){

    }

createProfile(prof : Profile):Observable<Profile> {
  let host = environment.host;
       return this.http.post<Profile>(host+"/api/Membre/signup", prof  );
       console.log(prof);
       
}    

getAllProfiles():Observable<Profile[]> {
    let host=environment.host;
          return this.http.get<Profile[]>(host+"/api/Membre/profiles"  );

}


DeleteProfile ( user : String):Observable<Profile> {
  let host=environment.host;
 console.log("avant delete");
  
   return this.http.put<Profile>(host + "/api/Membre/delete/"+user ,optionRequete );
}

getProfileByMail(username : String):Observable<Profile>{
  let host = environment.host;
  return this.http.get<Profile>(host+"/api/Membre/profile/"+username );
}

deleteAllProfiles():Observable<any>{
  let host = environment.host;
 // console.log(this.http.delete(host +"api/Membre/deleteall",optionRequete));
  return this.http.delete<any>(host +"/api/Membre/deleteall");
}


}
