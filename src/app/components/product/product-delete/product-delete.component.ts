import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/views/product/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;
  subscription: Subscription;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.subscription = this.productService.retreiveOfId(id).subscribe({
      next: product => {
        this.product = product;
      },
      error: err => console.log("Error",err)      
    })
  }
  delete(): void {    
    this.subscription = this.productService.removeOfId(this.product.id).subscribe({
      next: () => {
       this.router.navigate(['/products'])
      },
      error: err => console.log("Error",err)      
    }); 
  }
  cancel(): void {
    this.router.navigate(['/products']);
  }

}
