import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: String) {

  }
  getAdmin(id: number) {
    return this.http.get<Admin>(`${this.baseUrl}/api/v1/admin/${id}`)

  }
  // updateAdmin(id: number, updatedAdmin: Admin) {
  //   return this.http.put<Admin>(`${this.baseUrl}/api/v1/admin/${id}`, updatedAdmin)
  // }
}
