import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router) { }
  private url="https://localhost:44324/api/auth/login";
  login:Login=new Login;
  show:any;
  dshow:any;
  ngOnInit(): void {
  }
  onClick(login:Login){
    console.log(JSON.stringify(login));
    this.http.post(this.url,login)
    .subscribe(response=>{
      const token=(<any>response).token;
      localStorage.setItem("jwt",token);
      this.router.navigate(["musteriform"]);
      this.show=true;
    },err=>{
     this.dshow=true;
    })
  }
}
