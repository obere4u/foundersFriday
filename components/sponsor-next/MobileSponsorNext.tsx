import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { cn } from "@/lib/util";
import { whySponsorNext } from "@/constants";
import { ArrowRight } from "lucide-react";

export default function MobileSponsorNext() {
  return (
    <div className="px-4 py-6 mt-10">
      <MaxWidthWrapper className="flex flex-col items-center w-full">
        <p className="text-[#5C00B3] text-[1rem] font-bold leading-[24px] capitalize self-start ">
          Sponsor The Next Friday
        </p>
        <h2 className="max-w-[90%] mx-auto my-6 font-bold text-[1.5rem] text-black leading-[32px] capitalize text-center">
          Why Sponsor Founders Friday?
        </h2>

        {/* Cards Section */}
        <div className="w-full grid gap-6 grid-cols-2 sm:grid-cols-2 mb-6">
          {whySponsorNext.map((why, index) => (
            <div
              key={why.title + index}
              className={cn(
                "rounded-[15px] p-4 border border-[#A649FF] flex flex-col items-center bg-[#FDF7FF]",
                index % 4 === 0 || index % 4 === 3
                  ? "bg-[#DCB6FF]"
                  : "bg-[#EDDBFF]"
              )}
            >
              <h2 className="capitalize text-[#0A0A0B] text-[1rem] font-bold text-center leading-[20px]">
                {why.title}
              </h2>
              <p className="font-normal text-[0.875rem] text-center text-[#3C3641] leading-[18px] mt-3">
                {why.description}
              </p>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="w-full">
          <p className="font-bold capitalize text-[1.125rem] leading-[24px] text-[#0A0A0B] mb-2 text-center">
            How To Sponsor
          </p>
          <p className="text-[1rem] font-normal text-[#2C2830] leading-[20px] text-center mb-6">
            Ready to Make an Impact? Fill out the form below or contact us at
            <span className="text-[#5C00B3]">
              {" "}
              [contact email/phone number]
            </span>
          </p>
          <form className="space-y-4">
            <div className="mb-5">
              {/* Name and Company */}
              <div className="flex flex-col space-y-4">
                <div className="w-full flex flex-col">
                  <label
                    htmlFor="name"
                    className="capitalize text-black text-[1rem] font-semibold leading-[18px] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full name"
                    className="text-black px-4 py-3 border border-[#121212] rounded-[10px] text-[0.875rem]"
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label
                    htmlFor="companyName"
                    className="capitalize text-black text-[1rem] font-semibold leading-[18px] mb-2"
                  >
                    Company <span className="lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    placeholder="Company name"
                    className="text-black px-4 py-3 border border-[#121212] rounded-[10px] text-[0.875rem]"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="flex flex-col space-y-4">
                <div className="w-full flex flex-col">
                  <label
                    htmlFor="email"
                    className="capitalize text-black text-[1rem] font-semibold leading-[18px] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    className="text-black px-4 py-3 border border-[#121212] rounded-[10px] text-[0.875rem]"
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label
                    htmlFor="phone"
                    className="capitalize text-black text-[1rem] font-semibold leading-[18px] mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone number"
                    className="text-black px-4 py-3 border border-[#121212] rounded-[10px] text-[0.875rem]"
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              className="mt-5 w-full capitalize text-[1rem] bg-[#9524FF] border border-[#9524FF] p-3 rounded-[8px] text-white leading-[24px]"
            >
              Learn more
              <ArrowRight
                size={20}
                className="inline-flex ml-2"
              />
            </button>
          </form>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
