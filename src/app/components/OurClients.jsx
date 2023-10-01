import React from "react";
import Image from "next/image";
function OurClients() {
  return (
    <section className="bg-[#F5FFFC]">
      <div className="container  pt-[98px]">
        <h2 className="section-title max-w-[1180px] mx-auto">
          We proudly present a partial listing of the firms we have been able to
          include as “clients”.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  py-[98px] justify-center items-center gap-4 lg:gap-x-8 text-center [&>img]:mx-auto">
          <Image
            src="/assets/image 13.png"
            alt="no image"
            width={347.23}
            height={191.575}
          />

          <Image
            src="/assets/image 14.png"
            alt="no image"
            width={306.704}
            height={160.26}
          />

          <Image
            src="/assets/image 20.png"
            alt="no image"
            width={195.259}
            height={133.55}
          />

          <Image
            src="/assets/image 21.png"
            alt="no image"
            width={219.206}
            height={146.444}
          />

          <Image
            src="/assets/image 16.png"
            alt="no image"
            width={283.679}
            height={157.497}
          />

          <Image
            src="/assets/image 17.png"
            alt="no image"
            width={292.889}
            height={88.419}
          />

          <Image
            src="/assets/image 18.png"
            alt="no image"
            width={178.447}
            height={161.289}
          />

          <Image
            src="/assets/image 19.png"
            alt="no image"
            width={309.467}
            height={309.467}
          />
        </div>
      </div>
    </section>
  );
}

export default OurClients;
