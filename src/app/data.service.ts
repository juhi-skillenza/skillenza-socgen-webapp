import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

    getUsers() {
      return this.http.get('http://localhost:8080/users')
    }

    saveUser(user){this.http.post("http://localhost:8080/user", user)
       .subscribe(
           data => {
               alert("User Added successfully");
           },
           error => {
               alert("Error");
           }
       );
     }
}
