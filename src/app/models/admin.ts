import { Order } from "./order"
import { Product } from "./product"
import { User } from "./user"

export interface Admin {
    name: string,
    email: string,
    password: string,
    productResponse: Product
    orderResponse: Order
    userResponse: User
}
