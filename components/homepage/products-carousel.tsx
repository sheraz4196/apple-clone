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
    },
    {
      subHeading: "Mac and iPhone",
      heading: <h3 className="text-2xl">A dream Team.</h3>,
      background: "bg-[url('/assets/card/card-3.jpg')]",
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
      <Carousel>
        <CarouselContent className="py-2.5">
          {Products.map((product, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <ProductCard
                subHeading={product.subHeading}
                heading={product.heading}
                background={product.background}
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
