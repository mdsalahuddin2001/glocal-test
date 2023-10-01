import Link from "next/link";
import React from "react";

function CopyRight() {
  return (
    <div>
      <div className=" font-Roboto text-[14px] font-normal md:leading-[21px] text-[#fff] flex flex-col md:flex-row  justify-evenly lg:justify-center items-center  pt-[32px] md:space-x-4">
        <p className="max-md:order-2 max-md:mt-2">
          2023 Glocal. All right reserved.
        </p>
        <div className="flex space-x-4 items-center">
          <Link href="/" className="underline">
            Privacy Policy
          </Link>
          <Link href="/" className="underline">
            Terms of Service
          </Link>
          <Link href="/" className="underline">
            Cookies Settings
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CopyRight;
