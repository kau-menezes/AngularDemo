import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../../interfaces/IBook';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../../services/book-service.service';

import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card"
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-book-detail-page',
  imports: [ CommonModule, MatCardModule, MatChipsModule, MatButtonModule, MatIconModule ],
  templateUrl: './book-detail-page.component.html',
  styleUrl: './book-detail-page.component.css'
})
export class BookDetailPageComponent implements OnInit {
  book: Observable<IBook> | undefined

  bookAvaliation : string[]= []

  constructor
  (
    private route: ActivatedRoute,
    private service: BookServiceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params=> {
      let id = parseInt(params['id']);
      if (isNaN(id))
        return; 
      
      this.book = this.service.getDetails(id);

      // for (let index = 0; index < (this.book | async)?.avaliation; index++) {
      //   this.bookAvaliation.push("star")
        
      // }


    })
  }

}
