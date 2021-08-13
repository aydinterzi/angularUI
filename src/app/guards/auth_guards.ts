import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthserviceService } from "../services/authservice.service";
@Injectable({
  providedIn:"root"
})
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthserviceService){}
  canActivate(){
    if(this.authService.loggedIn())
    {
      return true;
    }
    console.log("authguards");
    return false;
  }
}
