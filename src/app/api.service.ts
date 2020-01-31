import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const localUrl = 'https://api.github.com/search/repositories?q=';

@Injectable({


  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getRepository(searchString) {
    return this.http.get(localUrl + searchString);
  }
}
