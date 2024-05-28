'use client';

import {
  UserGroupIcon,
  HomeIcon,
  ArchiveBoxIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useEffect } from 'react';

const links = [
  { name: 'Store profile', href: '/dashboard/content/', icon: HomeIcon },
  { name: 'Products', href: '/dashboard/content/products/', icon: ArchiveBoxIcon },
  { name: 'Orders', href: '/dashboard/content/orders/', icon: ShoppingCartIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <div>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center no-underline text-lg font-bold justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-gray-900 text-white': !isActive,
                'bg-teal-500 text-white': isActive,
                'hover:bg-teal-500 hover:text-white': !isActive,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
