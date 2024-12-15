"use client";

import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { navbarItems, socialMediaLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/util";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="mt-auto pt-5 border-t border-[#75687E]">
      <MaxWidthWrapper>
        <div className="flex items-center space-x-1 w-fit">
          <div className="w-[81px] h-20 ">
            <Image
              src={"/logo/navbar-logo_81x80.svg"}
              width={81}
              height={80}
              alt="Founders Friday logo."
              className="w-full h-full object-cover"
            />
          </div>
          <p className="capitalize font-bold drop-shadow-md text-black text-[1.75rem] leading-[33.6px]">
            Founder's
            <br /> Friday
          </p>
        </div>
        <div className="max-w-[1045px] mt-20 mx-auto flex flex-col items-center justify-center space-y-10">
          <p className="capitalize text-center font-bold text-[1.5rem] md:text-[2.65rem] leading-[56.25px] text-black">
            Want To Be A Part Of Abuja’s Biggest Tech Community?
          </p>
          <button
            type="button"
            className="cursor-pointer flex items-center space-x-[10px] text-[#9524FF] md:text-[1.5rem] leading-[33.6px] font-normal capitalize border-[2px] border-[#9524FF] p-5 rounded-[40px] hover:text-opacity-75 transition-colors duration-100 ease-in-out group group-hover:text-opacity-75"
          >
            <span> Register For Our Next Event</span>
            <Image
              src={"/double-right-arrow_40x40.svg"}
              width={40}
              height={40}
              alt="double right arrow"
              className="object-cover group-hover:text-opacity-75 cursor-pointer"
            />
          </button>
        </div>
        {/* socials and nav links */}
        <div className="mt-40 py-5 border-t border-[#75687E] flex flex-col-reverse md:space-y-0 md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mt-5 md:mt-0">
            {socialMediaLinks.map((socialMediaLink, index) => (
              <a
              key={socialMediaLink.title + index}
              href="#"
                className="rounded-full size-[45px] bg-[#9524FF] flex items-center justify-center"
              >
                <Image
                  src={`/social/${socialMediaLink.image}`}
                  width={25}
                  height={25}
                  alt={`SVG image of ${socialMediaLink.title}`}
                />
              </a>
            ))}
          </div>
          {/* navigation links */}
          <ul className="flex items-center space-x-8">
            {navbarItems.map((item, index) => (
              <li
                key={index}
                className={cn(
                  "capitalize font-medium lg:text-[1.5rem] leading-[28.8px] text-[#000000] hover:text-[#8300FF]",
                  item.title === "home" && pathname === "/" && "text-[#8300FF]"
                )}
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
