import { Component, OnInit } from '@angular/core';
import { AllCardsService } from './all-cards.service';
import { cardContent } from './cardContent';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent implements OnInit {

  

  constructor(private cs:AllCardsService) { }

  ngOnInit(): void {
  }
  
  checkString!:string
  errorMessage!:string
  finshed:boolean=false
  card:cardContent = {
    cardId:0,
    title:'',
    content:'',
    created_on:''
  }
  
  getAllCards(){
    const sub = this.cs.getCards().subscribe(
      response =>{ this.checkString = response 
      },
    
      error => { this.errorMessage = error.error.message
        sub.unsubscribe() 
      },

      () => { this.finshed=true
        console.log("finished") 
      }     
    )
  }
}
