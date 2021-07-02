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
  gaEM:string=''
  getAllCards(){
    this.gaEM=null
    const sub = this.cs.getCards().subscribe(
      response =>{ this.checkString = response 
      },
    
      error => { this.gaEM = error.error.errorMessage
        console.log(error);
        sub.unsubscribe() 
      },

      () => { this.finshed=true
        console.log("finished") 
      }     
    )
  }

  addSM:string=''
  addEM:string=''
  add(){
    this.addSM=null
    this.addEM=null
    console.log(this.cardForm.value);
    const sub = this.cs.add(this.cardForm.value).subscribe(
      response =>{ this.addSM = response.message
        console.log("res");
        this.cardForm.reset()
      },
    
      error => { this.addEM = error.error.errorMessage
        console.log("err");
        sub.unsubscribe() 
      },

      () => { this.finshed=true
        console.log("finished add") 
      }     
    )
  }
  
  putSM:string=''
  putEM:string=''
  put(){
    this.putEM=null
    this.putEM=null
    console.log(this.cardForm.value);
    const sub = this.cs.put(this.cardForm.value).subscribe(
      response =>{ 
        this.putSM = response.message
        console.log(this.putSM);
      },
    
      error => { 
        this.putEM = error.error.errorMessage
        console.log("Error in Put");
        sub.unsubscribe() 
      },

      () => { 
        this.finshed=true
        console.log("Finished put") 
      }     
    )
  }

  delSM:string=''
  delEM:string=''
  del(){
    this.delEM=null
    this.delSM=null
    console.log(this.cardForm.value);
    const sub = this.cs.del(this.cardForm.value.cardId).subscribe(
      response => {
        this.delSM = response.message 
        this.cardForm.reset()
      },
      
      error => { 
        this.delEM = error.error.errorMessage
        console.log(error);
        sub.unsubscribe() 
      },

      () => { this.finshed=true }     
    )
  }
}
