import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderPanelComponent } from './order-panel/order-panel.component';
import { ProductPanelComponent } from './product-panel/product-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductSearchPipe } from './admin-layout/product-search.pipe';



@NgModule({
  declarations: [AccountComponent, AdminLayoutComponent, CartComponent, NavbarComponent, OrderPanelComponent, ProductPanelComponent, UserPanelComponent, ProductSearchPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [AccountComponent, AdminLayoutComponent, CartComponent, NavbarComponent, OrderPanelComponent, ProductPanelComponent, UserPanelComponent]
})
export class AdminModule { }
