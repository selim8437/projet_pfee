'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { error } from 'console';

export async function createStore(id:string ,storeId:string ,type:string ,email:string ){
    try {
        await sql`
          INSERT INTO users VALUES( 
          ${id} ,${storeId},${type},${email})
        `;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
          message: 'Database Error: Failed to Create user.',
        };
      }
}

export async function updateStore(id:string ,storeId:string ,type:string ,email:string ){
    try {
        await sql`
          UPDATE users SET 
          storeId = ${storeId},type= ${type},email= ${email} WHERE id=${id}
        `;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
          message: 'Database Error: Failed to Update User.',
        };
      }
}

export async function getUserByid(id:string ){
    try {
        await sql`
          SELECT * FROM users WHERE id= ${id} ;
         
        `;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
          message: 'Database Error: Failed to get User.',
        };
      }
}

export async function deleteUserById(id:string){
    try {
        await sql`
          DELETE * FROM users WHERE id= ${id} ;
        `;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
          message: 'Database Error: Failed to Delete User.',
        };
      }
}