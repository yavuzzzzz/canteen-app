export interface User {
    id: string;
    email: string;
    firstName: String;
    lastName: String;
    walletResponse: WalletResponse;
    cartResponse: CartResponse;
    userResponse:User[];

}
export interface WalletResponse {

    walletId: String;
    balance: number;


}
export interface CartResponse {
    cartId: String;

}
export interface Token {

    token: String;
    customerResponse: User;


}
