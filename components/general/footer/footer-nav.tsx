import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function FooterNav() {
  return (
    <>
      <nav className="py-4 flex items-center gap-1">
        <Image src={"/assets/logo.png"} width={10} height={14} alt="logo" />
        <ChevronRight className="size-3" />
        <span>Mac</span>
      </nav>
    </>
  );
}
