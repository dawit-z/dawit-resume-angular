import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  schools = [
    { school: "Max Tech Training", city: "Mason, OH", gradyear: "2022" },
    { school: "Sinclair Community College", city: "Dayton, OH", gradyear: "n/a" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
