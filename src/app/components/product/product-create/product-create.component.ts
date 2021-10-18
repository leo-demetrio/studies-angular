import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.showOnConsole("blz");
    this.productService.read().subscribe(products => {
      console.log(products);
    })
  }
  productCreate(): void {
    console.log('create')
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }

}