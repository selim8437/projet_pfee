'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { error } from 'console';
import {User} from './user'
import { unstable_noStore as noStore } from 'next/cache';

export async function createUser(user:User ){
    try {
          sql`
          INSERT INTO users VALUES( 
          ${user.id} ,${user.storeid},${user.type},${user.email},${user.firstName},${user.lastName})
        `;
        console.log("wsellll cbn" , user)
        noStore() ;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        
          console.log( error ,'    Database Error: Failed to Create user.')
          noStore()
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