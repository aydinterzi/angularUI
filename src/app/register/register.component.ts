import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any={};
  constructor(private authService:AuthserviceService) { }

  ngOnInit(): void {
  }
  register(){
    this.authService.register(this.model).subscribe(response=>{
      console.log("Kullanici olusturuldu.");
    },error=>{
      console.log(error);
    })
  }

}
