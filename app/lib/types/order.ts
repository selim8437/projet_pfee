export interface Order{
    id:string ;
    status:string ;
    shippingMethod:string ;
    buyerId:string ;
    sellerId:string ;
    adress:string ;
    phone:string ;
    totalPrice:number ;
    region:string ;
    date:string ;
    paymentMethod:string ;
}
export interface OrderProducts{
    orderId:string;
    productId:string ;
    quantity:string ;
    

}