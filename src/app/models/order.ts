import { Product } from "./product";
import { User } from "./user";

export interface Order {
    orderId: string,
    productId: Product,
    userId: User,
    userName:User,
    orderResponse:Order[];
    price: Product;
    unitInStock: Product;

}
