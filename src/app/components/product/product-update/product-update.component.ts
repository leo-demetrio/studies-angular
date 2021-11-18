import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from 'src/app/views/product/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

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
  update(): void {
    this.subscription = this.productService.updateOfId(this.product).subscribe({
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
