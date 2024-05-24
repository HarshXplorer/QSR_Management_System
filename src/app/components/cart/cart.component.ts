import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/cart';
import { Orders } from '../../models/orders';
import { CartService } from '../../service/cart.service';
import { OrderService } from '../../service/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts!: Cart[];
  order: Orders = new Orders();
  uid = Number(localStorage.getItem('id'));

  constructor(private cartService: CartService, private orderService: OrderService, private router: Router, private snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.getCartsOfUser(this.uid);
  }

  getCartsOfUser(id:number){
    this.cartService.getCartsByUserId(id).subscribe(data =>{
      this.carts = data
    } );
    }


    removeCart(id:number){
      this.cartService.removeCart(id).subscribe(data => {
        // alert('Cart Deleted Successfully');
        this.snackBar.open('Cart Deleted Successfully', 'Dismiss', {
          duration: 4000
        });
        this.getCartsOfUser(this.uid); // Refresh the cart
      });
    }
    
    placeOrder() {
      // Get the cart for the user
      this.cartService.getCartsByUserId(this.uid).subscribe(cart => {
        // Check if the cart is empty
        if(cart && cart.length > 0){
          this.orderService.createOrder(this.uid).subscribe(data => {
            console.log(data);
            // alert("Your order is successfully placed");
            this.snackBar.open('Your order is successfully placed', 'Dismiss', {
              duration: 4000
            });
            // Clear the cart
            this.carts = [];
    
            // Navigate to the orders page
            this.router.navigate(['/user/orders']);
          });
        } else {
          // alert("Your cart is empty. Please add items to your cart before placing an order.");
          this.snackBar.open('Your cart is empty. Please add items to your cart before placing an order.', 'Dismiss', {
            duration: 4000
          });
        }
      });
    }
    

  }


  
