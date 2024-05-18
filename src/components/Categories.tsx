"use client";

import {
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  CreditCardIcon,
  HomeIcon,
  ShoppingBagIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";

const tabs = [
  { name: "Experiências", href: "#", icon: UsersIcon, current: true },
  { name: "Estadias", href: "#", icon: HomeIcon, current: false },
  {
    name: "Restaurantes",
    href: "#",
    icon: BuildingStorefrontIcon,
    current: false,
  },
  { name: "Produtos", href: "#", icon: ShoppingBagIcon, current: false },
];
// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Categories() {
  return (
    <div className="mb-10">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-green-700 focus:ring-green-700"
          defaultValue={tabs.find((tab) => tab.current)!.name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? "border-green-700 text-green-700"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium",
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                <tab.icon
                  className={classNames(
                    tab.current
                      ? "text-green-700"
                      : "text-gray-400 group-hover:text-gray-500",
                    "-ml-0.5 mr-2 h-5 w-5",
                  )}
                  aria-hidden="true"
                />
                <span>{tab.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
