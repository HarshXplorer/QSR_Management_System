import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseProductsUrl="http://localhost:8080/products/allproducts";
  baseAddProductUrl = "http://localhost:8080/products/add";
  baseUpdateProductUrl="http://localhost:8080/products/update";
  baseURL="http://localhost:8080/products";

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Products[]>{
    return this.http.get<Products[]>(`${this.baseProductsUrl}`);
  }

  addProduct(product:Products):Observable<Products>{
    return this.http.post<Products>(`${this.baseAddProductUrl}`,product);
  }

  updateProduct(product:Products):Observable<Products>{
    return this.http.put<Products>(`${this.baseUpdateProductUrl}`,product);
  }

  getProductBasedOnProductID(id:number):Observable<Products>{
    return this.http.get<Products>(`${this.baseURL}/${id}`);
  }

  deleteProductBasedOnProductID(id:number):Observable<Object> {
    return this.http.delete<Products>(`${this.baseURL}/${id}`);

  }




}
