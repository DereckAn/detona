import HeroSection from "./sections/herosection";
import Compoanies from "./sections/companies";
import AboutUs from "./sections/aboutus";
import Texto from "./sections/texto";
import Abilities from "./sections/abilities";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Compoanies />
      <AboutUs />
      <Texto />
      <Abilities />
    </>
  );
}
