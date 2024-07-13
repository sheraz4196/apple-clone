import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCardProps } from "@/types/types";
import ProductCard from "../general/product-card";

export default function ProductsCarousel() {
  const Products: ProductCardProps[] = [
    {
      subHeading: "First Steps",
      heading: (
        <h3 className="text-2xl">
          As easy to use
          <br />
          as it is to enjoy.
        </h3>
      ),
      background: "bg-[url('/assets/card/card-1.jpg')]",
      black: false,
    },
    {
      subHeading: "Performance and battery",
      heading: (
        <h3 className="text-2xl">
          Full speed ahead
          <br />
          EveryWhere.
        </h3>
      ),
      background: "bg-[url('/assets/card/card-2.jpg')]",
      black: false,
    },
    {
      subHeading: "Mac and iPhone",
      heading: <h3 className="text-2xl">A dream Team.</h3>,
      background: "bg-[url('/assets/card/card-3.jpg')]",
      black: true,
    },
    {
      subHeading: "Compatibility",
      heading: (
        <h3 className="text-2xl">
          Your favorite apps
          <br />
          are in your Mac.
        </h3>
      ),
      background: "bg-[url('/assets/card/card-4.jpg')]",
      black: true,
    },
    {
      subHeading: "Privacy & Security",
      heading: (
        <h3 className="text-2xl">
          What&apos;s yours
          <br />
          is yours alone.
        </h3>
      ),
      background: "bg-[url('/assets/card/card-5.jpg')]",
    },
  ];
  return (
    <div>
      <Carousel className="overflow-visible">
        <CarouselContent className="py-2.5">
          {Products.map((product, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
              <ProductCard
                subHeading={product.subHeading}
                heading={product.heading}
                background={product.background}
                black={product.black}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center absolute mt-12  right-28">
          <CarouselPrevious className="relative bg-[#dadadeb0]" />
          <CarouselNext className="relative" />
        </div>
      </Carousel>
    </div>
  );
}
