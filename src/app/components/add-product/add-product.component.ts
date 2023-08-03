import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  newProduct: Product = {
    Id:'',
    Name:'',
    Price:'',
    Quantity:'',
  };

  constructor(private productService:ProductsService, private router:Router){

  }

  addProduct()
  {
    //  this.productService.addProducts(this.newProduct)
    //   .subscribe({
    //     next: (product) => {
    //       this.newProduct.Id = product.Id;
    //     },
    //     error:(response) =>{
    //       alert('failure in api call');
    //       // console.log(response);
    //     }
    //   });

    this.productService.addProducts(this.newProduct)
      .subscribe({
        complete: ()=> console.log('success')
      });

     
      this.router.navigate(['/products']);
  } 

}
