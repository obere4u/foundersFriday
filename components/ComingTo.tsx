"use client"

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
    <div className='mt-40 py-40 px-10 bg-[url("/guyonmic_1728x808.png")] bg-cover bg-no-repeat max-w-[1728px] mx-auto h-[808px]'>
      <div className="flex items-center space-x-56">
        <div className="w-[804px]">
          <p className="text-[#EBE9ED] text-[3rem] font-bold leading-[62.5px]">
            Founders Friday is coming to
          </p>

          <p
            className="text-[#A649FF] font-bold text-[8rem] leading-[160px] animate-slideUp"
            key={states[currentStateIndex]} //restarts cycle
          >
            {states[currentStateIndex]}
          </p>
          <p className="text-[#EBE9ED] text-[1.5rem] leading-[28.8px] font-normal my-10">
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
        <div className="w-[594px] h-[554px]">
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
