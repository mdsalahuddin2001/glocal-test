"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

import Logo from "./Logo";
import AboutDropdown from "./AboutDropdown";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { cn } from "@/utils/cn";

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2  text-sm">
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-white/90 "
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  const [isAboutShow, setIsAboutShow] = useState(false);

  const toggleAboutHandler = () => {
    setIsAboutShow(!isAboutShow);
  };
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 h-screen" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-primary backdrop-blur-md p-4 text-lg tracking-tight text-[#fff] shadow-[rgba(0,0,0,0.4)_0px_8px_24px] ring-1 ring-primary mx-3 "
          >
            <MobileNavLink href="/">HOME</MobileNavLink>
            <ul>
              <li className="  text-sm p-2">
                <div className="flex items-center" onClick={toggleAboutHandler}>
                  ABOUT US
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-white mt-.5"
                    aria-hidden="true"
                  />
                </div>
                <div
                  className={clsx(
                    !isAboutShow
                      ? "h-0 overflow-hidden opacity-0"
                      : "h-28 opacity-100",
                    "transition-all duration-500"
                  )}
                >
                  <MobileNavLink href="/#about"> About Glocal</MobileNavLink>
                  <MobileNavLink href="/#our-team"> Our Team</MobileNavLink>
                  <MobileNavLink href="/#Our-Philosophy">
                    Our Philosophy
                  </MobileNavLink>
                </div>
              </li>
            </ul>
            <MobileNavLink href="/#services">OUR SERVICES</MobileNavLink>
            <MobileNavLink href="/portfolio">PORTFOLIO</MobileNavLink>
            <MobileNavLink href="/contact">CONTACT</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

function Navbar({ isHome, isContact }) {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navEl = navRef?.current;
      if (window.scrollY > 180) {
        navEl?.classList.add("sticky");
      } else if (window.scrollY < 50) {
        navRef?.current?.classList.remove("sticky");
        navRef?.current?.classList.add("navbar-appear");
      }
    });
  }, []);
  return (
    <nav
      ref={navRef}
      className={cn(
        isContact ? "border-b border-white/[24%]" : "",
        "absolute top-0 inset-x-0 max-lg:py-2 lg:min-h-[113px] my-4 md:my-8  flex flex-col items-center justify-center transition-[transform,opacity] duration-500 z-[999]"
      )}
      id="navbar"
    >
      <div
        className={cn(
          isHome
            ? "md:justify-center md:items-center justify-between sm:justify-between"
            : "space-x-16 lg:space-x-[185px]",
          "container flex  my-5 nav-content max-md:justify-between"
        )}
      >
        <Logo
          className={cn(
            isHome ? "hidden" : "",
            "logo -mt-8 pt-4 max-md:hidden"
          )}
        />
        <ul className="  text-[16px] hidden  font-medium md:flex justify-between md:gap-5 lg:gap-[56px] items-center  text-[#FFF] whitespace-nowrap">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <AboutDropdown />
          </li>
          <li>
            <Link href="/#services">OUR SERVICES</Link>
          </li>
          <li>
            <Link href="/portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
        <Logo className="md:hidden max-w-[100px] !ml-0" />
        <div className="-mr-1 md:hidden">
          <MobileNavigation />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
