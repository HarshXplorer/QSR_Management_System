import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../../models/orders';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{

  orders!: Orders[];

  constructor(private orderService:OrderService,private router:Router) {}

  ngOnInit(): void {
      this.orderService.getOrders().subscribe((data:Orders[]) => {
        this.orders = data;
      });
  }

  orderDetails(id:number){
    this.router.navigate(['orders',id]);
  }

  cancelOrder(id:number){
    this.orderService.cancelOrder(id).subscribe(data => {
      console.log(data);
      this.router.navigate(['/admin']);
    });
  }

}
