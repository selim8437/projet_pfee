"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Store } from "@/app/lib/types/store";
import { getAllStores } from "@/app/lib/stores";
import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { ProfileLogo } from "./profile-logo";

export function ShopsPick() {
  const [shops, setShops] = useState<Store[]>([]);
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  const fetchShops = async () => {
    try {
      const fetchedShops = await getAllStores();
      if (fetchedShops) {
        setShops(fetchedShops);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchShops();
  }, []);

  // Function to handle the search input change
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter the shops based on the search query
  const filteredShops = shops.filter((shop) =>
    shop.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <main className="bg-gray-900 w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <div className="grid gap-6 md:gap-8">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-screen-lg">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <SearchIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>
              <Input
                className="w-full rounded-md bg-white px-8 py-2 pl-8 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-gray-900 dark:bg-gray-800 dark:text-black-50 dark:focus:ring-gray-300"
                placeholder="Search Shops..."
                type="search"
                value={searchQuery} // Bind the search query state to the input value
                onChange={handleSearchInputChange} // Handle the input change
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredShops.slice(0, 20).map((shop, index) => (
            <div key={index} className="text-center relative">
              <Link href={`/shop/products/${shop.id}`}>
                <div className="relative">
                  <ProfileLogo url={shop.logo} />
                </div>
              </Link>
              <Link href={`/shop/products/${shop.id}`}>
                <Button className="mt-6 bg-gray-900">{shop.name}</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
