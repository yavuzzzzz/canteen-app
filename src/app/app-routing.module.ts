import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './admin-pages/account/account.component';
import { AdminLayoutComponent } from './admin-pages/admin-layout/admin-layout.component';
import { CartComponent } from './admin-pages/cart/cart.component';
import { OrderPanelComponent } from './admin-pages/order-panel/order-panel.component';
import { ProductPanelComponent } from './admin-pages/product-panel/product-panel.component';
import { UserPanelComponent } from './admin-pages/user-panel/user-panel.component';
import { AuthGuard } from './guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'admin', component: AdminLayoutComponent,/*  canActivate: [AuthGuard] */ },
  { path: 'cart', component: CartComponent,/*  canActivate: [AuthGuard] */ },
  {
    path: 'account', component: AccountComponent, children: [
      { path: "", redirectTo: "account", pathMatch: "full" },
      { path: 'user', component: UserPanelComponent,/*  canActivate: [AuthGuard] */ },
      { path: 'product', component: ProductPanelComponent,/*  canActivate: [AuthGuard] */ },
      { path: 'order', component: OrderPanelComponent,/*  canActivate: [AuthGuard] */ },

    ]/*  canActivate: [AuthGuard] */
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
