"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { reviews } from "@/constants";
import { useWindowResizer } from "@/hooks/useWindowRizer";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { cardsPerView } = useWindowResizer();

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex + cardsPerView >= reviews.length;

  const handlePrev = () => {
    if (!isAtStart) {
      setCurrentIndex((prev) => prev - cardsPerView);
    }
  };

  const handleNext = () => {
    if (!isAtEnd) {
      setCurrentIndex((prev) => prev + cardsPerView);
    }
  };

  const visibleReviews = reviews.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <MaxWidthWrapper>
      <section className="lg:pl-20 pt-20 md:pt-0">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between lg:pl-40">
          <div className="flex flex-col space-y-5 items-center w-full text-center">
            <h2 className="capitalize font-bold text-[1.875rem] lg:text-[2.5rem] leading-[1.5] text-black">
              What Do Our Attendees Have To Say?
            </h2>
            <p className="text-[#8E8E93] text-[1rem] md:text-[1.35rem] font-normal leading-[1.5]">
              Well, See For Yourself!
            </p>
          </div>
          <div className="flex items-center space-x-5 md:space-x-[30px] mt-8 md:mt-0">
            <button
              onClick={handlePrev}
              disabled={isAtStart}
              className="rounded-full border-[3px] border-[#E2A7F7] flex items-center justify-center p-4 md:p-[18.52px] disabled:cursor-not-allowed"
            >
              <ArrowLeft
                size={36}
                stroke="#000000"
              />
            </button>
            <button
              onClick={handleNext}
              disabled={isAtEnd}
              className="rounded-full flex items-center justify-center border-[3px] border-[#E2A7F7] p-4 md:p-[18.52px] disabled:cursor-not-allowed"
            >
              <ArrowRight
                size={36}
                stroke="#000000"
              />
            </button>
          </div>
        </div>
        <div className="mt-10 flex justify-center space-x-4">
          {visibleReviews.map((review, index) => (
            <div
              key={review.review + index}
              className="max-w-full md:max-w-[414px] flex flex-col items-center justify-center text-center"
            >
              <div className="bg-transparent border-[3px] border-[#8300FF] flex items-center justify-center rounded-full w-[110px] h-[110px] md:w-[138px] md:h-[138px]">
                <div className="w-[90px] h-[90px] md:w-[110.4px] md:h-[110.4px] rounded-full">
                  <Image
                    src={`/${review.image}`}
                    width={110.4}
                    height={110.4}
                    alt={`Picture of ${review.reviewer}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <h3 className="capitalize text-black text-[1.35rem] md:text-[1.65rem] font-semibold my-4 md:my-5 leading-[1.5]">
                {review.reviewer}
              </h3>
              <p className="text-[1rem] md:text-[1.35rem] font-normal leading-[1.5] text-black">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
