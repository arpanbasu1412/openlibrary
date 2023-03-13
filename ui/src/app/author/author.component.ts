import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  title = 'Authors Management'
  authors = [{
    "id": 1,
    "name": "Arpan Basu",
    "BirthDate": "14.12.2002",
    "nationality": "Indian"
  }]
  //authors = []
  
  isGreen = true

  constructor() { }

  ngOnInit(): void {
  }

}
