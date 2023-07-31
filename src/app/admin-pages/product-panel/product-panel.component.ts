import { Component } from '@angular/core';
import { Buys } from 'src/app/models/cart';

@Component({
  selector: 'app-product-panel',
  templateUrl: './product-panel.component.html',
  styleUrls: ['./product-panel.component.css']
})
export class ProductPanelComponent {
buyList: Buys[];
}
