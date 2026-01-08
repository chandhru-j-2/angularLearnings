import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products';

@Component({
  selector: 'app-api-learning',
  standalone: false,
  templateUrl: './api-learning.html',
  styleUrl: './api-learning.css',
})
export class ApiLearning implements OnInit {
  products: Product[] = [];
  isLoading = true;

  constructor(private productService: ProductsService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        console.log(products);
        this.products = products;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
        this.cdr.detectChanges();
      },
    });
  }
}
