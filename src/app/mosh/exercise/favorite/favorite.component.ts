import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isActive = true
  title: any;

  constructor() { }

  ngOnInit(): void {

  }

  onClick(){
     this.isActive = !this.isActive;
     console.log(this.isActive)
     if(this.isActive) {
       this.title = "Hello"
     }
     else {
       this.title = "Lol"
     }

 }
}
