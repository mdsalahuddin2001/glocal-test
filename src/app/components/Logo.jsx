import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo({ className }) {
  return (
    <Link className={className} href="/">
      <Image src="/assets/logo.svg" width={200} height={52.6} alt="logo" />
    </Link>
  );
}

export default Logo;
