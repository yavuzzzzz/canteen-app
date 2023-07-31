import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Category, Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  filterText = "";
  productList: Product[] = [];
  categoryList: Category[] = [];
  currentCategory: Category;

  constructor(private productService: ProductService, private cartService: CartService, private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.load()


  }

  load() {
    this.productService.getAllProducts().subscribe(x => this.productList = x);
    this.productService.getAllCategories().subscribe(x => this.categoryList = x);
  }


  get filteredItems(): Product[] {
    if (this.currentCategory) {
      return this.productList.filter(Procult => Procult.categoryResponse.categoryId === this.currentCategory.categoryId);
    }
    return this.productList;
  }




  cart = ''
  cartId = (localStorage.getItem("cartId"))?.replace(/"/g, '');

  setCurrentCategory(category: any) {
    this.currentCategory = category

  }


  getCurrentCategoryClass(category: any) {
    if (category == this.currentCategory) {
      return "bg-danger list-group-item list-group-item-action btn btn-outline-dark btn-block"
    } else {
      return "list-group-item-action btn btn-outline-dark btn-block"
    }
  }



  addBasket(productId: string, productName: string) {
    console.log(this.cartId)
    console.log(productId)

    this.cartService.addProductToCart(this.cartId, productId).subscribe(x => {
      if (x == true) {

        this.toastr.success(`${productName} siparişiniz eklendi`, 'Başarılı');


      } else {
        alert("sepete ekleme hatası hatası")
      }
    });
  }
}