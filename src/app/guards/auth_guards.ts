import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthserviceService } from "../services/authservice.service";
@Injectable({
  providedIn:"root"
})
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthserviceService,private router:Router){}
  canActivate(){
    if(this.authService.loggedIn())
    {
      return true;
    }
    this.router.navigate(["/register"]);
    return false;
  }
}
