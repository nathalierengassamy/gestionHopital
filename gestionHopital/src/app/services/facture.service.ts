import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private baseURL = "http://localhost:9090/factures";
  constructor(private httpClient:HttpClient) { }
  public findAllFacture() : Observable<any>{
    return this.httpClient.get(this.baseURL);
}
public deleteFacture(id:number):Observable<any>{
  return this.httpClient.delete(this.baseURL+"/"+id);
}

public saveFacture(facture:any):Observable<any>{
  return this.httpClient.post(this.baseURL,facture);
}

public findByDossier(id:number) : Observable<any>{
  return this.httpClient.get(this.baseURL+"/"+id);
}

}