import DiscoverSection from "@/components/homepage/discover-section";
import FamilySection from "@/components/homepage/family-section";
import WelcomeSection from "@/components/homepage/welcome";

export default function Home() {
  return (
    <main>
      <WelcomeSection />
      <DiscoverSection />
      <FamilySection />
    </main>
  );
}
