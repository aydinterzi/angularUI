import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authservice:AuthserviceService,private router:Router) { }
  model:any={}
  ngOnInit(): void {
  }

  login(){
    this.authservice.login(this.model).subscribe(response=>{
      console.log("login başarılı");
      this.router.navigate(["/musteriform"]);
    },error=>{
      console.log("login hatalı");
    });
  }

  loggedIn(){
    const token=localStorage.getItem("token");
    return token?true:false;
  }
  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/register"]);
    console.log("logout");
  }
}
