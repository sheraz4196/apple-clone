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
  const accountLinks = ["Manage Your Apple ID", "iCloud.com"];
  const entertainmentLinks = [
    "Apple One",
    "Apple TV+",
    "Apple Music",
    "Apple Arcade",
    "Apple Fitness+",
    "Apple Podcasts",
    "Apple Books",
    "App Store",
  ];
  const educationLinks = ["Apple and Education", "Buying For School Education"];
  const valuesLinks = ["Accessibility", "Education", "Environment", "Privacy"];
  const aboutLinks = [
    "Newsroom",
    "Apple executives",
    "Job Opportunities",
    "Investors",
    "Ethics and policy compliance",
    "Events",
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
            <h6 className="font-bold text-slate-600">Discover</h6>
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
            <h6 className="font-bold text-slate-600">Apple Wallet</h6>
            <Link href={"#"} className="hover:underline font-medium">
              Apple Pay
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2.5 text-xs">
            <h6 className="font-bold text-slate-600">Account</h6>
            {accountLinks.map((link, index) => (
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
            <h6 className="font-bold text-slate-600">Account</h6>
            {entertainmentLinks.map((link, index) => (
              <Link
                key={index}
                href={"#"}
                className="hover:underline font-medium"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2.5 text-xs">
            <h6 className="font-bold">For The Company</h6>
            <Link href={"#"} className="hover:underline font-medium">
              Apple and the company
            </Link>
          </div>
          <div className="flex flex-col gap-2.5 text-xs pt-6">
            <h6 className="font-bold">For Education</h6>
            {educationLinks.map((link, index) => (
              <Link
                key={index}
                href={"#"}
                className="hover:underline font-medium"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2.5 text-xs">
            <h6 className="font-bold text-slate-600">Apple Values</h6>
            {valuesLinks.map((link, index) => (
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
            <h6 className="font-bold text-slate-600">For Education</h6>
            {aboutLinks.map((link, index) => (
              <Link
                key={index}
                href={"#"}
                className="hover:underline font-medium"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-between">
        <p>
          <Link href={"#"} className="">
            Find a dealer
          </Link>
        </p>
      </div>
    </>
  );
}
