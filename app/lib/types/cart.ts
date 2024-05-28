export interface Cart{
    totalPrice:number ;
    region:string;
    shippingMethod:string;
    adress:string;
    phone:string;
    buyerId:string;
    sellerId:string;
    paymentMethod:string ;
    productsIds:string[];
}