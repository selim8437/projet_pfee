import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex flex-col h-full px-3 py-4 md:px-2">
      <Link href="/" passHref>
        <div className="mb-2 flex items-end justify-start rounded-md bg-blue-600 p-4 md:h-40">
          <div className="w-32 text-white md:w-40">
            <AcmeLogo />
          </div>
        </div>
      </Link>
      <div className="flex flex-col flex-grow justify-between space-y-2 md:flex-grow-0 md:justify-start md:space-y-0">
        <NavLinks />
        <div className="hidden h-auto w-full rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex items-center justify-center gap-2 w-full h-[48px] rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:w-auto md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <span className="hidden md:block">Sign Out</span>
          </button>
        </form>
      </div>
    </div>
  );
}
