import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { ArrowRight } from "lucide-react";

export default function DesktopViewRegister() {
  return (
    <section className="hidden md:block mt-40 relative h-auto mb-[450px]">
      <MaxWidthWrapper>
        <h2 className="font-bold text-black text-[2.8125rem] leading-[56.25px] text-center">
          Register And Be Part of Our Community
        </h2>
        <p className="text-[1.5rem] max-w-[1079px] mx-auto font-normal text-[#8E8E93] leading-[28.8px] text-center mt-1">
          Join our community of over 1000+ founders, developers, and tech
          junkies in general.
          <br />
          Be inspired by people who live to inspire!
        </p>
      </MaxWidthWrapper>
      <div className="left-[50%] w-full transform -translate-x-[50%] top-48 absolute ">
        <div className="relative max-w-[1743.5px] h-[279.62px] mx-auto">
          <Image
            src={"/imageTrail3_1743x279.svg"}
            width={1743}
            height={279}
            alt="image trail"
            className="w-full h-full object-cover"
          />
        </div>
        {/* images on top trail */}
        {/* left */}
        <div className="bg-transparent border-[3px] border-[#8300FF] flex items-center justify-center rounded-full size-[138px] absolute top-7 left-5 2xl:top-16 2xl:left-36">
          <div className="size-[110.4px] rounded-full">
            <Image
              src={"/imagetrailpic_110x110.png"}
              width={110.4}
              height={110.4}
              alt="A handsome black man."
              className="size-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="bg-transparent border-[3px] border-[#2F6C62] flex items-center justify-center rounded-full size-[138px] absolute -top-14 left-48 2xl:-top-16 2xl:left-[340px]">
          <div className="size-[110.4px] rounded-full">
            <Image
              src={"/imagetrailpic_110x110.png"}
              width={110.4}
              height={110.4}
              alt="A handsome black man."
              className="size-full object-cover rounded-full"
            />
          </div>
        </div>
        {/* middle */}
        <div className="flex items-center space-x-10 absolute top-16 left-[450px] 2xl:top-16 2xl:left-[680px]">
          <div className="bg-transparent border-[3px] border-[#FF3B30] flex items-center justify-center rounded-full size-[138px]">
            <div className="size-[110.4px] rounded-full">
              <Image
                src={"/imagetrailpic_110x110.png"}
                width={110.4}
                height={110.4}
                alt="A handsome black man."
                className="size-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="bg-transparent border-[3px] border-[#007AFF] flex items-center justify-center rounded-full size-[138px] ">
            <div className="size-[110.4px] rounded-full">
              <Image
                src={"/imagetrailpic_110x110.png"}
                width={110.4}
                height={110.4}
                alt="A handsome black man."
                className="size-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="bg-transparent border-[3px] border-[#FF3B30] flex items-center justify-center rounded-full size-[138px]">
            <div className="size-[110.4px] rounded-full">
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
        {/* right */}
        <div className="bg-transparent border-[3px] border-[#FF9500] flex items-center justify-center rounded-full size-[138px] absolute top-7 right-5 2xl:top-16 2xl:right-36">
          <div className="size-[110.4px] rounded-full">
            <Image
              src={"/imagetrailpic_110x110.png"}
              width={110.4}
              height={110.4}
              alt="A handsome black man."
              className="size-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="bg-transparent border-[3px] border-[#30B0C7] flex items-center justify-center rounded-full size-[138px] absolute -top-14 right-48 2xl:-top-16 2xl:right-[340px]">
          <div className="size-[110.4px] rounded-full">
            <Image
              src={"/imagetrailpic_110x110.png"}
              width={110.4}
              height={110.4}
              alt="A handsome black man."
              className="size-full object-cover rounded-full"
            />
          </div>
        </div>
        {/* btn */}
        <div className="w-fit mx-auto">
          <button
            type="button"
            className="border border-[#A649FF] text-[#A649FF] text-[1.5rem] font-normal leading-[28.8px] py-5 px-[70px] mx-auto rounded-[40px] "
          >
            Register Now <ArrowRight className="inline-flex" />
          </button>
        </div>
      </div>
    </section>
  );
}
