import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AllCardsService {

  constructor(private http:HttpClient) { }

  getCards():Observable<any>{
    // return this.http.get("https://flashcards-b.herokuapp.com/fc/cards/all")
    return this.http.get("https://flashcards-b.herokuapp.com/fc/cards/all")
  }

  add(card):Observable<any> {
    return this.http.post("https://flashcards-b.herokuapp.com/fc/cards/add",card)
    return this.http.post("http://localhost:8765/fc/cards/add",card)
  }

  put(card):Observable<any> {
    return this.http.put("https://flashcards-b.herokuapp.com/fc/cards/put",card)
    return this.http.put("http://localhost:8765/fc/cards/put",card)
  }

  del(cardNo):Observable<any> {
    // return this.http.put(`http://flashcards-b.herokuapp.com/fc/cards/del/${cardNo}`,cardNo)
    return this.http.put(`https://flashcards-b.herokuapp.com/fc/cards/del/${cardNo}`,cardNo)
  }
  
}