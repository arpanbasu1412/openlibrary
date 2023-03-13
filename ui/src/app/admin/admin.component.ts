import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  title = 'Admins Management'
  admins = [{
    "id": 1,
    "name": "Arpan Basu",
    "username": "arpanbasu1412",
    "password": "108"
  }]
  //admins = []


  isGreen = true


  constructor() { }

  ngOnInit(): void {
  }

}