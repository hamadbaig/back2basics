import PlannedCard from "../component/private/sustainabilityCard";
import MapComponent from "../component/private/Map";
import SustainHero from "../component/private/sustainHero";
import Company from "../component/private/company";
export default function Home() {
  return (
    <div>
      <SustainHero />
      <MapComponent />
      <PlannedCard />
      <Company />
    </div>
  );
}
