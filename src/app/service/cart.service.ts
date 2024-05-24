import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';
import { CartDTO } from '../models/cartdto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseCartURL = "http://localhost:8080/carts/allcarts";
  baseAddToCartURL="http://localhost:8080/carts/add";
  baseCartsBasedOnUserURL ="http://localhost:8080/carts";
  baseDeleteCartBasedOnIDURL="http://localhost:8080/carts/delete";

  constructor(private http:HttpClient) { }

  getCart():Observable<Cart[]>{
    return this.http.get<Cart[]>(`${this.baseCartURL}`);
  }

  addToCart(cartDTO:CartDTO):Observable<Cart>{
    return this.http.post<Cart>(`${this.baseAddToCartURL}`,cartDTO);
  }

  getCartsByUserId(id:number):Observable<Cart[]>{
    return this.http.get<Cart[]>(`${this.baseCartsBasedOnUserURL}/${id}`);
  }

  removeCart(id:number):Observable<Object>{
    return this.http.delete<Cart[]>(`${this.baseDeleteCartBasedOnIDURL}/${id}`);
  }
}
