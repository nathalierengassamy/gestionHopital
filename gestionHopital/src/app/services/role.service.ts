import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseURL = "http://localhost:9090/roles";
  constructor(private httpClient:HttpClient) { }
  
  public findAllRole() : Observable<any>{
    return this.httpClient.get(this.baseURL);
  }
  public deleteRole(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
}

  public saveRole(role:any):Observable<any>{
    return this.httpClient.post(this.baseURL,role);
  }
}
