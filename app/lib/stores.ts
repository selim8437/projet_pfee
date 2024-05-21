'use server';
import { sql } from '@vercel/postgres';

import { unstable_noStore as noStore } from 'next/cache';
import { Store } from './types/store';


export async function createStore(store:Store){
    try {
        await sql`
          INSERT INTO stores 
          VALUES (${store.id}, ${store.name}, ${store.logo}, ${store.banner},${store.description}, ${store.categoryId}, ${store.userId},${store.verifUrl},${store.verifState},${store.shippingOptions,store.returnPolicies})
        `;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        console.log(error)
      }
}

export async function updateStore(store:Store){
    try {
        await sql`
          UPDATE stores SET 
          name = ${store.name},logo= ${store.logo},banner= ${store.banner}, description=${store.description},categoryId=${store.categoryId},userId= ${store.userId}
          WHERE id=${store.id} ;
        `;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
          message: 'Database Error: Failed to Update Store.',
        };
      }
}
export async function createCategory(category:string ){
  try {
      await sql`
        INSERT INTO categories values(${category},${category})
      `;
    } catch (error) {
      // If a database error occurs, return a more specific error.
      return {
        message: 'Database Error: Failed to Create Category.',
      };
    }
}
export async function updateStoreWithCategory(userId: string,storeName: string, logoUrl: string, bannerUrl: string, storeDescription: string, storeCategory: string, shippingOption: string, returnPolicy: string) {
  try {
      // First, create the category
      const category = await createCategory( storeCategory);

      // Once the category is created, update the store
      await updateStore2(userId, storeName, logoUrl, bannerUrl, storeDescription, storeCategory, shippingOption, returnPolicy);
      
      // Optionally, return something indicating success
      return 'Store updated successfully with category';
  } catch (error) {
      // Handle errors here
      console.error('Error updating store:', error);
      throw error; // rethrow the error to be handled by the caller if needed
  }
}

export async function verifyStore(id:string,decision:string ){
  try {
      await sql`
        UPDATE stores SET 
        verifstate = ${decision}
        WHERE id=${id} ;
      `;
    } catch (error) {
      // If a database error occurs, return a more specific error.
      return {
        message: 'Database Error: Failed to Verify Store.',
      };
    }
}
export async function updateStore2(id:string ,name:string ,logo:string ,banner:string ,description:string,categoryId:string ,shippingOptions:string,returnPolicy:string){
  try {
      await sql`
        UPDATE stores SET
        name = ${name},logo= ${logo},banner= ${banner},description=${description},categoryId=${categoryId},
        shipping_options=${shippingOptions},return_policies=${returnPolicy}
        WHERE id=${id}
      `;
    } catch (error) {
      // If a database error occurs, return a more specific error.
      return {
        message: 'Database Error: Failed to Update Store.',
      };
    }
}

export async function getStoreByid(id: string) {
  noStore();
  try {
      const result = await sql`SELECT * FROM stores WHERE id = ${id}`;
      const result1=result.rows[0]
      const shop :Store={
      id:result1.id,
      name: result1.name,
      logo:result1.logo,
      banner:result1.banner,
      description: result1.description,
      categoryId:result1.categoryid,
      userId:result1.userid,
      verifUrl:result1.verifurl,
      verifState:result1.verifstate,
      shippingOptions: result1.shipping_options,
      returnPolicies:result1.return_policies }
      return shop; // Return the result of the query
  } catch (error) {
      // If a database error occurs, log the error and return a more specific error.
      console.error('Database Error: Failed to Get Store.', error);
      throw new Error('Failed to fetch store from the database.');
  }
}
export async function getAllStores(){
  noStore();
  try{
    const result = await sql`SELECT * FROM stores`;
    const shops: Store[] = result.rows.map(row => ({
      id: row.id,
      name: row.name,
      logo:row.logo,
      banner:row.banner,
      description: row.description,
      categoryId:row.categoryid,
      userId:row.userid,
      verifUrl:row.verifurl,
      verifState:row.verifstate,
      shippingOptions: row.shipping_options,
      returnPolicies:row.return_policies
  }));
    return shops ;
  }
  catch (error) {
    // If a database error occurs, log the error and return a more specific error.
    console.error('Database Error: Failed to Get Store.', error);
    throw new Error('Failed to fetch store from the database.');
}
}

export async function deleteStoreById(id:string){
    try {
        await sql`
          DELETE FROM stores WHERE id= ${id} ;
        `;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
          message: 'Database Error: Failed to Delete Store.',
        };
      }
}