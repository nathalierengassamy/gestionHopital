import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private baseURL = "http://localhost:7070/chambres";
  constructor(private httpClient:HttpClient) { }
  public findAllChambre() : Observable<any>{
    return this.httpClient.get(this.baseURL);
}

public deleteChambre(id:number):Observable<any>{
  return this.httpClient.delete(this.baseURL+"/"+id);
}

public saveChambre(message:any):Observable<any>{
  return this.httpClient.post(this.baseURL,message);
}
}