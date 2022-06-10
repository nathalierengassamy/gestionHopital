import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DossierService {
  private baseURL = "http://localhost:9090/dossiers";
  constructor(private httpClient:HttpClient) { }
  public findAllDossier() : Observable<any>{
    return this.httpClient.get(this.baseURL);
}
public deleteDossier(id:number):Observable<any>{
  return this.httpClient.delete(this.baseURL+"/"+id);
}

public saveDossier(message:any):Observable<any>{
  return this.httpClient.post(this.baseURL,message);
}
}