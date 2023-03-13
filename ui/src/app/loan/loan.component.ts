import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  title = 'Loans Management'
  loans = [{
    "id": 1,
    "bookId": 1000,
    "studentId": 3000,
    "checkoutDate": "11.1.21",
    "dueDate": "11.3.21"
  }]
  //loans = []

  isGreen = true

  constructor() { }

  ngOnInit(): void {
  }

}
