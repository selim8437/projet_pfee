import '@/app/globals.css';
import { inter } from '@/app/ui/fonts';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";

import { ClerkProvider } from '@clerk/nextjs';
import React from 'react';
import { cn } from '@/lib/utils';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
    >
    <html lang="en">
    <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
    <body className={`${inter.variable} antialiased`}>{children}</body>
      
    </html>
    </ClerkProvider>

  );
}
