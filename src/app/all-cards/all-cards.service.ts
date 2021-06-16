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
    return this.http.get("https://flashcards-b.herokuapp.com//fc/cards/all")
  }
}
