import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: String) { }

  getOrderById(id: number) {
    return this.http.get<Order>(`${this.baseUrl}/api/v1/buy/${id}`)
  }
  getOrders() {
    return this.http.get<Order[]>(`${this.baseUrl}/api/v1/buy`)
  }

  deleteOrder(id: number) {
    return this.http.delete<Order>(`${this.baseUrl}/api/v1/buy` + id).pipe(
      tap(() => console.log('Sipariş silindi')));
  }
  updateOrder(id: number, updatedOrder: Order) {
    return this.http.put<Order>(`${this.baseUrl}/api/v1/products/${id}`, updatedOrder).pipe(
      tap(() => console.log('Sipariş güncellendi')));
  }
}
