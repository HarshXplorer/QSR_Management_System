import { User } from "./user";
import { OrderItems } from "./order-items";



export class Orders {
    id!: number;
    orderDate!: Date;
    totalQuantity!: number;
    totalPrice!: number;
    status!: string;
    user!: User;
    orderItems!: OrderItems[];
}