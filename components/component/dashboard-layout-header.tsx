"use client";
import Link from "next/link";
import { MountainIcon } from "./dashboard-layout";
import {  SearchIcon } from "./layout-test";
import { Input } from "../ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { UserButton } from "@clerk/nextjs";

export function DashboardLayoutHeader(){
    return(
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-900 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
              <div className="relative w-full flex">
               
              </div>
          </div>
          <UserButton/>
        </header>
    )
}




