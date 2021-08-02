import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  posts!:any[];
  response={}
  private url="https://localhost:44324/api/Employees";
  constructor(private http:HttpClient) {
    http.get(this.url)
    .subscribe(response=>{
      this.posts=<[any]>response;
      console.log(this.posts);
    },
    (error)=>{
        console.log("hata yakalandı");
      })
   }

  ngOnInit(): void {
  }
  createPost(input:HTMLInputElement){
    var post={
      "id": "631ea14c-7f2d-4d52-94c6-71051733a562",
        "name": "Berat",
        "surname": "fwesdf",
        "no": 3,
        "girisTarihi": "15/12/1232"
    };
    this.http.post(this.url,post)
    .subscribe(response=>{
      this.posts.splice(0,0,post);
      console.log(response);
    },
    (error)=>{
      console.log("hata yakalandı");
    })
  }
  updatePost(){
    var post={
      "id": "631ea14c-7f2d-4d52-94c6-71051733a562",
        "name": "Berat",
        "surname": "Deneme",
        "no": 3,
        "girisTarihi": "15/12/1232"
    };
    this.http.post(this.url,post)
    .subscribe(response=>{
      console.log(response);
    },
    (error)=>{
      console.log("hata yakalandı");
    })
  }

  deletePost(post:any){
    this.http.delete(this.url+'/'+post.id)
    .subscribe(response=>{
      console.log(response);
      let index=this.posts.indexOf(post);
      this.posts.splice(index,1);
    },
    (error)=>{
      console.log("hata yakalandı");
    })
  }
}
