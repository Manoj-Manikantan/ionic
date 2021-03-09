import { Component, OnInit } from '@angular/core';
import { Patient } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  patients: Patient[] = [
    {
      name: "John Wick",
      age: "32",
      phNum: "6781235566",
    },
    {
      name: "Dave Batista",
      age: "45",
      phNum: "9123556612"
    },
    {
      name: "Shane Warne",
      age: "28",
      phNum: "6784209996"
    }
  ];


  constructor() { }


  ngOnInit() {

  }

}
