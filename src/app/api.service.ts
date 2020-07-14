import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  books;
  search;

  constructor(private http: HttpClient) { }

  displayFirstBooks() {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=new+york+times+best+sellers&maxResults=21&key=AIzaSyDLHLaOVfJiEpKcrMjX_l8qf6Pov92jh_U`)
  }

  getBooks() {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${this.search}&maxResults=21&key=AIzaSyDLHLaOVfJiEpKcrMjX_l8qf6Pov92jh_U`)
  }
}