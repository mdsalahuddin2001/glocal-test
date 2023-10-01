import Image from "next/image";
import { trumpSoft } from "@/utils/fonts";
import { cn } from "@/utils/cn";

function Experience() {
  return (
    <section className="bg-experience relative">
      <div className="container xl:h-[629px]">
        <h2
          className={cn(
            "text-[#FFF] pt-[78px]  text-center  py-6 text-[35px] md:text-[48px] font-bold tracking-[2px]",
            trumpSoft.className
          )}
        >
          Glocal's experience can make a difference for you.
        </h2>
        <div className=" pb-12 md:pb-44 md:px-12 xl:px-[245px] mt-4 md:mt-8 lg:mt-[60px] font-medium text-[10px] lg:gap-10">
          <div className="grid grid-cols-3 items-start">
            {/* item */}
            <div className="flex items-center">
              <div className="text-center">
                <span
                  className={cn(
                    "text-[#FFF]  text-5xl lg:text-[85px] font-bold lg:leading-[69.294px]",
                    trumpSoft.className
                  )}
                >
                  # 1
                </span>
                <h2 className=" md:text-[16px] pt-[31px] text-[#fff] ">
                  Provider of 3rd Party Financial Services
                </h2>
              </div>
              <Image
                src="/assets/Line 4.svg"
                width={63}
                height={146}
                alt="no image"
              ></Image>
            </div>
            {/* item ends */}
            {/* item */}
            <div className="flex items-center ">
              <div className="text-center">
                <span
                  className={cn(
                    "text-[#FFF]  text-5xl lg:text-[85px] font-bold lg:leading-[69.294px]",
                    trumpSoft.className
                  )}
                >
                  # 1
                </span>
                <h2 className=" md:text-[16px] pt-[31px] text-[#fff] ">
                  Independent Financial Agent in Bangladesh
                </h2>
              </div>
              <Image
                src="/assets/Line 5.svg"
                width={63}
                height={146}
                alt="no image"
              ></Image>
            </div>
            <div className="flex items-center ">
              <div className="text-center">
                <span
                  className={cn(
                    "text-[#FFF]  text-5xl lg:text-[85px] font-bold lg:leading-[69.294px]",
                    trumpSoft.className
                  )}
                >
                  # 1
                </span>
                <h2 className=" md:text-[16px] pt-[31px] text-[#fff] ">
                  Arranger of Long <br /> Term Impact Funding <br /> (in local
                  and foreign currency)
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
