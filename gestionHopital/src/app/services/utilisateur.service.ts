import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private baseURL = "http://localhost:9090/ordonnances";
  constructor(private httpClient:HttpClient) { }
  public findAllUtilisateur() : Observable<any>{
    return this.httpClient.get(this.baseURL);
}
public deleteUtilisateur(id:number):Observable<any>{
  return this.httpClient.delete(this.baseURL+"/"+id);
}

public saveUtilisateur(message:any):Observable<any>{
  return this.httpClient.post(this.baseURL,message);
}
}
