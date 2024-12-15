import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { reviews } from "@/constants";

export default function Reviews() {
  return (
    <MaxWidthWrapper>
      <section className="pl-20">
        <div className="flex items-center pl-40">
          <div className="flex flex-col space-y-5 items-center justify-center w-full">
            <h2 className="capitalize font-bold text-[2.5rem]  leading-[56.25px] text-center text-black">
              What Do Our Attendees Have To Say?
            </h2>
            <p className="text-[#8E8E93] text-[1.35rem] font-normal leading-[28.8px]">
              Well See For Yourself!
            </p>
          </div>
          <div className="flex items-center space-x-[30px] mt-20">
            <button className="rounded-full border-[3.06px] border-[#E2A7F7] flex items-center justify-center p-[18.52px]">
              <ArrowLeft
                size={48.84}
                stroke="#000000"
              />
            </button>
            <button className="rounded-full flex items-center justify-center border-[3.06px] border-[#E2A7F7] p-[18.52px]">
              <ArrowRight
                size={48.84}
                stroke="#000000"
              />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 place-items-center gap-10 mt-10">
          {reviews.map((review, index) => (
            <div
              key={review.reviewer + index}
              className="max-w-[414px] flex flex-col items-center justify-center text-center"
            >
              <div className="bg-transparent border-[3px] border-[#8300FF] flex items-center justify-center rounded-full size-[138px] ">
                <div className="size-[110.4px] rounded-full">
                  <Image
                    src={`/${review.image}`}
                    width={110.4}
                    height={110.4}
                    alt={`Picture of ${review.reviewer}`}
                    className="size-full object-cover rounded-full"
                  />
                </div>
              </div>
              <h3 className="capitalize text-black text-[1.65rem] font-semibold my-5 leading-[37.5px]">
                {review.reviewer}
              </h3>
              <p className="text-[1.35rem] font-normal leadin-[28.8px] text-black">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
