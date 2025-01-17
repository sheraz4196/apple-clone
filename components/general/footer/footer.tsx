import DealerSection from "./dealer-section";
import FooterNav from "./footer-nav";
import Instructions from "./instructions";

export default function Footer() {
  return (
    <footer className="bg-mute py-4">
      <div className="max-w-screen-lg mx-auto px-4 text-sm text-black/40">
        <Instructions />
        <FooterNav />
        <DealerSection />
      </div>
    </footer>
  );
}
