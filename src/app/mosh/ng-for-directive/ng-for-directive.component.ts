import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  templateUrl: './ng-for-directive.component.html',
  styleUrls: ['./ng-for-directive.component.css']
})
export class NgForDirectiveComponent implements OnInit {

  courses = [
    {id: 0, name: 'Course 1'},
    {id: 1, name: 'Course 2'},
    {id: 2, name: 'Course 3'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    this.courses.push({
      id: 4, name: 'courses 4'
    });
  }

  onRemove(course: any){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }


}
