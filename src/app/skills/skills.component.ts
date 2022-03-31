import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: string[] = [
    "C#", "Git", "Github", "SQL", "EF", "WebAPI", "Java", "Spring", "HTML", "CSS", "Bootstrap", "Scrum", "Azure", "Javascript", "Html", "Angular"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
