import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-title-case',
  templateUrl: './title-case.component.html',
  styleUrls: ['./title-case.component.css']
})
export class TitleCaseComponent implements OnInit {

  title: any;

  constructor() { }


  ngOnInit(): void {
  }

}
