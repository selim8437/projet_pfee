import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { ClerkProvider } from '@clerk/nextjs';
import { dark, neobrutalism } from '@clerk/themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
    >
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
    </ClerkProvider>

  );
}
