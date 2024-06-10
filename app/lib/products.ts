'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { error } from 'console';
import { unstable_noStore as noStore } from 'next/cache';
import { Product } from './types/prduct';


export async function createProduct(product:Product){
  const formattedImagesString  = '{' + product.images.toString() + '}';
  
  try {
        await sql`
          INSERT INTO products 
          
          VALUES (${product.id}, ${product.title}, ${product.description}, ${product.price},${product.quantity}, ${product.specifications},${product.storeId},${formattedImagesString});
        `;
        console.log('Product added') ;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        console.log(error)
      }
}
export async function updateProduct(product: Product) {
  // Fill undefined slots with empty strings
 

  // Ensure exactly three elements in the array
  
  const formattedImagesString  = '{' + product.images.toString() + '}';
  
  try {
    await sql`
      UPDATE products SET 
      title = ${product.title},
      description = ${product.description},
      price = ${product.price},
      quantity = ${product.quantity},
      images= ${formattedImagesString} ,
      specifications = ${product.specifications},
      storid = ${product.storeId}
      WHERE id = ${product.id};`;

    console.log('Product updated', product.id);
   
  } catch (error) {
    console.log(error);
  }
}



export async function getProducts(id:string){
   noStore();
    try {
        const result= await sql`
          SELECT p.* FROM products p,stores s,users u WHERE s.id=u.storeid AND s.id=p.storid AND u.id=${id} ;
        `;
        const products: Product[] = result.rows.map(row => ({
            id: row.id,
            title: row.title,
            description: row.description,
            price: row.price,
            quantity: row.quantity,
            images: row.images,
            specifications: row.specifications,
            storeId: row.storid
        }));
        console.log('products fetched')
        return products ;
    } catch (error) {
        // If a database error occurs, return a more specific error.
        console.log(error)
      }
}
export async function getProductsBuyer(id:string){
  noStore();
   try {
       const result= await sql`
         SELECT p.* FROM products p,stores s WHERE s.id=${id} ;
       `;
       const products: Product[] = result.rows.map(row => ({
           id: row.id,
           title: row.title,
           description: row.description,
           price: row.price,
           quantity: row.quantity,
           images: row.images,
           specifications: row.specifications,
           storeId: row.storid
       }));
       console.log('products fetched')
       return products ;
   } catch (error) {
       // If a database error occurs, return a more specific error.
       console.log(error)
     }
}
export async function getAllProducts(){
  noStore();
   try {
       const result= await sql`
         SELECT * FROM products  ;
       `;
       const products: Product[] = result.rows.map(row => ({
           id: row.id,
           title: row.title,
           description: row.description,
           price: row.price,
           quantity: row.quantity,
           images: row.images,
           specifications: row.specifications,
           storeId: row.storid
       }));
       console.log('products fetched')
       return products ;
   } catch (error) {
       // If a database error occurs, return a more specific error.
       console.log(error)
     }
}
export async function deleteProductById(id:string){
    try {
        await sql`
          DELETE FROM products WHERE id=${id} ;
        `;
        console.log('Product deleted') ;

      } catch (error) {
        // If a database error occurs, return a more specific error.
        console.log(error)
      }
}