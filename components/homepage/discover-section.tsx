import ProductsCarousel from "./products-carousel";

export default function DiscoverSection() {
  return (
    <section className="py-36">
      <div className="max-w-screen-xl mx-6 lg:mx-auto">
        <header className="pb-12 lg:pb-20">
          <h1 className="text-6xl font-semibold">Discover the Mac.</h1>
        </header>
        <ProductsCarousel />
      </div>
    </section>
  );
}
