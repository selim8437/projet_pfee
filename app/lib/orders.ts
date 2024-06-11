"use server";
import { sql } from "@vercel/postgres";
import { Cart } from "./types/cart";
import { v4 as uuidv4 } from 'uuid';
import { getCurrentDateTimeString } from "./actions";
import { Order, OrderProducts } from "./types/order";
import { getUserName } from "./users";
export async function createOrder(cart:Cart,uniqueId:string){

    try{
        const currentDateTimeString = await getCurrentDateTimeString();
        
        await sql`INSERT INTO orders (id, shippingmethod, buyerid,sellerid,region,address,phone,totalprice,date,paymentmethod)
        VALUES (${uniqueId}, ${cart.shippingMethod}, ${cart.buyerId},${cart.sellerId},${cart.region},${cart.adress},${cart.phone},${cart.totalPrice},${currentDateTimeString},${cart.paymentMethod});
        
       `
       createOrderProduct(uniqueId,cart.productsIds) ;
       console.log('order created');
       
    }catch(error){
        console.log(error);
    }
}
export async function payOrder(orderId:string){
    try{
        
        await sql`UPDATE orders SET status='paid' WHERE id=${orderId}
       `
       console.log('order payed');
       
    }catch(error){
        console.log(error);
    }

}
export async function rejectOrder(orderId:string){
    try{
        
        await sql`UPDATE orders SET status='rejected' WHERE id=${orderId}
       `
       console.log('order payed');
       
    }catch(error){
        console.log(error);
    }

}
export async function acceptOrder(orderId:string){
    try{
        
        await sql`UPDATE orders SET status='accepted' WHERE id=${orderId}
       `
       console.log('order payed');
       
    }catch(error){
        console.log(error);
    }

}
export async function createPayment(paymentref:string,orderId:string,amount:number ,status:string){
    try{
        
        await sql`INSERT INTO payments values(${paymentref},${orderId},${amount},${status})
        
       `
       console.log('payment created');
       
    }catch(error){
        console.log(error);
    }

}
export async function getOrderById(id: string): Promise<Order | null> {
    try {
      const result = await sql`SELECT * FROM orders WHERE id = ${id};`;
  
      if (result.rows.length === 0) {
        console.log(`No order found with ID: ${id}`);
        return null;
      }
  
      const result1 = result.rows[0];
      const username:string= await getUserName(result1.buyerid) ;
      
      const order: Order = {
        id: result1.id,
        status: result1.status,
        shippingMethod: result1.shippingmethod,
        buyerId: username,
        sellerId: result1.sellerid,
        adress: result1.address,
        phone: result1.phone,
        totalPrice: result1.totalprice,
        region: result1.region,
        date: result1.date,
        paymentMethod: result1.paymentmethod,
      };
  
      console.log('Order fetched:', order);
      return order;
    } catch (error) {
      console.error('Error fetching order:', error);
      return null;
    }
  }
  export async function getOrdersBySellerId(id :string) {
    try {
        const result = await sql`SELECT * FROM orders WHERE sellerid=${id};`;

        const orders = await Promise.all(result.rows.map(async (row) => ({
            id: row.id,
            status: row.status,
            shippingMethod: row.shippingmethod,
            buyerId: await getUserName(row.buyerid),
            sellerId: row.sellerid,
            adress: row.address,
            phone: row.phone,
            totalPrice: row.totalprice,
            region: row.region,
            date: row.date,
            paymentMethod: row.paymentmethod,
        })));

        console.log('orders fetched');

        return orders;
    } catch (error) {
        console.log(error);
    }
}

export async function getOrdersByClientId(id :string) {
    try {
        const result = await sql`SELECT * FROM orders WHERE buyerid=${id};`;

        const orders = await Promise.all(result.rows.map(async (row) => ({
            id: row.id,
            status: row.status,
            shippingMethod: row.shippingmethod,
            buyerId: await getUserName(row.buyerid),
            sellerId: row.sellerid,
            adress: row.address,
            phone: row.phone,
            totalPrice: row.totalprice,
            region: row.region,
            date: row.date,
            paymentMethod: row.paymentmethod,
        })));

        console.log('orders fetched');

        return orders;
    } catch (error) {
        console.log(error);
    }
}
export async function getOrdersProductBySellerId(id:string){

    try{

        const result =await sql`SELECT o.* FROM order_products o , orders op WHERE o.order_id=op.id and op.sellerid=${id}  ;
        
       `
       const orders :OrderProducts[]=result.rows.map(row => ({
        orderId: row.order_id,
        productId:row.product_id,
        quantity:row.quantity,
        
    }));
    console.log('orders fetched');

    return orders ;
    }catch(error){
        console.log(error);
    }
}
export async function getOrderProducts(id:string){

    try{

        const result =await sql`SELECT * FROM order_products WHERE order_id = ${id}  ;
        
       `
       const orders :OrderProducts[]=result.rows.map(row => ({
        orderId: row.order_id,
        productId:row.product_id,
        quantity:row.quantity,
        
    }));
    console.log('orders fetched');

    return orders ;
    }catch(error){
        console.log(error);
    }
}
async function createOrderProduct(id: string, products: string[]) {
    try {
        const productQuantities: Record<string, number> = products.reduce((acc, productId) => {
            if (!acc[productId]) {
                acc[productId] = 0;
            }
            acc[productId]++;
            return acc;
        }, {} as Record<string, number>);

        // Step 2: Create an array of unique product IDs with their corresponding quantities
        const productEntries = Object.entries(productQuantities);

        // Step 3: Insert the products into the order_products table
        await Promise.all(productEntries.map(async ([productId, quantity]) => {
            await sql`
                INSERT INTO order_products (order_id, product_id, quantity)
                VALUES (${id}, ${productId}, ${quantity});`;
        }));
        console.log('order created2');

    } catch (error) {
        // Handle error
        console.error("Error creating order products:", error);
    }
}
