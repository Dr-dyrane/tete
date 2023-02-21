"use client";

import {
  PlusIcon,
  Bars3BottomLeftIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { Disclosure } from "@headlessui/react";
import SideBar from "./SideBar";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  return (
    <div>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-end space-x-4 bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              {open ? <span>Tete!</span> : <span>New Chat ?</span>}
              <Bars3BottomLeftIcon
                className={`${
                  open ? "rotate-180 text-purple-900 transform" : ""
                } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="fixed top-0 left-0 px-2 pt-2 pb-2 bg-[#200635] w-3/4 rounded-tr-xl rounded-tb-xl">
              <SideBar />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
