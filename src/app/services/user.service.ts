import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { User } from '../models/user';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: String) { }

  getAllUsers() {
    return this.http.get<User[]>(`${this.baseUrl}/api/v1/customers`)
  }

  getUserById(id: String) {
    return this.http.get<User>(`${this.baseUrl}/api/v1/customers/${id}`)
  }

  addUser(product: Product) {
    return this.http.post<User>(`${this.baseUrl}/api/v1/products`, product, { observe: 'response' }).pipe(map(
      (response) => response.status == 201))
  }
  updateUser(id: number, updatedUser: User) {
    return this.http.put<User>(`${this.baseUrl}/api/v1/users/${id}`, updatedUser).pipe(
      tap(() => console.log('Kullanıcı güncellendi')));
  }

  deleteUser(id: number) {
    return this.http.delete<User>(`${this.baseUrl}/api/v1/users` + id).pipe(
      tap(() => console.log('Kullanıcı silindi')));
  }
}
