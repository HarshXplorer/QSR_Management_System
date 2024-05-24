import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/product';
import { Cart } from '../../models/cart';
import { CartDTO } from '../../models/cartdto';
import { ProductsService } from '../../service/products.service';
import { CartService } from '../../service/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products: Products[] = [];
  filteredProducts: Products[] = [];
  sortOrder: string ="";
  cartDTO: CartDTO = new CartDTO();
  productQuantities: { [productId: number]: number } = {};

  constructor(private productService:ProductsService,private cartService:CartService, private snackBar: MatSnackBar){}

  uId=Number(localStorage.getItem('id'));
  ngOnInit():void{
    this.productService.getAllProducts().subscribe((data:Products[])=> {
      this.products = data;
      this.filteredProducts = data;
    });
  }
  addToCart(quantity: number, productId: number, userId: number) {
    let product = this.filteredProducts.find(item => item.id === productId);
    if (product) { // Check if product is not undefined
      this.cartDTO.productId = productId;
      this.cartDTO.userId = userId;
      this.cartDTO.quantity = quantity;
      this.cartService.addToCart(this.cartDTO).subscribe(data => {
        console.log(data);
        // alert("Product added to cart");
        this.snackBar.open('Product added to cart', 'Dismiss', {
          duration: 4000
        });
      });
    } else {
      console.error('Product not found');
    }
  }
  
  
  
 

  applyFilter(event: Event): void {
    let searchTerm =(event.target as HTMLInputElement).value;
    searchTerm =  searchTerm.toLowerCase();
    this.filteredProducts=this.products.filter
    (product => product.name.toLowerCase().includes(searchTerm))
    this.sortProduct(this.sortOrder)
  }
  sortProduct(sortValue: string){
    this.sortOrder=sortValue;

    if(this.sortOrder === "priceLowHigh"){
      this.filteredProducts.sort((a,b) => a.price - b.price)
    }else if(this.sortOrder === "priceHighLow"){
      this.filteredProducts.sort((a,b) => b.price - a.price)
    }
  }


}
