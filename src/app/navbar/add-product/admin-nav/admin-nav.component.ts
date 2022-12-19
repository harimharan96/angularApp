import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  registerSellerData:any={}

  loginSellerData:any={}

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }
  isLogin: boolean = true;

  login(){
    this.isLogin = !this.isLogin
    
  }

  loginSeller(){
    this._auth.loginSeller(this.loginSellerData)
    .subscribe(
      res => {
        // console.log(res)
        localStorage.setItem('sellerToken', res.token)
        this._router.navigate(['/add-products'])
      },
      err => console.log(err)
    )
  }

  registerSeller(){
    this._auth.registerSeller(this.registerSellerData)
    .subscribe(
      res => {
        // console.log(res)
        localStorage.setItem('sellerToken', res.token)
        // this._router.navigate(['/products'])
      },
      err => console.log(err)
    )
  }

}
