import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/views/product/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns: string[] = ['id', 'name','options'];
  subscription: Subscription;
  product: Product;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
     this.retrieveAll();    
  }


  retrieveAll(): void {
    this.subscription = this.productService.retrieveAll().subscribe({
      next: products => {
        this.products = products
      },
      error: err => console.log("Error",err)      
    })
  } 
 
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
