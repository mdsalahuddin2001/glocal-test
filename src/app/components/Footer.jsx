import React from "react";
import Link from "next/link";
import Image from "next/image";
import CopyRight from "./CopyRight";
import Logo from "./Logo";
function Footer() {
  return (
    <section className="bg-primary">
      <div className=" lg:container py-7 px-0  md:py-12 lg:py-[76px]">
        <nav className="flex flex-col lg:flex-row xl:justify-between items-center  pb-[44px] gap-3 md:gap-7 xl:gap-[32px] ">
          <div>
            <Logo />
          </div>
          <ul className="font-Roboto text-sm md:text-[16px] font-semibold  flex  justify-between items-center gap-2 md:gap-5  text-[#FFF] xl:gap-[32px]  leading-[24px]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#about">About Glocal</Link>
            </li>
            <li>
              <Link href="/#services">Our Services</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex justify-between items-center gap-[12px]">
            <Link href="/">
              <Image
                src="/assets/whatsapp.svg"
                width={24}
                height={24}
                alt="no image"
                className="w-[70%] md:w-full"
              ></Image>
            </Link>
            <p className="text-[16px] text-[#FFF]  font-semibold">
              +880 - 1711123123
            </p>
          </div>
        </nav>
        <hr />
        <CopyRight />
      </div>
    </section>
  );
}

export default Footer;
