import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { ArrowRight} from "lucide-react";

export default function LearningExperience() {
  return (
    <div className="pt-20 mb-20">
      <MaxWidthWrapper className=" max-h-[564px] flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:items-center lg:space-x-[55px]">
        <div className="lg:min-w-[596px] h-[564px] rounded-[20px]">
          <Image
            src={"/experiencePic_795x564.jpg"}
            width={795}
            height={564}
            alt="Image of the previours founders friday"
            className="w-full object-conver rounded-[20px]"
          />
        </div>
        <div className="max-w-[564px] lg:-mt-28">
          <p className="font-semibold text-[1.5rem] leading-[28.8px] text-black">
            At Founder&apos;s Friday, Every Friday Is a Learning Experience!
          </p>
          <p className="my-10 text-[1rem] font-semibold leading-[21.6px] text-black">
            Join us in our mission to transform ideas into impact and shape the
            future of Nigeria&apos;s startup landscape.
          </p>
          <div className="w-fit">
            <button
              type="button"
              className="border border-[#A649FF] bg-[#A649FF] text-white hover:bg-opacity-75 text-[1.5rem] font-normal leading-[28.8px] py-5 px-[70px] mx-auto rounded-[40px] "
            >
              Register Now <ArrowRight className="inline-flex" />
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
