import { Component, OnInit } from '@angular/core';
import { Musteri } from './musteri.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataTableComponent} from './data-table/data-table.component';
import { Guid } from 'guid-typescript';
import { RequestsService } from './services/requests.service';
import { AuthserviceService } from './services/authservice.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jwtHelper=new JwtHelperService();
 constructor(private authservice:AuthserviceService) {

 }

 ngOnInit(){
  const token=localStorage.getItem("token");
  if(token){
    this.authservice.decodedToken=this.jwtHelper.decodeToken(token);
  }
 }
}
