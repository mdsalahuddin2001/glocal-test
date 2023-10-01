"use client";

import { cn } from "@/utils/cn";
import { gtSuper } from "@/utils/fonts";
import { useState } from "react";

const ServiceCard = ({
  service,
  handleActiveService,
  activeService,
  activeId,
}) => {
  const { title, desc, maxW } = service || {};
  const [showDesc, setShowDesc] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowDesc(!showDesc)}
        onMouseLeave={() => setShowDesc(false)}
        className={cn(
          "cursor-pointer flex items-center justify-center",
          "px-4 lg:px-[30px] py-[78px]   text-[28px] shadow-cardShadow-lg   font-bold  hover:text-secondary   bg-[#FFFFFF] rounded-[17px] text-primary hover:bg-primary duration-700 leading-[37.716px]  max-h-[269.11px] max-md:hidden",
          gtSuper.className,
          "font-bold"
        )}
      >
        {/* max-md:max-h-[231.41px] */}
        {showDesc ? (
          <p className="text-[16px]  font-normal w-full text-left text-[#fff] leading-[30.884px]">
            {desc}
          </p>
        ) : (
          <h2 style={{ maxWidth: `${maxW}px` }}> {title}</h2>
        )}
      </div>
      <div
        onClick={() => handleActiveService(service.id)}
        // onMouseLeave={() => setShowDesc(false)}
        className={cn(
          "cursor-pointer flex items-center justify-center",
          "px-4 lg:px-[30px] py-[78px]   text-[28px] shadow-cardShadow-lg   font-bold  hover:text-secondary   bg-[#FFFFFF] rounded-[17px] text-primary hover:bg-primary duration-700 leading-[37.716px]  max-h-[269.11px] group md:hidden",
          gtSuper.className,
          "font-bold"
        )}
      >
        {/* max-md:max-h-[231.41px] */}
        {activeService && service.id === activeId ? (
          <p className="text-primary  text-[16px]  font-normal w-full text-left group-hover:text-[#fff] leading-[30.884px]">
            {desc}
          </p>
        ) : (
          <h2 style={{ maxWidth: `${maxW}px` }}> {title}</h2>
        )}
      </div>
    </>
  );
};
export default ServiceCard;
