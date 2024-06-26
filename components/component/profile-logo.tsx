/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/l3xwIlvDfIY
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function ProfileLogo(props: { url: string }) {
  return (
    <div className="flex items-center justify-center w-full max-w-md p-6 rounded-md gap-6">

      <div className="relative w-32 h-32 rounded-full overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#9333EA] flex justify-center items-center">
        <img
          alt="Profile Image"
          className="absolute inset-0 w-full h-full object-cover"
          height={60}
          src={props.url}
          
          width={40}
        />
        </div>
      </div></div>
      
  )
}
