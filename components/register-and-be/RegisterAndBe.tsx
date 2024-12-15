import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import DesktopViewRegister from "./DesktopViewRegister";
import MobileViewRegister from "./MobileViewRegister";

export default function RegisterAndBe() {
  return (
    <section>
      <DesktopViewRegister />
      <MobileViewRegister/>
    </section>
  );
}
