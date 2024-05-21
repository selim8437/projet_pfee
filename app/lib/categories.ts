'use server';
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Category } from './types/category';


export async function createCategory(cat:Category){
    try {
        await sql`
          INSERT INTO categories 
          VALUES (${cat.id}, ${cat.categoryname})
        `;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        console.log(error)
      }
}

export async function updateCategory(category:Category){
    try {
        await sql`
          UPDATE categories SET 
          categoryname = ${category.categoryname}
          WHERE id=${category.id} ;
        `;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
          message: 'Database Error: Failed to Update category.',
        };
      }
}






export async function getCategoryByid(id: string) {
  noStore();
  try {
      const result = await sql`SELECT * FROM categories WHERE id = ${id}`;
      const result1=result.rows[0]
      const categ :Category={
      id:result1.id,
      categoryname: result1.categoryname,
      }
      return categ; // Return the result of the query
  } catch (error) {
      // If a database error occurs, log the error and return a more specific error.
      console.error('Database Error: Failed to Get Category.', error);
      throw new Error('Failed to fetch category from the database.');
  }
}
export async function getAllCategories(){
  noStore();
  try{
    const result = await sql`SELECT * FROM categories`;
    const categs: Category[] = result.rows.map(row => ({
      id: row.id,
      categoryname: row.categoryname,
      
  }));
    return categs ;
  }
  catch (error) {
    // If a database error occurs, log the error and return a more specific error.
    console.error('Database Error: Failed to Get categories.', error);
    throw new Error('Failed to fetch categories from the database.');
}
}

export async function deleteCategById(id:string){
    try {
        await sql`
          DELETE FROM categories WHERE id= ${id} ;
        `;
      } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
          message: 'Database Error: Failed to Delete category.',
        };
      }
}