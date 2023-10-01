import { cn } from "@/utils/cn";
import { gtSuper } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

function Network() {
  return (
    <div className="relative ">
      <div className="container z-50 relative">
        <div className="px-0 md:px-[90px] ">
          <div
            className={cn(
              "py-12 md:pt-[100px] text-center md:text-left text-[35px] md:text-[48px]  font-black  text-secondary leading-normal",
              gtSuper.className,
              "font-[900]"
            )}
          >
            International network
          </div>
          <div className="pt-[11px]">
            <span className=" text-[20px]  text-secondary  font-bold leading-[38.605px] ">
              GLOCAL
            </span>
            <span className="text-[20px] text-[#fff]  font-normal leading-[193.023%] px-1">
              has working relationship with international financial institutions
              and service providers across the globe.
            </span>
          </div>
          <div className="pt-7 md:pt-[77px]">
            <h1
              className={cn(
                "text-[18px] md:text-[24px] text-[#fff] font-bold leading-normal",
                gtSuper.className,
                "font-bold"
              )}
            >
              Our network is widespread in the following regions:
            </h1>
            <h2 className="text-[20px] pt-[43px] text-secondary  font-medium leading-[16.305px]">
              Middle East part
            </h2>
            <h2 className="text-[20px] pt-[24px] text-secondary  font-medium leading-[16.305px]">
              Europe
            </h2>
            <h3 className="text-[20px] pt-[24px] text-secondary  font-medium leading-[16.305px]">
              USA
            </h3>
            <h4 className="text-[20px] pt-[24px] pb-[23px]  text-secondary  font-medium leading-[16.305px]">
              India
            </h4>
          </div>
          <div className="flex flex-col xl:flex-row  xl:items-center  justify-start  whitespace-nowrap pb-12 gap-[21px] md:pb-[100px]">
            <h1 className="text-[20px]   text-secondary  font-semibold leading-[16.305px]">
              Far East Part -
            </h1>
            <ul className="md:flex justify-between items-center gap-[21px] text-[20px]  text-[#fff]  font-normal flex-wrap [&>li]:list-bullet">
              <li>China</li>
              <li>Singapore</li>
              <li>Hong Kong</li>
              <li>Vietnam</li>
              <li>Thailand</li>
              <li>Malaysia</li>
              <li>South Korea</li>
            </ul>
          </div>
        </div>
      </div>
      <Image
        fill={true}
        priority={true}
        objectPosition="center"
        objectFit="cover"
        quality="100"
        src="/assets/network-bg.png"
        className="z-10"
        alt="network background"
      />
    </div>
  );
}

export default Network;
