import React from "react";
function About() {
  return (
    <section id="about" className="bg-about  py-12 md:py-[86.5px]">
      <div className=" container   px-3 md:max-w-[1096px] ">
        <div className="about-title">About Us</div>
        <div className="pt-[20px] md:pt-[39px] text-justify md:text-justify lg:text-center">
          <span className="glocal-title">GLOCAL</span>
          <span className="about-pera">
            is a financial advisory company based in Bangladesh, dedicated to
            provide
          </span>
          <span className="about-degree">360-degree solution</span>
          <span className="about-pera">
            with tailor-made product proposition to clients which eventually
            leads them to a healthy bottom line and efficient operation. At
            Glocal, we strive to find creative solutions to complex financial
            situations and deliver sound financial advice to our clients.
          </span>
        </div>
        <div className="pt-[39px] text-justify md:text-justify lg:text-center">
          <span className="about-pera">GLOCAL specializes in arranging</span>
          <span className="about-degree ">Trade & Project Finance</span>
          <span className="about-pera">along with providing</span>
          <span className="about-degree">Treasury and Fx Solutions.</span>
          <span className="about-pera">
            The advisor team at Glocal also provides other financial advisory
            services to many of the corporate houses. We strive to consider
            every client’s entire financial situation and offer ideas and
            strategies to achieve the goals our clients set for their future. We
            have a strong international network, solid connectivity in the local
            market along with experienced team led by
          </span>
          <span className="about-degree">seasoned bankers.</span>
        </div>
      </div>
    </section>
  );
}

export default About;
