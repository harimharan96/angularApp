import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productUrl = "http://localhost:3000/api/products"
  private _addProductUrl = "http://localhost:3000/api/add-products"

  constructor(private http: HttpClient) { }

  addProduct( product:any ){
    return this.http.post<any>(this._addProductUrl, product)
  }

  getProduct(){
    return this.http.get<any>(this._productUrl)
  }

}
