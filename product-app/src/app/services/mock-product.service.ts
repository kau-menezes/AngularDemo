import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})

export class MockProductService {
  private nextId = 0;
  private products: IProduct[] = []

  constructor() { }


}
