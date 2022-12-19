import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './navbar/login/login.component';
import { RegisterComponent } from './navbar/register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductPageComponent } from './navbar/product-page/product-page.component';
import { AuthService } from './auth.service';
import { ProductService } from './product.service';
import { AddProductComponent } from './navbar/add-product/add-product.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { AdminNavComponent } from './navbar/add-product/admin-nav/admin-nav.component';
import { CartComponent } from './navbar/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProductPageComponent,
    AddProductComponent,
    AdminNavComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
