import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

    getUsers() {
      return this.http.get('https://jsonplaceholder.typicode.com/users')
    }

    saveUser(user){this.http.post("http://127.0.0.1:3000/customers", user)
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
