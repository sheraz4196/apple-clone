import DiscoverSection from "@/components/homepage/discover-section";
import WelcomeSection from "@/components/homepage/welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <WelcomeSection />
      <DiscoverSection />
    </main>
  );
}
