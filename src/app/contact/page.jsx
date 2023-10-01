import React from "react";
import ContactFrom from "../components/ContactFrom";
import Navbar from "../components/Navbar";

function ContactUs() {
  return (
    <>
      <Navbar isContact />
      <div className="  bg-primary bg-cover md:min-h-screen bg-no-repeat border-b border-[#FFFFFF3D]">
        <div className="container relative ">
          <ContactFrom />
        </div>
      </div>
    </>
  );
}

export default ContactUs;
