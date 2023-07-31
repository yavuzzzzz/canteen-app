import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: String) { }


  getCartProductById(id: String) {
    return this.http.get<Cart[]>(`${this.baseUrl}/api/v1/addToCarts/${id}`)
  }

  addProductToCart(cartId: any, productId: string) {
    return this.http.post<Response>(`${this.baseUrl}/api/v1/addToCarts`, { cartId, productId }, { observe: 'response' }).pipe(map(
      (response) => response.status == 201))
  }

  deleteProduct(addToCartId: String) {
    return this.http.delete(`${this.baseUrl}/api/v1/addToCarts/deleteSingleProductFromCart/${addToCartId}`);
  }
}
