import { Inject, Injectable } from '@angular/core';
import { Buy } from '../models/buy';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Buys } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: String) { }



  getCustomerBuy(id: String) {
    return this.http.get<Buys[]>(`${this.baseUrl}/api/v1/buys/${id}`)
  }

  buy(buy: Buy) {
    return this.http.post<Response>(`${this.baseUrl}/api/v1/buys`, buy, { observe: 'response' }).pipe(map(
      (response) => response.status == 201))
  }
}
