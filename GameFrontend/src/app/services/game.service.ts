import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class GameService {
  
  constructor(public http: HttpClient) { }
 
  baseUrl: String = 'http://localhost:3000/';
  
  getGames(){
    return this.http.get(this.baseUrl+'games');
  }
}


