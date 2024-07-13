import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { ProductCardProps } from "@/types/types";
export default function ProductCard({
  subHeading,
  heading,
  background,
}: ProductCardProps) {
  return (
    <div
      className={`relative h-[740px] w-[405px] ${background} rounded-3xl p-6 lg:p-8 cursor-pointer`}
    >
      <div className="text-[#f5f5f7] font-semibold flex flex-col gap-2">
        <p className="text-sm ">{subHeading}</p>
        {heading}
      </div>
      <Button size={"icon"} className="rounded-full absolute bottom-6 right-6">
        <ArrowRight />
      </Button>
    </div>
  );
}
