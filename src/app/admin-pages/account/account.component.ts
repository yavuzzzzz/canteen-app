import { Component } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { Buys } from 'src/app/models/cart';
import { User } from 'src/app/models/user';
import { BuyService } from 'src/app/services/buy.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  user!: User;
  admin!: Admin;

  

  buys: Buys[] = [];
  constructor(private userService: UserService, private buyService: BuyService
  ) { }
  ngOnInit(): void {

    /* this.userinfo() ;
    this.costumetPastBuy();*/
    console.log(this.usertemp)

  }

  username = "sli";
  userm = '"'
  usertemp = (this.userm + localStorage.getItem("user")).replace(/"/g, '');

  /* userinfo() {
    this.userService.getUserById(this.userId)
      .subscribe(x => this.user = x);
  } */ 

 /*  costumetPastBuy() {
    this.buyService.getCustomerBuy(this.userId).subscribe(x => {

      this.buys = x;


      for (let i = 0; i < x.length; i++) {
        x[i].total = 0;
        for (let j = 0; j < x[i].productResponseList.length; j++) {
          x[i].total = x[i].total + x[i].productResponseList[j].price
        }
        console.log(x[i].total)
      }

    })
      ;


  } */
}
