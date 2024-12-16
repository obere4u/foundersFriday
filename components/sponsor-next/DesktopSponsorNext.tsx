import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { cn } from "@/lib/util";
import { whySponsorNext } from "@/constants";
import { ArrowRight } from "lucide-react";

export default function DesktopSponsorNext() {
  return (
    <div className="hidden md:block mt-20">
      <MaxWidthWrapper className="">
        <p className="text-[#5C00B3] text-[1.15rem] lg:text-[1.875rem] font-bold lg:leading-[37.5px] capitalize">
          Sponsor The Next Friday
        </p>
        <h2 className="max-w-[603px] mx-auto my-10 font-bold text-[1.8rem] lg:text-[3.4375rem] text-black lg:leading-[68.75px] capitalize ">
          Why Sponsor Founders Friday?
        </h2>

        <div className=" pt-10 flex md:flex-col lg:flex-row items-start space-y-10 lg:space-y-0 lg:space-x-[110px]">
          {/* left */}
          <div className="animate-smoothBounce max-w-[600px] mx-auto w-full bg-[#FDF7FF] border border-[#CA92FF] shadow-elevated rounded-[20px] p-10 grid gap-10 grid-cols-2">
            {whySponsorNext.map((why, index) => (
              <div
                key={why.title + index}
                className={cn(
                  "rounded-full px-2 border border-[#A649FF] size-[250px] flex flex-col items-center justify-center",
                  index % 4 === 0 || index % 4 === 3
                    ? "bg-[#DCB6FF]"
                    : "bg-[#EDDBFF]"
                )}
              >
                <h2 className="capitalize text-[#0A0A0B] text-[1.5rem] text-center leading-[28.8px]  font-bold ">
                  {why.title}
                </h2>
                <p className="font-normal text-[1rem] text-center text-[#3C3641] leading-[21.6px] mt-5 px-2">
                  {why.description}
                </p>
              </div>
            ))}
          </div>
          {/* right */}
          <div className="max-w-[670px] w-full">
            <p className="font-bold capitalize text-[1.75rem] leading-[33.6px] text-[#0A0A0B]">
              How To Sponsor
            </p>
            <em className="text-[#605668] text-[1.5rem] font-normal my-1">
              Ready to Make an Impact?
            </em>
            <p className="text-[1.125rem] font-normal leading-[21.6px] text-[#2C2830]">
              Fill out the form below or contact us at{" "}
              <span className="text-[#5C00B3]">
                [contact email/phone number]
              </span>{" "}
              to learn more about how you can sponsor the next Founders Friday
            </p>
            <form action="#">
              {/* name and company */}
              <div className="my-10 flex flex-col md:flex-row item-center space-y-5 md:space-y-0 md:space-x-10">
                {/* name */}
                <div className="w-full flex flex-col space-y-[10px]">
                  <label
                    htmlFor="name"
                    className="capitalize text-black text-[1.125rem] font-semibold leading-[21.6px]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full name"
                    className="text-black px-[22px] py-[25px] border border-[#121212] rounded-[10px] "
                  />
                </div>
                {/* company */}
                <div className="w-full flex flex-col space-y-[10px]">
                  <label
                    htmlFor="companyName"
                    className="capitalize text-black text-[1.125rem] font-semibold leading-[21.6px]"
                  >
                    company <span className="lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    placeholder="Company name"
                    className=" text-black px-[22px] py-[25px] border border-[#121212] rounded-[10px] "
                  />
                </div>
              </div>
              {/* email and phone */}
              <div className="flex flex-col md:flex-row item-center space-y-5 md:space-y-0 md:space-x-10">
                {/* email */}
                <div className="w-full flex flex-col space-y-[10px]">
                  <label
                    htmlFor="nameemail"
                    className="capitalize text-black text-[1.125rem] font-semibold leading-[21.6px]"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    className="text-black px-[22px] py-[25px] border border-[#121212] rounded-[10px] "
                  />
                </div>
                {/* phonphone */}
                <div className="w-full flex flex-col space-y-[10px]">
                  <label
                    htmlFor="phone"
                    className="capitalize text-black text-[1.125rem] font-semibold leading-[21.6px]"
                  >
                    phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone number"
                    className=" text-black px-[22px] py-[25px] border border-[#121212] rounded-[10px] "
                  />
                </div>
              </div>
              <button
                type="button"
                className="mt-10 capitalize text-[1.5rem] bg-[#9524FF] border border-[#9524FF] p-4 rounded-[10px] text-white leading-[28.8px]"
              >
                learn more{" "}
                <ArrowRight
                  size={23.5}
                  className="inline-flex"
                />
              </button>
            </form>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
