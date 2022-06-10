import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseURL = "http://localhost:9090/messages";
  constructor(private httpClient:HttpClient) { }
  public findAllMessage() : Observable<any>{
    return this.httpClient.get(this.baseURL);
}

public deleteMessage(id:number):Observable<any>{
  return this.httpClient.delete(this.baseURL+"/"+id);
}

public saveMessage(message:any):Observable<any>{
  return this.httpClient.post(this.baseURL,message);
}
}