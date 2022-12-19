import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any=[]
  

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {

   

    this._cartService.getItem()
    .subscribe(
      
      // (res)=>{ this.cartItems.push(res)
      // console.log(res)}
      product=>this.addProductToCart(product)
    )

  }

  addProductToCart(product: any){

    let productExists = false
    for (let i in this.cartItems) {
      if (this.cartItems[i]._id === product._id) {
        this.cartItems[i].prodQty++
        productExists = true
        break;
      }
    }
    
    if (!productExists) {
      this.cartItems.push(product)
    }
  }
  itemRemove(product:any){

    this.cartItems.splice(product,1)
    product.item.prodQty = 1;
  }
}
