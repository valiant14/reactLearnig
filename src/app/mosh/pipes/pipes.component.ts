import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  course = {
    title: "The Complete Angular Course",
    student: 67534,
    rating: 4.78653,
    price: 200.75,
    releaseDate: new Date(2021, 3, 6),
  }
  constructor() { }

  ngOnInit(): void {
  }

}
