import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/IBook';
import { Observable } from 'rxjs';

export interface IBookData {
  books: IBook[],
  total: number
}

@Injectable({
  providedIn: 'root'
})


export class BookServiceService {

  private apiURL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  get() : Observable<IBookData> {
    return this.http.get<IBookData>(this.apiURL + "/book");
  }

  search(query: string, page: number, limit: number ) : Observable<IBookData> {
    let url = this.apiURL + "/book?query=" + query + "&page=" + page + "&limit=" + limit;
    return this.http.get<IBookData>(url);
  }

  getDetails(id: number): Observable<IBook> {
    let url = `${this.apiURL}/book/${id}` // interpolação
    return this.http.get<IBook>(url);
  }

  
}
