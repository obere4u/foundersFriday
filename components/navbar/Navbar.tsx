import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <nav className="z-[999] fixed w-full mt-5 border-b-[0.5px] border-t-[0.5px]  border-[#75687E] py-2 animate-slideDown bg-[#FDF7FF]">
      <DesktopNav />
      <MobileNav />
    </nav>
  );
}
