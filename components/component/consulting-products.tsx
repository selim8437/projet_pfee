/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/Gbn0UvTVEwD
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Rethink_Sans } from 'next/font/google'

rethink_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import { EditButton } from "./edit-button";

import { JSX, SVGProps, useEffect, useRef, useState } from "react";
import { Product } from "@/app/lib/types/prduct";
import { deleteProductById, getProducts } from "@/app/lib/products";
import DashboardSkeleton from "@/app/ui/skeletons";
import { Cproduct } from "./cproduct";
import { useUser } from "@clerk/nextjs";

export function ConsultingProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  const  { user } = useUser();
  
  const userId = user?.id; 
  
  const fetchProducts = async () => {
    try {
      console.log('waiting for you')
      console.log(userId);

      if(user?.id){
        console.log('waiting for you baby')

      const fetchedProducts = await getProducts(user.id);
      if (fetchedProducts) {
        setProducts(fetchedProducts);

        console.log('aaaaa',products)

      }
      }
      
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    fetchProducts();
    console.log('waiting')
  }, [user]);

  const deleteProduct = async (productId: string) => {
    try {
      await deleteProductById(productId);
      await fetchProducts(); // Update product list after deleting
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  const updateProductsAfterEdit = async () => {
    await fetchProducts(); 
    // Update product list after editing
  };
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  
 
const filteredProducts= products.filter((product) =>
  product.title.toLowerCase().startsWith(searchQuery.toLowerCase())
);
  return (
    <>
      {isLoading ? (
        <div><DashboardSkeleton /></div>
      ) : (
        <div >
         <div className="grid gap-6 md:gap-8">
      <div className="flex justify-center items-center ">
  <div className="w-full max-w-screen-lg">
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <SearchIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
      </div>
      <Input
        className="w-full rounded-md bg-white px-8 py-2 pl-8 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-gray-900 dark:bg-gray-800 dark:text-black-50 dark:focus:ring-gray-300"
        placeholder="Search Products..."
        type="search"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
    </div>
  </div>
</div>
</div>
          <div className="mx-auto px-8 py-16">
      <div className=" bg-white rounded-lg shadow-md overflow-hidden">
      <Table className=" w-full table-auto">
        <div className="h-128">
            <TableHeader className="bg-gray-100 text-gray-600 font-medium">
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Specifications</TableHead>
                <TableHead></TableHead>

              </TableRow>
            </TableHeader>
              
               <TableBody className="divide-y divide-gray-200">
  {filteredProducts.map((product, index) => (
    <TableRow key={index}>
      <TableCell>
        {product.images.map((image, i) => (
          <img
            key={i}
            alt="Product Image"
            className="aspect-square object-cover"
            height={100}
            src={image}
            width={100}
          />
        ))}
      </TableCell>
      <TableCell className="font-medium">{product.title}</TableCell>
      <TableCell>{product.description}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>{product.quantity}</TableCell>
      <TableCell>{product.specifications}</TableCell>
      <TableCell>
        <div className="flex gap-2">
          <EditButton product={product} onProductUpdate={updateProductsAfterEdit}/>
          <Button onClick={() => deleteProduct(product.id)} size="sm" variant="destructive">
            <TrashIcon className="h-4 w-4" />
            Delete
          </Button>
        </div>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

</div>
          </Table>
          </div>
          </div>
          <div>
            <Cproduct />
          </div>
        </div>
      )}
    </>
  );
}


function FileEditIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  )
}


function FilterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function ListOrderedIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function TrashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
function handleDelit() {
  throw new Error("Function not implemented.");
}

