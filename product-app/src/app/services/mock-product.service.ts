import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})

export class MockProductService {
  private nextId = 0;
  private products: IProduct[] = []

  constructor() {
    this.iniitIfNeeded()
   }

  addProduct(product: IProduct) {
    product.id = this.nextId;
    this.nextId++;
    this.products.push(product)
  }

  getProduct(id: number) {
    for (let p of this.products) {
      if (id!== p.id)
        continue
      return p
    }

    return null
  }

  private save() {
    localStorage.setItem('mock-products', JSON.stringify(this.products))
  }

  private iniitIfNeeded() {
    let data = localStorage.getItem('mock-products');

    if (!data) {
      this.initialize();
      this.save();
      return;
    }

    this.products = JSON.parse(data)
  }

  private initialize() {
    this.products = [
      {
        id: 1,
        title: "Product 1",
        price: 10,
        desription: "Description of product 1"
      },
      {
        id: 2,
        title: "Product 2",
        price: 10,
        desription: "Description of product 2"
      },
      {
        id: 1,
        title: "Product 3",
        price: 10,
        desription: "Description of product 3"
      }
    ]
    
    this.nextId = 4;
  }

}
