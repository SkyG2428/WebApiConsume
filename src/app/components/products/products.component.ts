import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  

  products: Product[] = [];

  constructor (private router: Router,private productService:ProductsService){}

  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe({
      next: (products) => {
        this.products = products
         console.log(products)
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

  deleteProduct(id: string|any): void {
    this.productService.deleteProduct(id)
    .subscribe({
      next: (products) => {
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/',{skipLocationChange: true})
        .then(() => {
          this.router.navigate([currentUrl])
        })
      }
    })
  }

}
