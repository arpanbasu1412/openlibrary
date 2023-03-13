import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  title = 'Students Management'
  students = [{
    "id": 1,
    "name": "Arpan Basu",
    "dept": "CSE",
    "rollNumber": "04",
    "BirthDate": "14.12.2002",
    "mobileNo": "9830803183"
  }]
  //students = []


  isGreen = true
  constructor() { }

  ngOnInit(): void {
  }

}
