"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/util";
import { navbarItems } from "@/constants";




export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <MaxWidthWrapper className="flex items-center justify-between w-full">
      {/* logo */}
      <div className="flex items-center justify-between w-fit">
        <div className="w-[81px] h-20">
          <Image
            src={"/logo/navbar-logo_81x80.svg"}
            width={81}
            height={80}
            alt="Founders Friday logo."
            className="w-full h-full object-cover"
          />
        </div>
        <p className="capitalize font-bold drop-shadow-md text-black text-[1.75rem] leading-[33.6px]">
          Founder's Friday
        </p>
      </div>
      <div className="flex items-center space-x-20">
        <ul className="flex items-center space-x-8">
          {navbarItems.map((item, index) => (
            <li
              key={index}
              className={cn(
                "capitalize font-medium text-[1.5rem] leading-[28.8px] text-[#000000] hover:text-[#8300FF]",
                item.title === "home" && pathname === "/" && "text-[#8300FF]"
              )}
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <button className="flex items-center justify-center capitalize font-medium text-[1.5rem] leading-[28.8px] text-[#9E8CAF] h-[59px] w-[196.52px] border-[2px] border-[#9E8CAF] rounded-[20px]">
          <span>Register</span>{" "}
          <ArrowRight
            color="#9E8CAF"
            size={23}
          />
        </button>
      </div>
    </MaxWidthWrapper>
  );
}
