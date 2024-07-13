import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { ProductCardProps } from "@/types/types";
import { cn } from "@/lib/utils";
export default function ProductCard({
  subHeading,
  heading,
  background,
  black,
}: ProductCardProps) {
  return (
    <div
      className={`relative w-[260px] h-[480px] lg:h-[740px] lg:w-[405px] ${background} bg-cover rounded-3xl p-6 lg:p-8 cursor-pointer`}
    >
      <div
        className={cn(
          "font-semibold flex flex-col gap-2",
          black ? "#1d1d1f" : "text-[#f5f5f7]"
        )}
      >
        <p className="text-sm">{subHeading}</p>
        {heading}
      </div>
      <Button size={"icon"} className="rounded-full absolute bottom-6 right-6">
        <ArrowRight />
      </Button>
    </div>
  );
}
