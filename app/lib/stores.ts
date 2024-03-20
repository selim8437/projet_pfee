'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { error } from 'console';

export async function createStore(id:string ,name:string ,logo:string ,banner:string ,categoryId:string ,userId:string){
    try {
        await sql`
          INSERT INTO stores 
          VALUES (${id}, ${name}, ${logo}, ${banner}, ${categoryId}, ${userId})
        `;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
          message: 'Database Error: Failed to Create Store.',
        };
      }
}

export async function updateStore(id:string ,name:string ,logo:string ,banner:string ,categoryId:string ,userId:string){
    try {
        await sql`
          UPDATE stores SET 
          name = ${name},logo= ${logo},banner= ${banner}, categoryId=${categoryId},userId= ${userId})
        `;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
          message: 'Database Error: Failed to Update Store.',
        };
      }
}

export async function getStoreByid(id:string ){
    try {
        await sql`
          SELECT * FROM stores WHERE id= ${id} ;
         
        `;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
          message: 'Database Error: Failed to Get Store.',
        };
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