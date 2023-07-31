import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    let tempUser = { userId: "30257416446", email: null, password: null, role: "ADMIN", firstName: "RAMAZAN,", lastName: "GENCER" };
    let tempWallet = { walletId: "64b9268708013a3882b32d9a", balance: 0.0 };
    let tempCart = { cartId: "64b9268708013a3882b32d9b" };
    localStorage.setItem('user', JSON.stringify(tempUser));
    localStorage.setItem('wallet', JSON.stringify(tempWallet));
    localStorage.setItem('cart', JSON.stringify(tempCart));
  }

}
