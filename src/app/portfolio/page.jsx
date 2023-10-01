import Link from "next/link";
import Logo from "../components/Logo";
import PortfolioTitle from "../components/PortfolioTitle";
import Navbar from "../components/Navbar";
function Portfolio() {
  return (
    <>
      <Navbar />
      <div
        before=""
        className="bg-portfolioBanner before:bg-[rgb(0,61,43)]/[.65]   bg-center bg-cover min-h-screen bg-no-repeat   relative before:absolute before:inset-0 pt-28 flex flex-col items-center justify-center"
      >
        <PortfolioTitle></PortfolioTitle>
      </div>
    </>
  );
}

export default Portfolio;
