import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="mt-48 flex flex-col md:flex-row space-y-20 md:space-y-0 md:h-[564px] items-center md:space-x-20">
      {/* left */}
      <div className="w-full max-w-[698px]">
        <Image
          src={"/may-edition-about_698x564.png"}
          width={698}
          height={564}
          alt="founders friday may edition."
          className="w-full h-full"
        />
      </div>
      {/* right */}
      <div className="relative border-[3px] rounded-[20px] h-[464px] w-full border-[#8300FF] pl-4 md:pl-8">
        <div className="absolute -top-[34px] bottom-0 bg-[#FDF7FF]  w-full h-[504px]  flex flex-col ">
          <h2 className="text-3xl font-bold text-black capitalize text-[2.8rem] leading-[56.25px]">
            who are we?
          </h2>
          <p className="mt-5 md:mt-10 font-normal text-[0.85rem] lg:text-[1.1rem] 2xl:text-[1.5rem] leading-[28.8px] w-[90%] text-[#8E8E93]">
            Born from the vibrant startup ecosystem of Abuja, we recognized the
            need for a consistent, high-quality networking platform where
            founders, innovators, and tech enthusiasts could connect, share
            ideas, and foster collaboration.
          </p>
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 items-center md:space-x-10 mt-5 md:mt-10">
            <button className="px-10 h-[75px] flex items-center justify-center space-x-4 bg-[#A649FF] rounded-full lg:text-[1.1rem] 2xl:text-[1.5rem] leading-[28.8px] hover:bg-opacity-85 ">
              Register
              <ArrowRight
                size={30.63}
                className="ml-4"
              />
            </button>
            <button className="px-10 h-[75px] flex items-center justify-center space-x-4 border border-[#A649FF] text-[#A649FF] rounded-full lg:text-[1.1rem] 2xl:text-[1.5rem] leading-[28.8px] hover:text-opacity-75 transition-colors duration-150 ease-in">
              Register
              <Image
                src="/MoneyBag_35x35.svg"
                width={35}
                height={35}
                alt="money bag svg."
                className="ml-4 w-[35px] h-[35px]"
              />
            </button>
          </div>
          <p className="mt-auto text-[0.65rem] lg:text-[1.05rem] leading-[28.8px] font-bold text-black">
            Founder's Friday is more than just a meetup — it's a movement.
          </p>
        </div>
      </div>
    </section>
  );
}
