import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RDVService {
  private baseURL = "http://localhost:9090/rdvs";
  constructor(private httpClient:HttpClient) { }
  public findAllRDV() : Observable<any>{
    return this.httpClient.get(this.baseURL);
}
public deleteRDV(id:number):Observable<any>{
  return this.httpClient.delete(this.baseURL+"/"+id);
}

public saveRDV(rdv:any):Observable<any>{
  return this.httpClient.post(this.baseURL,rdv);
}
}