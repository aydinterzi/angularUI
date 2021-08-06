import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Musteri } from '../musteri.model';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  musteri!:Musteri[];
  response={}

  constructor(private requestService:RequestsService) {
   }

  ngOnInit(): void {
    this.requestService.getEmployees()
    .subscribe(response=>{
      this.musteri=<[any]>response;
      console.log(this.musteri);
    },
    (error)=>{
        console.log(error);
      })
  }
  deletePost(post:Musteri){
    this.requestService.deleteEmployee(post)
    .subscribe(response=>{
      console.log(response);
      let index=this.musteri.indexOf(post);
      this.musteri.splice(index,1);
    })
  }
}
