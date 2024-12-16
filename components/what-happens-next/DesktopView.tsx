import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { ArrowRight } from "lucide-react";

export default function DesktopView() {
  return (
    <section className="hidden lg:block relative w-full mt-96">
      <div className="w-full">
        <Image
          src={"/imageTrail2_1910x1432.svg"}
          width={1190}
          height={1432}
          alt="svg of a trail "
          className="w-full"
        />
      </div>
      <MaxWidthWrapper className="left-[50%] w-full transform -translate-x-[50%] absolute top-[35%]">
        {/* left side */}
        <div className="w-[804px] ">
          <div className="max-w-[603px]">
            <p className="text-[#5C00B3] text-[1.15rem] lg:text-[1.875rem] font-bold leading-[37.5px] capitalize">
              Founders Friday
            </p>
            <h2 className="font-bold text-[1.8rem] lg:text-[3.4375rem] text-black leading-[68.75px] capitalize">
              What Happens At Founders Friday
            </h2>
          </div>
          <p className="text-[#4C4452] lg:text-[1.1rem] 2xl:text-[1.5rem] font-normal leading-[28.8px] my-10 w-full md:w-[75%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
            dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
            suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
            turpis. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. 
          </p>
          <button
            type="button"
            className="capitalize text-[1.5rem] bg-[#9524FF] border border-[#9524FF] p-4 rounded-[10px] text-white leading-[28.8px]"
          >
            learn more{" "}
            <ArrowRight
              size={23.5}
              className="inline-flex"
            />
          </button>
        </div>
        {/* right side */}

        <div className="animate-bounce absolute top-0 right-5 max-w-[361px]">
          <Image
            src={"/whatHappensImage1_361x450.png"}
            width={361}
            height={450}
            alt="founders friday."
            className="object-cover"
          />
        </div>
        <div className="animate-bounce absolute top-48 right-[169px] max-w-[380px]">
          <Image
            src={"/whatHappensImage2_380x470.png"}
            width={361}
            height={450}
            alt="founders friday."
            className="object-cover"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
