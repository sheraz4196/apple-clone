import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

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
      </div>
    </section>
  );
}
