import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { adminauthGuard } from './adminauth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminproductsComponent } from './components/adminproducts/adminproducts.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UsersComponent } from './components/users/users.component';
import { userauthGuard } from './userauth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
 {path:'signUp',component:UsersComponent},
 {path:'home',canActivate:[userauthGuard],component:HomepageComponent},
 {path:'products',canActivate:[userauthGuard],component:ProductsComponent},
 {path:'carts',canActivate:[userauthGuard],component:CartComponent},
 {path:'user/orders',canActivate:[userauthGuard],component:UserOrdersComponent},

 {path:'products/update/:id',canActivate:[adminauthGuard],component:ProductUpdateComponent},
 {path:'admin/products',canActivate:[adminauthGuard],component:AdminproductsComponent},
 {path:'admin',canActivate:[adminauthGuard],component:AdminpageComponent},
 {path:'orders',canActivate:[adminauthGuard],component:OrdersComponent},
 {path:'products/add',canActivate:[adminauthGuard],component:AddProductComponent},
 
 

 {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
