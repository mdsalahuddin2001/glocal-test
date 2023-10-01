"use client";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    title: "Arranging Trade Finance solution",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it.",
    styles: "card1",
    maxW: 228,
  },
  {
    id: 2,
    title:
      "Project financing and long-term impact fund arrangement at low cost.",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it.",
    maxW: 350,
  },
  {
    id: 3,
    title: "Treasury solution through arranging FCY",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it.",
    maxW: 255,
  },
  {
    id: 4,
    title: "OBU Funding for local banks through network banks",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it.",
    styles: "card4",
    maxW: 272,
  },

  {
    id: 5,
    title: "Balance Sheet Restructuring and Credit facility structuring",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it.",
    styles: "card5",
    maxW: 339,
  },
  {
    id: 6,
    title: "Macro-economic data analysis & Industry updates",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it.",
    styles: "card6",
    maxW: 296,
  },
];
function Ourservices() {
  const [activeService, setActiveService] = useState(false);
  const [activeId, setActiveId] = useState(null);

  // handle active service
  const handleActiveService = (id) => {
    if (activeId === id) {
      setActiveService(false);
      setActiveId(null);
      return;
    }
    setActiveService(true);
    setActiveId(id);
  };
  return (
    <section id="services" className="bg-[#F5FFFC]">
      <div className="container">
        <div className="services-title">Our Services</div>
        <div className="pb-12 md:pb-[105px]">
          <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3   gap-[24px] ">
            {services.map((service) => {
              return (
                <ServiceCard
                  handleActiveService={handleActiveService}
                  key={service.id}
                  service={service}
                  activeService={activeService}
                  activeId={activeId}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourservices;
