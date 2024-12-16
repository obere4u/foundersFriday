"use client";

import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { ArrowRight } from "lucide-react";

export default function MobileView() {
  return (
    <section className="lg:hidden relative w-full mt-16 px-4">
      <MaxWidthWrapper className="flex flex-col items-center w-full">
        {/* Top images */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="animate-bounce w-[180px] h-[225px]">
            <Image
              src={"/whatHappensImage1_361x450.png"}
              width={180}
              height={225}
              alt="Founders Friday"
              className="object-cover rounded-lg"
            />
          </div>
          <div className="animate-bounce w-[190px] h-[235px]">
            <Image
              src={"/whatHappensImage2_380x470.png"}
              width={190}
              height={235}
              alt="Founders Friday"
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full text-center">
          <p className="text-[#5C00B3] text-[1rem] font-bold leading-[30px] capitalize">
            Founders Friday
          </p>
          <h2 className="font-bold text-[1.5rem] text-black leading-[36px] capitalize mb-4">
            What Happens At Founders Friday
          </h2>
          <p className="text-[#4C4452] text-[1rem] font-normal leading-[24px] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
            dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
            suscipit id.
          </p>
          <button
            type="button"
            className="capitalize text-[1rem] bg-[#9524FF] border border-[#9524FF] px-6 py-3 rounded-[8px] text-white leading-[24px]"
          >
            learn more
            <ArrowRight
              size={20}
              className="inline-flex ml-2"
            />
          </button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
