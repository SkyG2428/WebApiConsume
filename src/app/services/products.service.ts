import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseApiUrl: string = "https://localhost:7092/api/"
  
  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]> {
   return  this.http.get<Product[]>(this.baseApiUrl + "Product/Get")
  }

  addProducts(newProduct:Product):Observable<Product> {
    newProduct.Id=0;
    return this.http.post<Product>(this.baseApiUrl + "Product/Post",newProduct);
  }

  getProduct(id:string|any):Observable<Product>
  {
    return this.http.get<Product>(this.baseApiUrl + "Product/Get/" + id);
  }

  updateProduct(id:string|any, updateProduct:Product):Observable<Product>
  {
    return this.http.put<Product>(this.baseApiUrl + "Product/Put/", updateProduct);
  }


  deleteProduct(id:string|any):Observable<Product>{
    return this.http.delete<Product>(this.baseApiUrl + 'Product/Delete?id=' + id )
  }
   
} 

