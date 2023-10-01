import { cn } from "@/utils/cn";
import { gtSuper } from "@/utils/fonts";
import React from "react";

function OurTeam() {
  return (
    <section className=" lg:h-[574px] bg-[#F5FFFC]" id="our-team">
      <div className="container pt-7 ">
        <div className="relative   lg:-top-[181px]  bg-[#F5FFFC]  rounded-[15px] border-[2px] border-[#0068383D] shadow-primary">
          <div className="max-w-[1134px] mx-auto px-4 md:px-8 lg:px-[45px]">
            <div
              className={cn(
                "text-primary   text-3xl text-center md:text-left md:text-[48px] mt-5 md:pt-[70px] font-bold  md:font-black leading-normal",
                gtSuper.className,
                "font-[900]"
              )}
            >
              Our Team
            </div>
            <div className="text-[#0F0F0F] text-[18px] text-justify  pt-[18px] pb-[50px] leading-[28.8px ] font-normal">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </div>
            <hr />
            <div
              id="Our-Philosophy"
              className={cn(
                "text-primary  text-3xl md:text-[48px] md:pt-[43px] md:font-black font-bold mt-5  leading-normal text-center md:text-left",
                gtSuper.className,
                "font-[900]"
              )}
            >
              Our Philosophy
            </div>
            <div className="text-[#0F0F0F] text-justify text-[18px]   pt-[16px] leading-[28.8px ] font-normal">
              The core of who we are is rooted in impeccable service and trust -
              it is the foundation from which we grow a relationship with our
              customers. This is what makes us different. From banks to
              corporates, we are here to support, educate, and offer insight to
              every individual that we encounter
            </div>
            <div className="text-[#0F0F0F] text-[18px]  pt-[16px] leading-[28.8px ] md:pb-[114px] font-normal pb-7 text-justify">
              We are solution oriented and ensure that our solutions are
              practical and easy to implement. In the dizzying world of finance,
              we often become too fixated on the immediate numbers and lose
              sight of the bigger picture. We want to understand what truly
              matters to you and tailor a holistic financial plan that gives you
              peace of mind today and tomorrow. We care as much about your
              benefit as we care about ours.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
