import { Products } from "./product";
import { User } from "./user";



export class Cart {
    id!: number;
    quantity!: number;
    price!: number;
    product!: Products;
    user!:User;
}