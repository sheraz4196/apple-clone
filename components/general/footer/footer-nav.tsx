import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FooterNav() {
  const discoverLinks = [
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV and Home",
    "Air Tag",
  ];
  return (
    <>
      <nav className="py-4 flex items-center gap-1">
        <Image src={"/assets/logo.png"} width={10} height={14} alt="logo" />
        <ChevronRight className="size-3" />
        <span>Mac</span>
      </nav>
      <nav className="grid grid-cols-4">
        <div>
          <div className="flex flex-col gap-2.5 text-xs">
            <h6 className="font-bold">Discover</h6>
            {discoverLinks.map((link, index) => (
              <Link
                key={index}
                href={"#"}
                className="hover:underline font-medium"
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2.5 text-xs pt-6">
            <h6 className="font-bold">Apple Wallet</h6>
            <Link href={"#"} className="hover:underline font-medium">
              Apple Pay
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
