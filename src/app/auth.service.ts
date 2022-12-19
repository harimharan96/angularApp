import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register"
  private _loginUrl = "http://localhost:3000/api/login"
  private _registerSellerUrl = "http://localhost:3000/api/seller/register"
  private _loginSellerUrl = "http://localhost:3000/api/seller/login"
  constructor(private http: HttpClient,
              private _router:Router) { }

  registerUser( user:any ){
    return this.http.post<any>(this._registerUrl, user)
  }
  registerSeller( seller:any ){
    return this.http.post<any>(this._registerSellerUrl, seller)
  }

  loginUser(user:any){
    return this.http.post<any>(this._loginUrl, user)
  }
  
  loginSeller(seller:any){
    return this.http.post<any>(this._loginSellerUrl, seller)
  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
