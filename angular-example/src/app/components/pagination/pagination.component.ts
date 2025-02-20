import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  @Input()
  pages : number = 0;

  currentPage : number = 1;

  changePage(marker : number) {

    if (marker < 0)
    {
      
      this.currentPage + marker <= 0 ? this.currentPage = this.pages :  this.currentPage = this.currentPage + marker
    }

    if (marker > 0)
      {
        this.currentPage + marker > this.pages ? this.currentPage = 1 : this.currentPage = this.currentPage + marker

    
      }

  }

}
