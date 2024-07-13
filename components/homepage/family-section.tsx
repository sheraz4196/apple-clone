import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import MacBooks from "../general/mackbooks";

export default function FamilySection() {
  return (
    <section className="py-36 bg-[#fafafa]">
      <div className="max-w-screen-xl mx-6 lg:mx-auto">
        <header className="pb-12 lg:pb-20 flex items-center justify-between">
          <h1 className="text-6xl font-semibold">Meet the family.</h1>
          <Link href={"#"} className="flex items-center gap-2 text-blue-800">
            <span>Compare all models</span>
            <ChevronRight className="size-3" />
          </Link>
        </header>
        <ol className="bg-white p-1.5 flex items-center mb-14 lg:mb-20 max-w-max rounded-full text-[#1d1d1f]">
          <li className="bg-[#1d1d1f] text-white px-4 lg:px-6 py-2.5 text-sm lg:text-base rounded-full">
            Laptops
          </li>
          <li className="px-4 lg:px-6 py-2.5 text-sm lg:text-base rounded-full">
            Desktop computers
          </li>
          <li className="px-4 lg:px-6 py-2.5 text-sm lg:text-base rounded-full">
            Monitors
          </li>
        </ol>
        <MacBooks />
      </div>
    </section>
  );
}
