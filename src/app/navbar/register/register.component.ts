import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData:any = {}

  // registerUser(item:any){
  //   console.log(item);
  // }

  
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
  }
  
  registerUser(){
    this._auth.registerUser(this.registerUserData)
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
