import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  title = 'Publishers Management'
  publishers = [{
    "id": 1,
    "name": "Arpan Basu",
    "Address": "Maheshtala",
    "phone": "9830803183",
    "email": "demo@gmail.com"
  }]
  //publishers = []


  isGreen = true
  constructor() { }

  ngOnInit(): void {
  }

}
