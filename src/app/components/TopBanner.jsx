import Image from "next/image";
import Link from "next/link";
import React from "react";

function TopBanner() {
  return (
    <div className="bg-cover bg-no-repeat min-h-screen flex flex-col items-center justify-center relative">
      <div className="container lg:mt-[125px] z-50">
        <Image
          src="/assets/headingLogo.png"
          width={452.868}
          height={190}
          className="mx-auto max-md:max-w-[280px]"
          loading="eager"
          alt="logo"
        />

        <h1 className="title-header">Find Your Road to Financial Freedom</h1>
        <h2 className="explore-title">Explore Us</h2>
        <Link href="/#about">
          <Image
            src="/assets/explore.gif"
            width={77}
            height={78}
            alt="no image"
            className="pt-4  mx-auto "
          />
        </Link>
      </div>

      <Image
        fill={true}
        priority={true}
        objectPosition="center"
        objectFit="cover"
        src="/assets/home-banner.png"
        alt="hero background"
      />
    </div>
  );
}

export default TopBanner;
