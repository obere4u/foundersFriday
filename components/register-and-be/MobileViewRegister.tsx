import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { ArrowRight } from "lucide-react";

export default function MobileViewRegister() {
  return (
    <section className="md:hidden mt-20 ">
      <MaxWidthWrapper className="pb-10">
        <h2 className="font-bold text-black text-[1.875rem] leading-[2.25rem] text-center">
          Register And Be Part of Our Community
        </h2>
        <p className="text-[1rem] max-w-[90%] mx-auto font-normal text-[#8E8E93] leading-[1.5rem] text-center mt-2">
          Join our community of over 1000+ founders, developers, and tech
          enthusiasts. Be inspired by people who live to inspire!
        </p>
      </MaxWidthWrapper>

      {/* Center Image */}
      <div className="relative w-full mt-6 -z-10">
        <Image
          src={"/imageTrail3_1743x279.svg"}
          width={400}
          height={64}
          alt="image trail"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full flex items-center justify-center space-x-8 -mt-24">
        <div className="bg-transparent border-[3px] border-[#FF3B30] flex items-center justify-center rounded-full size-[108px]">
          <div className="size-[80.4px] rounded-full">
            <Image
              src={"/imagetrailpic_110x110.png"}
              width={110.4}
              height={110.4}
              alt="A handsome black man."
              className="size-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="bg-transparent border-[3px] border-[#007AFF] flex items-center justify-center rounded-full size-[108px] ">
          <div className="size-[80.4px] rounded-full">
            <Image
              src={"/imagetrailpic_110x110.png"}
              width={110.4}
              height={110.4}
              alt="A handsome black man."
              className="size-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="bg-transparent border-[3px] border-[#FF3B30] flex items-center justify-center rounded-full size-[108px]">
          <div className="size-[80.4px] rounded-full">
            <Image
              src={"/imagetrailpic_110x110.png"}
              width={110.4}
              height={110.4}
              alt="A handsome black man."
              className="size-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="w-fit mx-auto mt-6">
        <button
          type="button"
          className="border border-[#A649FF] text-[#A649FF] text-[1rem] font-normal leading-[1.5rem] py-3 px-[2.5rem] rounded-[20px]"
        >
          Register Now <ArrowRight className="inline-flex" />
        </button>
      </div>
    </section>
  );
}
