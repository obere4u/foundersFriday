"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { navbarItems } from "@/constants";
import { cn } from "@/lib/util";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <MaxWidthWrapper className="lg:hidden flex items-center justify-between px-4 py-4 relative">
      {/* Logo */}
      <Link
        href={"/"}
        className="w-[40px] h-[40px]"
      >
        <Image
          src={"/logo/navbar-logo_81x80.svg"}
          width={40}
          height={40}
          alt="Founders Friday logo"
          className="w-full h-full object-cover"
        />
      </Link>

      {/* Register button */}
      <button className="flex items-center justify-center capitalize font-medium text-[1rem] leading-[24px] text-[#9E8CAF] h-[40px] w-[120px] border-[2px] border-[#9E8CAF] rounded-[12px]">
        <span>Register</span>
        <ArrowRight
          color="#9E8CAF"
          size={18}
          className="ml-1"
        />
      </button>

      {/* Hamburger Menu */}
      <div className="">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="focus:outline-none"
        >
          {menuOpen ? (
            <X
              size={28}
              color="#000000"
            />
          ) : (
            <Menu
              size={28}
              color="#000000"
            />
          )}
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-0 right-0 h-screen w-[70vw] backdrop-blur-md bg-[#FDF7FF] shadow-lg z-50 flex flex-col py-6 px-6">
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="self-end mb-6 focus:outline-none"
            >
              <X
                size={28}
                color="#000000"
              />
            </button>

            {/* Navigation Links */}
            <ul className="flex flex-col space-y-6">
              {navbarItems.map((item, index) => (
                <li
                  key={index}
                  className={cn(
                    "capitalize font-medium text-[1rem] text-[#000000] hover:text-[#8300FF] transition-colors duration-200 ease-in-out",
                    item.title === "home" &&
                      pathname === "/" &&
                      "text-[#8300FF]"
                  )}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </MaxWidthWrapper>
  );
}
