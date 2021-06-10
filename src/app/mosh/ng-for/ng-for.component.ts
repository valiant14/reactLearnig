import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  courses: any;

  constructor() { }

  ngOnInit(): void {
  }

  onLoad(){
    this.courses = [
      {id: 1, name: "course 1"},
      {id: 2, name: "course 2"},
      {id: 3, name: "course 3"},

    ]
      
  }

  trackCourse(course: any){
    return course ? course.id : undefined;
  }

}
