import About from "./components/About";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Network from "./components/Network";
import OurClients from "./components/OurClients";
import Ourservices from "./components/Ourservices";

import OurTeam from "./components/OurTeam";
import Testimonial from "./components/Testimonial";
import TopBanner from "./components/TopBanner";
export default function Home() {
  return (
    <div className="">
      <Navbar isHome />
      <TopBanner />
      <About />
      <Ourservices />
      <Network />
      <Experience />
      <OurTeam />
      <Testimonial />
      <OurClients />
      <h1 className="text-4xl">Assalamualaikum</h1>
    </div>
  );
}
