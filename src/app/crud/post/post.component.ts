import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any = []

  private url = 'http://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { 
    this.http.get(this.url).subscribe(response => {
      this.posts = response;
    })
  }

  ngOnInit(): void {
  }

  createPost(input: any){
    let post: any = { title: input.value}
    input.value = '';
    this.http.post(this.url, JSON.stringify(post)).subscribe(response => {
      post['id'] = response;
      this.posts.splice(0, 0, post);
      console.log(response);
    })
  }
}
