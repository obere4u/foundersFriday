"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQS } from "@/constants";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <MaxWidthWrapper className="mt-40 mb-20">
      <h2 className="text-black font-bold text-[2.65rem] leading-[56.25px]">
        FAQs
      </h2>
      <div className="mt-10 lg:ml-20 grid lg:grid-cols-2 gap-10">
        {FAQS.map((FAQ, index) => (
          <div
            key={FAQ.question + index}
            className="pb-4 overflow-hidden transition-all duration-300"
          >
            {/* Question */}
            <div
              className="flex items-center space-x-4 cursor-pointer text-[#340066]"
              onClick={() => toggleQuestion(index)}
            >
              <p className="font-semibold text-[1.35rem] leading-[28.8px]">
                {FAQ.question}
              </p>
              {openIndex === index ? (
                <ChevronUp size={24} />
              ) : (
                <ChevronDown size={24} />
              )}
            </div>
            {/* Answer */}
            <div
              className={`mt-3 text-[#350066d3] font-medium text-[1.1rem] leading-[28.8px] transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p>{FAQ.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
