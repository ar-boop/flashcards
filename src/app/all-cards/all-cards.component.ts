import { Component, OnInit } from '@angular/core';
import { cardContent } from './cardContent';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent implements OnInit {

  card:cardContent = {
    title:"Check",
    content:"Content would be here",
    created_on: new Date().toDateString()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
