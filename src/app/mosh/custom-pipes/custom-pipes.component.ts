import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {

  text = 'Aliqua mollit nostrud veniam esse eiusmod velit exercitation tempor reprehenderit fugiat. Proident esse irure elit mollit quis in aliquip officia quis id sit culpa commodo Lorem. Tempor voluptate aute non exercitation dolor voluptate veniam adipisicing magna do id laboris reprehenderit et.'
  constructor() { }

  ngOnInit(): void {
  }

}
