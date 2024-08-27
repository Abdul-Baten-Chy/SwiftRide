import { GridCards } from "@/components/GridCrads";
import WhoWeAre from "./Animate";
import FAQ from "./FAQ";
import Hero from "./Hero";
import Subscribe from "./Subscribe";
import { WhyChooseUs } from "./WhyChooseUs";

function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <GridCards></GridCards>

      {/* <FeaturedProducts /> */}
      <WhoWeAre></WhoWeAre>
      <Subscribe></Subscribe>
      <FAQ />
    </>
  );
}
export default Home;
