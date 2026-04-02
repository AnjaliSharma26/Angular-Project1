import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.html'
})
export class ProductsComponent {

  products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Mobile' },
    { id: 3, name: 'Tablet' }
  ];

  constructor(private router: Router) {}

  goToDetails(id: number) {
    this.router.navigate(['/products', id]);
  }
}