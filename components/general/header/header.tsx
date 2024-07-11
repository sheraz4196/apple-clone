import { NavLinks } from "@/constants/nav-links";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-6 py-4 max-w-screen-lg w-full mx-auto flex items-center justify-between">
      <Image src={"/assets/logo.png"} width={12} height={36} alt="Apple Logo" />
      <nav className="hidden lg:block">
        <ol className="flex gap-12">
          {NavLinks.map((link, index) => (
            <li key={index} className="text-xs">
              <Link href={"#"}>{link}</Link>
            </li>
          ))}
        </ol>
      </nav>
      <Search className="size-4" />
    </header>
  );
}
