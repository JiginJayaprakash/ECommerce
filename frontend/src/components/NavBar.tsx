import { Fragment, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  ArrowLeftStartOnRectangleIcon,
  PlayCircleIcon,
  HomeModernIcon,
  ShoppingBagIcon,
  PlusCircleIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { useCookies } from "react-cookie";
import { generatePath, useNavigate } from "react-router-dom";
import api from "../utils/apiCall";

export const NavBar = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const Logout = () => {
    removeCookie("token", null);
    navigate("/login");
  };
  const Checkout = () => {
    const path = generatePath("?checkout=true");
    navigate(path);
    navigate(0);
  };

  const solutions = [
    { name: "Home", description: "", href: "/", icon: HomeModernIcon },
    { name: "AddProduct", href: "/addproduct", icon: PlusCircleIcon },
    { name: "Seller", href: "/seller", icon: UserIcon },
    { name: "Bag", href: "#", icon: ShoppingBagIcon, onClick: Checkout },
  ];
  const callsToAction = [
    {
      name: "github",
      href: "https://github.com/JiginJayaprakash/ECommerce",
      icon: PlayCircleIcon,
    },
    {
      name: "logout",
      href: "#",
      icon: ArrowLeftStartOnRectangleIcon,
      onClick: Logout,
    },
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Popover className="relative">
            <Popover.Button className="inline-flex gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <span>Menu</span>
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 mt-1 flex w-screen max-w-max translate-x-1/2">
                <div className="w-screen-0.80 max-w flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {solutions.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                      >
                        <div className="mt-1 flex h-3 w-3 flex-none items-left justify-left rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-3 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <a
                            href={item.href}
                            onClick={item.onClick}
                            className="font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={item.onClick}
                        className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
