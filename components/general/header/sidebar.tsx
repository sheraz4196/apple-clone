import { NavLinks } from "@/constants/nav-links";
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="pl-9 pt-8">
      <ol>
        {NavLinks.map((link, index) => (
          <li key={index} className="text-2xl">
            <Link href={"#"}>{link.title}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
