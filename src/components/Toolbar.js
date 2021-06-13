import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  //   BookmarkAltIcon,
  //   CalendarIcon,
  //   ChartBarIcon,
  //   CursorClickIcon,
  MenuIcon,
  //   RefreshIcon,
  //   ShieldCheckIcon,
  //   SupportIcon,
  //   ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";

import EndClassFeedback from "./EndClassFeedback";

export default function Toolbar() {
  const title = "Trial lesson [Grade: 1-3 ]";
  const timer = "12:10";
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start ">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="text-gray-800 text-xl font-semibold md:w-0 md:flex-1  md:hidden">
                <span>Codingal</span>
              </div>
              <div className="text-gray-800 text-left md:w-0 md:flex-1 border-l border-dashed border-gray-500 pl-8 hidden md:block">
                <span> {title} </span>
              </div>
              <div className="text-gray-800 hidden md:block">
                <span> {timer} </span>
              </div>
              <div className="text-gray-800 hidden md:block">
                <EndClassFeedback />
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Transition
                show={open}
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                      <div className="flex items-center justify-between mb-8">
                        <div className="text-gray-800 ">
                          <button className="bg-indigo-500 hover:bg-indigo-600 focus:outline-none rounded-md px-4 py-2 block text-white transition duration-500 ease-in-out">
                            End class
                          </button>
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-gray-800">
                          <span> {title} </span>
                        </div>
                        <div className="text-gray-800">
                          <span> {timer} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </div>
          </div>
        </>
      )}
    </Popover>
  );
}
