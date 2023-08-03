import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

updateProduct: Product = {
  Id:'',
    Name:'',
    Price:'',
    Quantity:' ',
};

constructor(private router: Router, private productService: ProductsService,
            private route:ActivatedRoute) 
{

}

ngOnInit(): void {
  this.route.paramMap.subscribe({
    next: (params) => {
      const id = params.get('id');

      if(id){
        this.productService.getProduct(id)
        .subscribe({
          next: (response) => {
            this.updateProduct = response;
          }
        })
      }
    }
    
  });
}

updateByProduct()
{
  this.productService.updateProduct(this.updateProduct.Id, this.updateProduct)
  .subscribe({
    next: (response) => {
      this.router.navigate(['products']) 
    },
    error: (err) => {
console.log(err)
    }
    
  })
}

}
