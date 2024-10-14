import PlannedCard from "../component/private/sustainabilityCard";
import MapComponent from "../component/private/Map";
import SustainHero from "../component/private/sustainHero";
import Company from "../component/private/company";
import DataSection from "../component/private/DataSection";
export default function Home() {
  return (
    <div>
      <SustainHero />
      <PlannedCard />
      <DataSection />
      <MapComponent />

      <Company />
    </div>
  );
}
