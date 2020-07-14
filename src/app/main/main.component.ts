import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  books;
  search;

  displayFirstBooks() {
    this.apiService.displayFirstBooks()
      .subscribe((data: any[]) => {
        this.books = data;
        this.books = this.books.items;
        console.log(this.books)
      })
  }

  getBooks() {
    this.apiService.search = this.search;
    this.apiService.getBooks()
      .subscribe((data: any[]) => {
        this.books = data;
        this.books = this.books.items;
        console.log(this.books)
      })
    this.search = "";
  }

  constructor(private apiService: ApiService) { }

  public ngOnInit() {
    this.displayFirstBooks();
  }
}
