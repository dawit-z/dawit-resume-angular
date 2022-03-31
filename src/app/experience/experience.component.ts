import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  jobs = [
    {
      name: "Great American",
      role: "Apprentice",
      location: "Cincinatti, OH",
      length: "Jan 2022 - Present"
    },
    {
      name: "Peloton",
      role: "Field Specialist",
      location: "Dayton, OH",
      length: "Oct 2019 - Jan 2022"
    },
    {
      name: "Meijer",
      role: "Warehouse Clerk",
      location: "Tipp City, OH",
      length: "Oct 2018 - Oct 2019"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
