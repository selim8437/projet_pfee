/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/xDEDIJDFuRZ
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"

export function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-900 text-white px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Multivendor</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 no-underline  text-white" href="/signup">
            Login
          </Link>
          
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover the Best Products from Top Vendors
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Browse a wide selection of high-quality products from trusted vendors in our multivendor
                    marketplace.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 no-underline items-center justify-center rounded-md bg-white text-gray-900 px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Explore Products
                  </Link>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/image111.jpg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Vendors</h2>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Discover the best products from our top-rated vendors.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <img
            alt="Vendor Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            height="70"
            src="/placeholder.svg"
            width="140"
          />
          <div className="space-y-1 text-center">
            <h3 className="text-xl font-bold">Vendor Name</h3>
            <p className="text-gray-500 dark:text-gray-400">Offering a wide range of high-quality products.</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <img
            alt="Vendor Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            height="70"
            src="/placeholder.svg"
            width="140"
          />
          <div className="space-y-1 text-center">
            <h3 className="text-xl font-bold">Vendor Name</h3>
            <p className="text-gray-500 dark:text-gray-400">Offering a wide range of high-quality products.</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <img
            alt="Vendor Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            height="70"
            src="/placeholder.svg"
            width="140"
          />
          <div className="space-y-1 text-center">
            <h3 className="text-xl font-bold">Vendor Name</h3>
            <p className="text-gray-500 dark:text-gray-400">Offering a wide range of high-quality products.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Popular Product Categories</h2>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Browse our top product categories and discover the best items for your needs.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
        <Link
          className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-4 text-gray-900 transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800"
          href="#"
        >
          <ShirtIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
          <span className="text-sm font-medium">Clothing</span>
        </Link>
        <Link
          className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-4 text-gray-900 transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800"
          href="#"
        >
          <LaptopIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
          <span className="text-sm font-medium">Electronics</span>
        </Link>
        <Link
          className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-4 text-gray-900 transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800"
          href="#"
        >
          <HomeIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
          <span className="text-sm font-medium">Home & Garden</span>
        </Link>
        <Link
          className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-4 text-gray-900 transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800"
          href="#"
        >
          <TruckIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
          <span className="text-sm font-medium">Automotive</span>
        </Link>
      </div>
    </div>
  </div>
</section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-gray-900 text-white">
        <p className="text-xs">© 2024 Acme Multivendor. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            About Us
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LaptopIcon(props) {
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
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  )
}


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function ShirtIcon(props) {
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
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
}


function TruckIcon(props) {
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
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}
