import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  isSeller:boolean = !!localStorage.getItem('sellerToken')

  registeredProductData:any = {}

  constructor(private _product: ProductService,
              private _router: Router) { }

  ngOnInit(): void {
    if(!this.isSeller){
      this._router.navigate(['/admin-login'])
    }
  }

  adminLogout(){
    localStorage.removeItem('sellerToken')
    this._router.navigate(['/admin-login'])
  }

  addProduct(){

    // console.log(this.registeredProduct)
    this._product.addProduct(this.registeredProductData)
    .subscribe(
      res => {
        this.registeredProductData = {}
        this._router.navigate(['/products'])
      },
      err =>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this._router.navigate(['/login'])
          }
        }
      }
    )
  }
}
