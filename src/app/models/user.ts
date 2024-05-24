import { Cart } from "./cart";
import { Orders } from "./orders";


export class User {
    id!: number;
    name!: string;
    mobileNo!: string;
    emailId!: string;
    password!: string;
    address!: string;
    city!: string;
    state!: string;
    pinCode!: number;
    addressType!: string;
    role!: string;
    
    // totalOrder!: number;

    // cart!: Cart[];
    // orders!: Orders[];
}