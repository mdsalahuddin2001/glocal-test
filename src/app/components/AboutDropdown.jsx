import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AboutDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex  items-center gap-x-1   text-[16px] font-medium">
          ABOUT US
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-white mt-.5"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="aboutDropdownContent absolute left-0 z-10 mt-4 w-56 origin-top-left rounded-[9px] bg-white/80  ">
          <div className="py-1 divide-y divide-black/10">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/#about"
                  className={classNames(
                    active ? " text-primary/80" : "text-primary",
                    "block px-4 py-2   text-[16px] "
                  )}
                >
                  About Glocal
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/#our-team"
                  className={classNames(
                    active ? " text-primary/80" : "text-primary",
                    "block px-4 py-2   text-[16px]"
                  )}
                >
                  Our Team
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/#Our-Philosophy"
                  className={classNames(
                    active ? " text-primary/80" : "text-primary",
                    "block px-4 py-2   text-[16px]"
                  )}
                >
                  Our Philosophy
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
