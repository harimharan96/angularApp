import { ProductService } from 'src/app/product.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  products: any = [];

  isLoggedIn:boolean = false;

  loggedIn(){
    if(!!localStorage.getItem('token')){
      this.isLoggedIn = true;
    }
  }

  

  constructor(private _productService: ProductService, 
              private _cartService: CartService) {
    this.loggedIn();
  }

  ngOnInit(): void {
    this._productService.getProduct()
    .subscribe(
      res => this.products = res,
      err => console.log(err)
    )
  }

  handleAddToCart(product:any){
    this._cartService.sendItem(product)
  }
  

}
