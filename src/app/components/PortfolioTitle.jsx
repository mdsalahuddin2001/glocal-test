import { cn } from "@/utils/cn";
import { gtSuper } from "@/utils/fonts";
import React from "react";
function PortfolioTitle() {
  return (
    <div className="relative z-50 ">
      <div className="md:container">
        <div className="max-w-[1170px] mx-auto ">
          <h1
            className={cn(
              "text-[#fff] text-3xl md:text-[48px] text-center   font-bold leading-[57.6px]",
              gtSuper.className,
              "font-bold"
            )}
          >
            Our Portfolio
          </h1>
          <p className="text-[#fff] text-[18px]  pt-2 md:pt-[38px] font-normal font-Inter leading-[39.87px] text-justify md:text-center  px-7 py-7">
            GLOCAL started its journey in 2018 to meet the increasing
            requirements of advisory services by the corporate houses for value
            added services specially in the area of Trade Business and Project
            Finance for securing a healthy bottom line and operational
            efficiency and adapting with the challenges at policy level. On an
            average, the company executes trade deals to the tune of USD 65
            million per month for the business houses from diversified
            industries such as textile & garments, steel, cement, power &
            energy, healthcare, commodities etc. While GLOCAL is very aggressive
            on trade finance solution, Project Finance team is very selective to
            arrange long term funding for new project and expansion of existing
            business to ensure 100% success. In 2023, the team has successfully
            arranged low cost fund for 3 new project to the tune of USD 100
            million while two are under process.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioTitle;
