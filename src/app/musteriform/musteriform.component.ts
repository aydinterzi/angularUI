import { Component, OnInit } from '@angular/core';
import { Musteri } from '../musteri.model';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-musteriform',
  templateUrl: './musteriform.component.html',
  styleUrls: ['./musteriform.component.css']
})
export class MusteriformComponent implements OnInit {


  constructor(private request:RequestsService) {
  }
  musteri:Musteri=new Musteri();
  onClick(musteri:Musteri){
    this.request.createEmployee(musteri)
    .subscribe(response=>console.log(response));
  }
  ngOnInit(): void {
  }

}
