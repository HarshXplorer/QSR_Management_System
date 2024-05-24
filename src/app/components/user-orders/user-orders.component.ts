import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../../models/orders';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.css'
})
export class UserOrdersComponent {

  orders! : Orders[] ;
  uid=Number(localStorage.getItem('id'));

  constructor(private orderService:OrderService,private router:Router){}

  ngOnInit():void{
    this.getOrdersOfUser(this.uid);
  }

  getOrdersOfUser(id:number){
    this.orderService.getOrdersByUserId(id).subscribe(data => {
      this.orders = data;
    })
  }

  cancelOrder(id:number){
    this.orderService.cancelOrder(id).subscribe(data => {
      console.log(data);
      this.router.navigate(['/home']);
    })
  }
}
