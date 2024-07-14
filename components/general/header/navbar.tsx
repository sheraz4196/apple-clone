import Link from "next/link";
import { NavLinks } from "@/constants/nav-links";
export default function Navbar() {
  return (
    <nav className="hidden lg:block">
      <ol className="flex gap-12">
        {NavLinks.map((link, index) => (
          <li key={index} className="text-xs">
            <Link href={"#"}>{link}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
