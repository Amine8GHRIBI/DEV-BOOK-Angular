import { stars } from './../modele/stars.modele';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


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

export class StarsService{
    constructor( private http : HttpClient) { }

    createStars(id : Number )  : Observable<stars> {

        let host = environment.host;
        return this.http.post<stars>(host+"/api/star/add/"+ id ,optionRequete);

    }

    getAllStars () : Observable<stars[]> {
        let host = environment.host;
        return this.http.get<stars[]> (host +"/api/star/all");

    }
}