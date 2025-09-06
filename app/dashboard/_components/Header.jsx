"use client";
import React, { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

const Header = () => {
  const [isUserButtonLoaded, setUserButtonLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const SkeletonLoader = () => (
    <div className="w-8 h-8 bg-gradient-to-br from-white to-blue-900 text-white rounded-full animate-pulse"></div>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setUserButtonLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const path = usePathname();

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-900 shadow-sm h-20 flex items-center">
      <div className="w-[80%] m-auto flex gap-4 items-center justify-between">
        {/* Logo */}
        <Link className="hidden md:block" href="/dashboard">
        <h1 className="bg-gradient-to-br from-white to-blue-100 text-transparent bg-clip-text text-2xl font-bold">
  MockWithAI
</h1>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6">
          <Link href="/dashboard">
            <li
              className={`text-white hover:text-white hover:font-bold transition-all cursor-pointer ${
                path === "/dashboard" && "text-white font-bold"
              }`}
            >
              Dashboard
            </li>
          </Link>
          <Link href="/dashboard/question">
            <li
              className={`text-white hover:text-white hover:font-bold transition-all cursor-pointer ${
                path === "/dashboard/question" && "text-white font-bold"
              }`}
            >
              Questions
            </li>
          </Link>
          <Link href="/dashboard/upgrade">
            <li
              className={`text-white hover:text-white hover:font-bold transition-all cursor-pointer ${
                path === "/dashboard/upgrade" && "text-white font-bold"
              }`}
            >
              Upgrade
            </li>
          </Link>
          <Link href="/dashboard/howit">
            <li
              className={`text-white hover:text-white hover:font-bold transition-all cursor-pointer ${
                path === "/dashboard/howit" && "text-white font-bold"
              }`}
            >
              How it works?
            </li>
          </Link>
        </ul>

        {/* Mode Toggle and User Button */}
        <div className="flex gap-10 items-center">
          <ModeToggle />
          {isUserButtonLoaded ? <UserButton /> : <SkeletonLoader />}
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-5">
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/dashboard">
                <li
                  className={`text-white hover:text-black hover:font-bold transition-all cursor-pointer ${
                    path === "/dashboard" && "text-black font-bold"
                  }`}
                >
                  Dashboard
                </li>
              </Link>
              <Link href="/dashboard/question">
                <li
                  className={`text-white hover:text-black hover:font-bold transition-all cursor-pointer ${
                    path === "/dashboard/question" && "text-black font-bold"
                  }`}
                >
                  Questions
                </li>
              </Link>
              <Link href="/dashboard/upgrade">
                <li
                  className={`text-white hover:text-black hover:font-bold transition-all cursor-pointer ${
                    path === "/dashboard/upgrade" && "text-black font-bold"
                  }`}
                >
                  Upgrade
                </li>
              </Link>
              <Link href="/dashboard/howit">
                <li
                  className={`text-white hover:text-black hover:font-bold transition-all cursor-pointer ${
                    path === "/dashboard/howit" && "text-black font-bold"
                  }`}
                >
                  How it works?
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;