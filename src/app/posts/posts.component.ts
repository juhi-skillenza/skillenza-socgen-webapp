import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor(private data: DataService) { }
  onSubmit(f: NgForm) {
      this.data.saveUser(f.value);
    }
  ngOnInit() {
  }

}
