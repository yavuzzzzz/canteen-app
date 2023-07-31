import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError, map } from 'rxjs';
import { Token } from '../models/user';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {


  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: String, private router: Router) {

  } 
  ngOnInit(): void {
 /*    let tempUser = { userId: "30257416446", email: null, password: null, role: "ADMIN", firstName: "RAMAZAN,", lastName: "GENCER" };
    let tempWallet = { walletId: "64b9268708013a3882b32d9a", balance: 0.0 };
    let tempCart = { cartId: "64b9268708013a3882b32d9b" };
    localStorage.setItem('user', JSON.stringify(tempUser));
    localStorage.setItem('wallet', JSON.stringify(tempWallet));
    localStorage.setItem('cart', JSON.stringify(tempCart)); */
  }

  

  customerLogin(auth: Auth) {
    return this.http.post<Token>(`${this.baseUrl}/login/customerLogin`, auth).pipe(
      catchError((error: HttpErrorResponse) => {
        alert('Hata : ' + error.error);
        return throwError('Something went wrong.');
      })
    )

  }

  adminLogin(auth: Auth) {
    return this.http.post<Response>(`${this.baseUrl}`, auth, { observe: 'response', }).pipe(map(
      (response) => response.status == 201))
  }

  isAuthenticated() {
    if (localStorage.getItem("token")) {

      return true;
    }
    else {
      this.router.navigate([`${this.baseUrl}`])
      return true;
    }
  }

  logout() {
    localStorage.clear();
    this.isAuthenticated();

  }
}
