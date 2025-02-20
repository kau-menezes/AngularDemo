import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService, IBookData } from '../../services/book-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books-page',
  imports: [CommonModule],
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.css'
})
export class BooksPageComponent implements OnInit {
    books: Observable<IBookData> | undefined
  
    constructor
    (
      private route: ActivatedRoute,
      private service: BookServiceService
    ) {}
    
  ngOnInit(): void {
    this.books = this.service.search('', 1, 5)
  }
}


