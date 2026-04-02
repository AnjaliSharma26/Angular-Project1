import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  template: `
    <h3>Product Detail</h3>
    <p>Product ID: {{ productId }}</p>
  `
})
export class ProductDetailComponent {

  productId: string | null = '';

  constructor(private route: ActivatedRoute) {
    this.productId = this.route.snapshot.paramMap.get('id');
  }
}