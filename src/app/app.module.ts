import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HeaderComponent } from './components/header/header.component';
import { CartService } from './service/cart.service';
import { UserService } from './service/user.service';
import { AdminproductsComponent } from './components/adminproducts/adminproducts.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { AdminheaderComponent } from './components/adminheader/adminheader.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    OrdersComponent,
    CartComponent,
    ProductsComponent,
    ProductUpdateComponent,
    AddProductComponent,
    UsersComponent,
    PagenotfoundComponent,
    HeaderComponent,
    AdminproductsComponent,
    UserOrdersComponent,
    AdminheaderComponent,
    AdminpageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),
   

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
