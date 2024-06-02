"use client" ;
import { DashboardLayoutAdmin } from "@/components/component/dashboard-layout-admin";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { getUserType } from "../lib/users";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState<string>('');

  const { user } = useUser();

  const getType = async () => {
    if (user?.id !==undefined && user?.id!==null) {
      const c:string = await getUserType(user.id);
      setType(c) ;
      setIsLoading(false) ;
    }else {
      console.log('user id is undefined')
    }
  }

  useEffect(() => {
    getType();
  }, [user]);

  if (isLoading) {
    return <div className="bg-gray-900 text-white">Loading...</div>; // Display a loading indicator while fetching user type
  }

  if (type !== 'A') {
    return <div className="bg-gray-900 text-white">You are not allowed</div>; // Display "You're not allowed" message if user type is not 'A'
  }

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] bg-gray-900">
      <div className="hidden border-r lg:block dark:bg-gray-900">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <DashboardLayoutAdmin />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
