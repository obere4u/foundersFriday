"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const states = ["Abuja", "Kaduna", "Kano"];

export default function ComingTo() {
  const [currentStateIndex, setCurrentStateIndex] = useState(0);

  // Cycle through states
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStateIndex((prevIndex) => (prevIndex + 1) % states.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='mt-40 py-20 border px-10 bg-[url("/guyonmic_1728x808.png")] bg-center md:bg-cover bg-no-repeat max-w-[1728px] mx-auto max-h-[808px]'>
      <div className="lg:flex items-center 2xl:space-x-56">
        <div className="2xl:w-[804px] lg:w-[50%] w-full">
          <p className="text-[#EBE9ED] text-[2rem] lg:text-[3.5rem] font-bold lg:leading-[62.5px]">
            Founders Friday is coming to
          </p>

          <p
            className="text-[#A649FF] font-bold text-[2.5rem] lg:text-[5rem] 2xl:text-[8rem] lg:leading-[160px] animate-slideUp"
            key={states[currentStateIndex]} //restarts cycle
          >
            {states[currentStateIndex]}
          </p>
          <p className="text-[#EBE9ED] text-[0.8rem] lg:text-[1.25rem] 2xl:text-[1.5rem] leading-[28.8px] font-normal my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
            dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
            suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
            turpis. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. 
          </p>
          <button
            type="button"
            className="border border-[#A649FF] rounded-[40px] py-[20px] px-[70px] text-[#A649FF] font-semibold text-[1.5rem] leading-[28.8px] capitalize hover:text-opacity-75 transition-colors duration-150 ease-in-out"
          >
            register{" "}
            <ArrowRight
              size={35}
              className="inline-flex space-x-[10px]"
            />
          </button>
        </div>
        <div className="hidden lg:block w-[50%] 2xl:w-[594px] h-[554px]">
          <Image
            src={"/logo/navbar-logo_81x80.svg"}
            width={81}
            height={80}
            alt="founders friday logo."
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
