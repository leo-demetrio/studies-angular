import { Component, OnInit } from '@angular/core';
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
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = 4;
    this.productService.retreiveOfId(id).subscribe({
      next: product => this.product = product
    })
  }
  delete(): void {
    console.log("delete",this.product.id)
    this.subscription = this.productService.removeOfId(this.product.id).subscribe({
      next: () => {
        console.log("Excluiu")
        // this.retrieveAll()
      },
      error: err => console.log("Error",err)      
    })   
  }

}
