import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../interfaces/IProduct';
import { MockProductService } from '../../services/mock-product.service';

@Component({
  selector: 'app-product-detail-page',
  imports: [],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css'
})
export class ProductDetailPageComponent implements OnInit {

  product: IProduct | undefined;

  constructor
  (
    private route: ActivatedRoute,
    private service: MockProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let param = params.get('id');
      if (!param)
        return;

      let id = parseInt(param);
      let product = this.service.getProduct(id);
      if(!product)
        return;

      this.product = product;
    })
  }

}
