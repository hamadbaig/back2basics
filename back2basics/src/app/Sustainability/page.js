import dynamic from "next/dynamic";
import PlannedCard from "../component/private/sustainabilityCard";
import SustainHero from "../component/private/sustainHero";
import Company from "../component/private/company";
import DataSection from "../component/private/DataSection";

// Dynamically import MapComponent with SSR disabled
const MapComponent = dynamic(() => import("../component/private/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <SustainHero />
      <PlannedCard />
      <DataSection />
      <MapComponent /> {/* This will only be rendered on the client */}
      <Company />
    </div>
  );
}
