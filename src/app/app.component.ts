import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  searchResults: any = [];
  constructor(private api: ApiService){}
  title = 'assignment';

  getRepositories(value) {
    this.api.getRepository(value)
      .subscribe(data => {
        this.searchResults = data['items'].slice(0,3);
      });
  }
}

