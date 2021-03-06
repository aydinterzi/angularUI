import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from  "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private url="https://localhost:44324/api/user/";
  jwthelper=new JwtHelperService();
  decodedToken:any;
  constructor(private http:HttpClient) { }
  login(model:any){
    return this.http.post(this.url+"login",model)
    .pipe(
      map((response:any)=>{
        const result=response;
        if(result){
          localStorage.setItem("token",result.token);
        }
      })
    )
  }
  register(model:any){
    return this.http.post(this.url+"register",model);
  }
  loggedIn(){
    const token=localStorage.getItem("token");
    return !this.jwthelper.isTokenExpired(token);
  }
}
