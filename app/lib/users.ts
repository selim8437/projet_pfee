'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { error } from 'console';
import {User} from './types/user'
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
export async function updateUser(user:User ){
  try {
        sql`
        UPDATE users SET storeid=${user.storeid},type=${user.type},email=${user.email},firstname=${user.firstName},lastname${user.lastName} WHERE id=${user.id}`;
      console.log("wsellll cbn" , user)
      noStore() ;
      
    } catch (error) {
      // If a database error occurs, return a more specific error.
      
        console.log( error ,'    Database Error: Failed to Create user.')
        noStore()
    }
    
}
export async function setType(type:string,id:string) {
  try {
    sql`
    UPDATE users SET type= 
    ${type} WHERE id=${id}
  `;
  console.log("wsellll cbn" , type)
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
        const result=await sql`
          SELECT * FROM users WHERE id= ${id} ;
         
        `
        const row=result.rows[0] ;
        const user: User ={
          id: row.id,
          lastName: row.lastname,
          firstName: row.firstname,
          email: row.email,
          storeid: row.storeid,
          type: row.type
         
        };
        return user ;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        console.log('eroorro in getting user from database')
      }
}
export async function getAllUsers(){
  noStore();
  try {
      const result= await sql`
        SELECT * FROM users  ;
      `;
      const users: User[] = result.rows.map(row => ({
          id: row.id,
          lastName: row.lastname,
          firstName: row.firstname,
          email: row.email,
          storeid: row.storeid,
          type: row.type
         
      }));
      console.log('users fetched')
      return users ;
  } catch (error) {
      // If a database error occurs, return a more specific error.
      console.log(error)
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