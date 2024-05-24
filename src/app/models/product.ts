import { Cart } from "./cart";
import { OrderItems } from "./order-items";


export class Products {
    id!: number;
    name!: string;
    description!: string;
    category!: string;
    price!: number;
    stockAvailable!: number;
    imgUrl!:string;

    cart: Cart[] = [];
    orderItems: OrderItems[] = [];
}

