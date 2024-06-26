/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/qi2e4RvZ1bK
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
import { JSX, SVGProps } from "react"

export function SuccessPayment({id}:{id:string}) {
  return (
    <div className=" bg-gray-850 flex flex-col items-center justify-center min-h-[100dvh] dark:bg-gray-950 px-4 md:px-6">
      <div className="max-w-md w-full space-y-6">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 flex flex-col items-center">
          <div className="bg-green-500 dark:bg-green-600 rounded-full p-4">
            <CheckIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mt-6">Payment Successful</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-center">
            Thank you for your purchase! Your order will be shipped within 2-3 business days. You can view the order
            details
            <Link className="text-blue-600 underline" href={"/shop/orders/"+id}>
              here
            </Link>
            .{"\n                "}
          </p>
        </div>
      </div>
    </div>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
