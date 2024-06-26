/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/t6FjpAK9OCR
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export function Product() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link className="ml-auto" href="#">
          <Button size="sm">Create Product</Button>
        </Link>
      </div>
      <div className="border rounded-lg w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Product</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="w-[120px]">Price</TableHead>
              <TableHead className="w-[100px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:shadow-md">
              <TableCell className="font-semibold">Glimmer Lamps</TableCell>
              <TableCell className="text-sm">
                Beautifully designed lamps that add a touch of elegance to your home
              </TableCell>
              <TableCell>$49.99</TableCell>
              <TableCell className="flex justify-end gap-2">
                <Link className="flex items-center gap-2 text-sm underline" href="#">
                  Edit
                </Link>
                <Link className="flex items-center gap-2 text-sm underline" href="#">
                  Delete
                </Link>
              </TableCell>
            </TableRow>
            <TableRow className="hover:shadow-md">
              <TableCell className="font-semibold">Aqua Filters</TableCell>
              <TableCell className="text-sm">
                Advanced water filters that provide clean and refreshing drinking water
              </TableCell>
              <TableCell>$29.99</TableCell>
              <TableCell className="flex justify-end gap-2">
                <Link className="flex items-center gap-2 text-sm underline" href="#">
                  Edit
                </Link>
                <Link className="flex items-center gap-2 text-sm underline" href="#">
                  Delete
                </Link>
              </TableCell>
            </TableRow>
            <TableRow className="hover:shadow-md">
              <TableCell className="font-semibold">Eco Planters</TableCell>
              <TableCell className="text-sm">
                Stylish and eco-friendly planters for your indoor and outdoor greenery
              </TableCell>
              <TableCell>$19.99</TableCell>
              <TableCell className="flex justify-end gap-2">
                <Link className="flex items-center gap-2 text-sm underline" href="#">
                  Edit
                </Link>
                <Link className="flex items-center gap-2 text-sm underline" href="#">
                  Delete
                </Link>
              </TableCell>
            </TableRow>
            <TableRow className="hover:shadow-md">
              <TableCell className="font-semibold">Zest Juicers</TableCell>
              <TableCell className="text-sm">
                High-performance juicers that extract every drop of goodness from fruits and vegetables
              </TableCell>
              <TableCell>$39.99</TableCell>
              <TableCell className="flex justify-end gap-2">
                <Link className="flex items-center gap-2 text-sm underline" href="#">
                  Edit
                </Link>
                <Link className="flex items-center gap-2 text-sm underline" href="#">
                  Delete
                </Link>
              </TableCell>
            </TableRow>
            <TableRow className="hover:shadow-md">
              <TableCell className="font-semibold">Flexi Wearables</TableCell>
              <TableCell className="text-sm">
                Sleek and comfortable wearables that track your fitness and health metrics
              </TableCell>
              <TableCell>$79.99</TableCell>
              <TableCell className="flex justify-end gap-2">
                <Link className="flex items-center gap-2 text-sm underline" href="#">
                  Edit
                </Link>
                <Link className="flex items-center gap-2 text-sm underline" href="#">
                  Delete
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
