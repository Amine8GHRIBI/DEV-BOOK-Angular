import { Observable } from 'rxjs';
import { Publication } from './../modele/publication.modele';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
export class PostService {

  constructor( private http : HttpClient ,   ) { }


  createPost( post : Publication ,username : string) : Observable<Publication>{
    let host = environment.host;
    return this.http.post<Publication>(host+"/api/publication/add/"+username, post  );
  
  }

  getPosts():Observable<Publication[]>{
    let host = environment.host;
    return this.http.get<Publication[]>(host+"/api/publication/all");
}
}
 