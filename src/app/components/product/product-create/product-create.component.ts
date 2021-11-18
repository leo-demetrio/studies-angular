import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/views/product/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: ''
  };
  subscription: Subscription;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.productService.showOnConsole("blz");
    // this.productService.read().subscribe(products => {
    //   console.log(products);
    // })
  }
  productCreate(): void {
    this.subscription = this.productService.save(this.product).subscribe({
      next: () => {
        this.router.navigate(['/products']);
        this.product.name = '';
      } ,
      error: err => console.log("Erro", err)
    })
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }
  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

}
