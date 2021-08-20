import { Observable } from 'rxjs';
import { ProfilesService } from './profiles.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

const optionRequete = {
    headers: new HttpHeaders({ 
      
      'Content-Type': 'application/json',
      'access-control-allow-origin': "http://localhost:4200/",
      'withCredentials': "true",
    //  'Content-Type': "application/octet-stream",
    })
    };
    const req = new HttpRequest('POST', '/post', FormData, {
      reportProgress: true,
      responseType: 'text'
    });


@Injectable({
  providedIn: 'root'
})

export class fileservice{

    constructor(private http : HttpClient , private profileservice : ProfilesService) { 

}

createfile( file : FormData, id : Number) : Observable<any>{

    let host = environment.host;
    return this.http.post<any>(host + "/api/file/add/"+id , file );

  }

}