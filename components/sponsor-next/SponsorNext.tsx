import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { cn } from "@/lib/util";
import { whySponsorNext } from "@/constants";
import { ArrowRight } from "lucide-react";
import DesktopSponsorNext from "./DesktopSponsorNext";
import MobileSponsorNext from "./MobileSponsorNext";

export default function SponsorNext() {
  return (
    <div>
      <DesktopSponsorNext />
      <MobileSponsorNext/>
    </div>
  );
}
