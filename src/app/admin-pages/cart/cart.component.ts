import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Buy } from 'src/app/models/buy';
import { Cart } from 'src/app/models/cart';
import { BuyService } from 'src/app/services/buy.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartlist: Cart[] = [];




  cart = '"'
  cartId = (this.cart + localStorage.getItem("cartId")).replace(/"/g, '');
  customerId = (this.cart + localStorage.getItem("customerId")).replace(/"/g, '');

  buy: Buy = { customerId: this.customerId }
  //giriş yapacak kullanıcının customerId yandaki kod

  constructor(private cartService: CartService, private buyService: BuyService, private router: Router,
  ) { }

  ngOnInit(): void {
    //giriş yapacak kullanıcının cartIdsidir yandaki kod
    this.load(this.cartId);

  }
  total = 0;
  load(id: String) {
    this.cartService.getCartProductById(id).subscribe(x => {
      this.cartlist = x
      for (const element of x) {
        this.total = this.total + element.productResponse.price
      }
    })

  }


  delete(id: string) {
    this.cartService.deleteProduct(id).subscribe(response => {
      this.total = 0;
      //giriş yapacak kullanıcının cartIdsidir yandaki kod
      this.load(this.cartId);
    })
  }


  buyBasket() {


    this.buyService.buy(this.buy).subscribe(x => {
      if (x == true) {

        this.router.navigate(['/buysuccess']);
      } else {
        alert("sipariş verilme hatası")
      }
    });
  }
}
