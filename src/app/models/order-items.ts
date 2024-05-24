import { Products } from "./product";
import { Orders } from "./orders";


export class OrderItems {
    id!: number;
    quantity!: number;
    price!: number;
    orders!: Orders;
    products!: Products;
}