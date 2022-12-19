import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginUser(item:any){
  //   console.log(item);
  // }
  loginUserData:any = {}

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/products'])
      },
      err => console.log(err)
    )
  }
}
