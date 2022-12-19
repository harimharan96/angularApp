import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './navbar/login/login.component';
import { ProductPageComponent } from './navbar/product-page/product-page.component';
import { RegisterComponent } from './navbar/register/register.component';
import { AddProductComponent } from './navbar/add-product/add-product.component';
import { AuthGuard } from './auth.guard';
// import { CartComponent } from './navbar/cart/cart.component';
import { AdminNavComponent } from './navbar/add-product/admin-nav/admin-nav.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'products', component:ProductPageComponent},
  { path: '', component:ProductPageComponent},
  { path: 'add-products', component:AddProductComponent
  //  canActivate: [AuthGuard]
  },
  { path: 'admin-login', component:AdminNavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
