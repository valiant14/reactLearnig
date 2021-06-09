import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent  {


  likesCount = 0;
  dislikesCount = 0;
  isActive: boolean | undefined;


  onClick(){
    this.likesCount += (this.isActive) ? 1 : 1;
    this.isActive = true
    
  } 

  onDisClick() {
    this.dislikesCount += (this.likesCount) ? -1 : -1; 
    this.isActive = true

  }
}
