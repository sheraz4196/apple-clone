"use client";
import { NavLinks } from "@/constants/nav-links";
import { Equal, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Sidebar from "./sidebar";
import { useState } from "react";
import Shutter from "../tabs-details/shutter";
import Content from "../tabs-details/content";

export default function Header() {
  const [shutterOpen, setShutterOpen] = useState(false);
  const [dropDown, setDropDown] = useState<string>();
  return (
    <div onMouseLeave={() => setShutterOpen(false)}>
      <header className="px-6 py-4 max-w-screen-lg w-full mx-auto flex items-center justify-between z-[200]">
        <Image
          src={"/assets/logo.png"}
          width={12}
          height={36}
          alt="Apple Logo"
        />
        <nav className="hidden lg:block">
          <ol className="flex gap-12">
            {NavLinks.map((link, index) => (
              <li
                key={index}
                className="text-xs"
                onMouseEnter={() => setShutterOpen(true)}
              >
                <Link href={"#"} onMouseOver={() => setDropDown(link.slug)}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <div className="flex items-center gap-4">
          <Search className="size-4" />
          <Drawer direction="top">
            <DrawerTrigger className="lg:hidden">
              <Equal />
            </DrawerTrigger>
            <DrawerContent className="top-0 mt-0 rounded-none overflow-auto">
              <DrawerClose className="absolute top-3 right-1">
                <X />
              </DrawerClose>
              <Sidebar />
            </DrawerContent>
          </Drawer>
        </div>
      </header>
      <Shutter isOpen={shutterOpen}>
        <Content content={dropDown as string} />
      </Shutter>
    </div>
  );
}
