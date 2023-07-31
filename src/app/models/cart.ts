import { Product } from "./product";
import { User } from "./user";

export interface Cart {
    addToCartId: string;
    cartResponse: cartResponse;
    productResponse: Product;

}

export interface cartResponse {
    cartId: string;


}
export interface Buys {
    buyId: string;
    localDateTime: string;
    customerResponse: User;
    cartResponse: cartResponse;
    productResponseList: Product[];
    total: number;


}

