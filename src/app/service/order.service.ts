import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseOrdersUrl = "http://localhost:8080/orders/allOrders";
  baseCreateOrderURL = "http://localhost:8080/orders/add";
  baseCancelOrderURL = "http://localhost:8080/orders/delete";
  baseOrderDetailsURL = "http://localhost:8080/orders";
  baseOrdersBasedOnUserURL="http://localhost:8080/orders/order";

  constructor(private http:HttpClient) { }

  getOrders():Observable<Orders[]>{
    return this.http.get<Orders[]>(`${this.baseOrdersUrl}`);
  }

  createOrder(id:number):Observable<Object>{
    return this.http.get(`${this.baseCreateOrderURL}/${id}`);
  }

  cancelOrder(id:number):Observable<Object>{
    return this.http.delete(`${this.baseCancelOrderURL}/${id}`,{responseType:'text'});
  }

  getOrderDetails(id:number) : Observable<Object>{
    return this.http.get(`${this.baseOrderDetailsURL}/${id}`);
  }

  getOrdersByUserId(id:number):Observable<Orders[]>{
    return this.http.get<Orders[]>(`${this.baseOrdersBasedOnUserURL}/${id}`);
  }

 
}
