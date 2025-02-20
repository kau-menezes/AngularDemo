import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card"
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../../services/book-service.service';
import { Observable } from 'rxjs';
import { IBook } from '../../interfaces/IBook';

@Component({
  selector: 'app-book-item',
  imports: [ CommonModule, MatCardModule, MatChipsModule, MatButtonModule, MatIconModule ],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {

  @Input()
  book: IBook | undefined 

  bookAvaliation : string[]= []

  constructor
  (
    private route: ActivatedRoute,
    private service: BookServiceService
  ) {}


}
