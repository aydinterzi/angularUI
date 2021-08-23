import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authservice:AuthserviceService,private router:Router) { }
  model:any={}
  ngOnInit(): void {
  }
  login(){
    this.authservice.login(this.model).subscribe(response=>{
      console.log("merhaba");
      this.router.navigate(["/musteriform"]);
    },error=>{
      console.log("login hataalı");
    });
  }
}
