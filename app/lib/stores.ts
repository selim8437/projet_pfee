'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { error } from 'console';
import { unstable_noStore as noStore } from 'next/cache';


export async function createStore(id:string ,name:string ,logo:string ,banner:string ,description:string,categoryId:string ,userId:string | null,verifUrl:string,verifState:string){
    try {
        await sql`
          INSERT INTO stores 
          VALUES (${id}, ${name}, ${logo}, ${banner},${description}, ${categoryId}, ${userId},${verifUrl},${verifState},' ')
        `;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        console.log(error)
      }
}

export async function updateStore(id:string ,name:string ,logo:string ,banner:string,description:string ,categoryId:string ,userId:string){
    try {
        await sql`
          UPDATE stores SET 
          name = ${name},logo= ${logo},banner= ${banner}, description=${description},categoryId=${categoryId},userId= ${userId}
          WHERE id=${id} ;
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
      return result; // Return the result of the query
  } catch (error) {
      // If a database error occurs, log the error and return a more specific error.
      console.error('Database Error: Failed to Get Store.', error);
      throw new Error('Failed to fetch store from the database.');
  }
}

export async function deleteStoreById(id:string){
    try {
        await sql`
          DELETE * FROM stores WHERE id= ${id} ;
        `;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
          message: 'Database Error: Failed to Delete Store.',
        };
      }
}