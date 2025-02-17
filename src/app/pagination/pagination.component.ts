import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  quantity : number = 0;
  limit : number  = 0;
  pages : number = 0;

  setQuantity(qt: number) {
    this.quantity = qt;
    this.calculatePages();
  }

  calculatePages() {
    this.pages = this.quantity / this.limit;
    for (let i = 0; i < this.pages; i++) {
      
      
    }
  }

}
