import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './addEmployee.component.html',
  styleUrls: ['./addEmployee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  model: any = {};

   onSubmit() {
     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
   }
  ngOnInit() {
  }

}
