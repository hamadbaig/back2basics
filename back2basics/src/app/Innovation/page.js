import HydroToAnode from "../component/private/Inno-con";
import QuoteSection from "../component/private/Inn-quote";
import ServicesSection from "../component/private/Inn-steps";
import HydroCathode from "../component/private/Process";
export default function Home() {
  return (
    <div>
      <ServicesSection />
      {/* <HydroCathode /> */}
      <QuoteSection />
      {/* <HydroToAnode /> */}
    </div>
  );
}
