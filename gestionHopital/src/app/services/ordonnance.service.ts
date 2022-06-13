import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdonnanceService {
  private baseURL = "http://localhost:9090/ordonnances";
  constructor(private httpClient:HttpClient) { }
  public findAllOrdonnance() : Observable<any>{
    return this.httpClient.get(this.baseURL);
}
public deleteOrdonnance(id:number):Observable<any>{
  return this.httpClient.delete(this.baseURL+"/"+id);
}

public saveOrdonnance(ordonnance:any):Observable<any>{
  return this.httpClient.post(this.baseURL,ordonnance);
}
}