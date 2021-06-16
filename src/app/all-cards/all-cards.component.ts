import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllCardsService } from './all-cards.service';
import { cardContent } from './cardContent';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent implements OnInit {

  
  cardForm : FormGroup;

  constructor(private fb:FormBuilder,private cs:AllCardsService) { }

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      cardId:['',Validators.required],
      title:['',Validators.required],
      content:['',Validators.required],
      created_on:['',Validators.required]
    })
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

  addSM:string=''
  add(){
    console.log(this.cardForm.value);
    const sub = this.cs.add(this.cardForm.value).subscribe(
      response =>{ this.addSM = response.message
        console.log("res");
        
      },
    
      error => { this.errorMessage = error.error.message
        console.log("err");
        sub.unsubscribe() 
      },

      () => { this.finshed=true
        console.log("finished add") 
      }     
    )
  }
  putSM:string=''
  put(){
    console.log(this.cardForm.value);
    const sub = this.cs.add(this.cardForm.value).subscribe(
      response =>{ this.putSM = response.message
        console.log(this.putSM);
        
      },
    
      error => { this.errorMessage = error.error.message
        console.log("err");
        sub.unsubscribe() 
      },

      () => { this.finshed=true
        console.log("finished put") 
      }     
    )
  }
  delSM:string=''
  del(){
    console.log(this.cardForm.value);
    const sub = this.cs.add(this.cardForm.value.cardId).subscribe(
      response =>{ this.putSM = response.message
        console.log("res");
        
      },
    
      error => { this.errorMessage = error.error.message
        console.log("err del");
        sub.unsubscribe() 
      },

      () => { this.finshed=true
        console.log("finished add") 
      }     
    )
  }
}
