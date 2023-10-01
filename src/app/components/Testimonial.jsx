import { gtSuper } from "@/utils/fonts";
import TestimonialSlider from "./TestimonialSlider";
import { cn } from "@/utils/cn";

function Testimonial() {
  return (
    <div className="bg-[#F5FFFC] pt-7 md:pt-12 lg:pt-[71px]">
      <div className="container pt-[71px]">
        <div className="text-[#000]  text-center text-[16px] leading-[30.884px] font-medium  tracking-[2.72px]">
          Testimonial
        </div>
        <div
          className={cn(
            "text-primary text-center  text-3xl  md:text-[48px] pt-[18px] font-bold  leading-[57px]",
            gtSuper.className,
            "font-bold"
          )}
        >
          What Clients Say
        </div>
        <div className="text-[#0F0F0F] text-center  text-[18px] pt-[31px] font-normal leading-[27px] mb-[67px] max-w-[648px] mx-auto">
          We place huge value on strong relationships and have seen the benefit
          they bring to our business. Customer feedback is vital in helping us
          to get it right.
        </div>
        <TestimonialSlider />
      </div>
    </div>
  );
}

export default Testimonial;
