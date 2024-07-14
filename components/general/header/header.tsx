import { NavLinks } from "@/constants/nav-links";
import { Equal, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="px-6 py-4 max-w-screen-lg w-full mx-auto flex items-center justify-between">
      <Image src={"/assets/logo.png"} width={12} height={36} alt="Apple Logo" />
      <Navbar />
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
  );
}
