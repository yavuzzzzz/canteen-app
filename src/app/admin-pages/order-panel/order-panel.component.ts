import { Component } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-order-panel',
  templateUrl: './order-panel.component.html',
  styleUrls: ['./order-panel.component.css']
})
export class OrderPanelComponent {
  orders: Order[];
}
