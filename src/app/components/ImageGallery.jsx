import Image from "next/image";
import React from "react";

function ImageGallery() {
  return (
    <div className="py-[90px] bg-[#F5FFFC]">
      <div className="container grid grid-cols-12 gap-4 lg:gap-[25px]">
        <div className="col-span-12 md:col-span-5 ">
          <Image
            src="/assets/Rectangle 4331.png"
            width={535}
            height={420}
            alt="no image"
            className="w-full"
          />
        </div>
        <div className="col-span-12 md:col-span-7">
          <Image
            src="/assets/Rectangle 4332.png"
            width={759}
            height={420}
            alt="no image"
            className="w-full"
          ></Image>
        </div>
        <div className="col-span-12 md:col-span-4">
          <Image
            src="/assets/Rectangle 4333.png"
            width={423}
            height={420}
            className="w-full"
            alt="no image"
          ></Image>
        </div>
        <div className="col-span-12 md:col-span-4">
          <Image
            src="/assets/Rectangle 4334.png"
            width={423}
            height={420}
            className="w-full"
            alt="no image"
          ></Image>
        </div>
        <div className="col-span-12 md:col-span-4">
          <Image
            src="/assets/Rectangle 4335.png"
            width={423}
            height={420}
            className="w-full"
            alt="no image"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
