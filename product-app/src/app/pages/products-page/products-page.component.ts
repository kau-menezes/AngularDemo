import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';
import { MockProductService } from '../../services/mock-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-page',
  imports: [],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit{

  products: IProduct[] = []

  constructor
  (
    private productService: MockProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    
    
  }

  addNew() {
    this.router.navigate(['products', 'add'])
  }

}
