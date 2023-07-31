export interface Product {
    productId: string;
    productName: string;
    price: number;
    unitInStock: number;
    categoryResponse: Category;

}


export interface Category {
    categoryId: string;
    categoryName: string;


}

