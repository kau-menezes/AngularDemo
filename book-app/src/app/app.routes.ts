import { Routes } from '@angular/router';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { BookDetailPageComponent } from './pages/book-detail-page/book-detail-page.component';

export const routes: Routes = [
    {path: '', component: BooksPageComponent},
    {path: 'books/:id', component: BookDetailPageComponent},
];
