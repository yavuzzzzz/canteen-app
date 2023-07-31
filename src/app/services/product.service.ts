import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Category, Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient,@Inject('BASE_API_URL') private baseUrl:String) { }

  getAllProducts(){
    return this.http.get<Product[]>(`${this.baseUrl}/api/v1/products`)
  }

  getProductById(id:String){
    return this.http.get<Product>(`${this.baseUrl}/api/v1/products/${id}`)
  }
  getProductByCategoryId(id:String){
    return this.http.get<Product[]>(`${this.baseUrl}/api/v1/products/${id}`)
  }

  addProduct(product:Product){
    return this.http.post<Response>(`${this.baseUrl}/api/v1/products`,product,{observe:'response'}).pipe(map(
      (response)=>response.status==201))
  }
  deleteProduct(id: number) {
    return this.http.delete<Product>(`${this.baseUrl}/api/v1/products` + id).pipe(
      tap(() => console.log('Ürün silindi')));
  }

  updateProduct(id: number, updatedProduct: Product) {
    return this.http.put<Product>(`${this.baseUrl}/api/v1/products/${id}`, updatedProduct).pipe(
      tap(() => console.log('Ürün güncellendi')));
  }
  getAllCategories(){
    return this.http.get<Category[]>(`${this.baseUrl}/api/v1/categories`)
  }

}
