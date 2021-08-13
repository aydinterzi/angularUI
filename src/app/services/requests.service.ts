import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musteri } from '../musteri.model';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private url="https://localhost:44324/api/Employees";
  constructor(private http:HttpClient) {

  }
    getEmployees()
    {
     return this.http.get(this.url);
    }

    createEmployee(post:Musteri){
     return this.http.post(this.url,post);
    }

    updateEmployee(post:Musteri){
     return this.http.put(this.url,'/'+post.id+JSON.stringify(post));
    }

    deleteEmployee(post:Musteri){
      return this.http.delete(this.url+'/'+post.id);
    }
}
