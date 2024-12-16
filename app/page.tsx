import AboutUs from "@/components/AboutUs";
import ComingTo from "@/components/ComingTo";
import FAQs from "@/components/FAQs";
import LearningExperience from "@/components/LearningExperience";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import RegisterAndBe from "@/components/register-and-be/RegisterAndBe";
import Reviews from "@/components/Reviews";
import SponsorNext from "@/components/sponsor-next/SponsorNext";
import WhatHappensAt from "@/components/what-happens-next/WhatHappensAt";
import { sponsorsImages } from "@/constants";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <MaxWidthWrapper className="w-full flex-1 relative">
        {/* left side */}
        <section className=" flex ">
          <main className="px-4 sm:pl-14 pt-[150px] sm:pt-[200px] z-[90] w-full animate-slideInLeft flex flex-col gap-6 sm:gap-8 items-center sm:items-start">
            <div className="max-w-full sm:max-w-[822px] text-center sm:text-left">
              <p className="first-letter:capitalize font-semibold text-[0.875rem] lg:text-[0.9rem] 2xl:text-[1.125rem] leading-[21.6px] text-background">
                Join our premier monthly meetup for startup founders and tech
                visionaries
              </p>
              <h1 className="mb-4 mt-3 md:mt-0 sm:mb-5 capitalize text-[#5C00B3] font-bold text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[2.33rem] 2xl:text-[3.125rem] leading-[1.2] sm:leading-[62.5px]">
                Connect, Collaborate, Innovate!
              </h1>
              <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] text-left 2xl:text-[1.5rem] text-background font-normal leading-[1.6] sm:leading-[36px] mx-auto sm:mx-0 w-full max-w-[622px]">
                Every last Friday of the month, we bring together the brightest
                minds in our local tech ecosystem. Whether you're a seasoned
                entrepreneur or just starting your journey, Founder's Friday is
                your launchpad for new ideas, valuable connections, and
                game-changing opportunities.
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <button
                type="button"
                className="cursor-pointer flex items-center justify-center sm:justify-start space-x-2 sm:space-x-[10px] text-[#9524FF] text-[1rem] sm:text-[1.5rem] leading-[33.6px] font-normal capitalize border-[2px] border-[#9524FF] py-3 px-5 sm:p-5 rounded-[20px] sm:rounded-[40px] hover:text-opacity-75 transition-colors duration-100 ease-in-out group group-hover:text-opacity-75"
              >
                <span>Register For Our Next Event</span>
                <Image
                  src={"/double-right-arrow_40x40.svg"}
                  width={24}
                  height={24}
                  alt="double right arrow"
                  className="object-cover group-hover:text-opacity-75 cursor-pointer"
                />
              </button>
              <p className="mt-4 sm:mt-5 mb-10 sm:mb-20 text-[0.875rem] sm:text-base text-[#6750A4] font-semibold leading-[1.2] w-[80%] md:w-full sm:leading-[19.2px] drop-shadow-lg">
                Join Us for our next meetup on the 26th of July 2024
              </p>
              <div className="flex items-center md:space-x-2">
                {sponsorsImages.map((sponsorsImage, index) => (
                  <div
                    key={sponsorsImage.src + index}
                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto"
                  >
                    <Image
                      src={`/sponsors/${sponsorsImage.src}`}
                      width={80}
                      height={80}
                      alt="Sponsor logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start space-x-2 mt-10 md:mt-5">
                <p className="text-[0.75rem] sm:text-[0.875rem] text-background font-bold leading-[16.8px]">
                  Become a collaborator today
                </p>
                <SquareArrowOutUpRight
                  size={20}
                  stroke="#212121"
                />
              </div>
            </div>
          </main>

          {/* right side */}
          <main className="hidden lg:block absolute right-20 -z-10">
            <div className="relative w-[997px] h-[1125.5px] -ml-[498px] mt-[53px]">
              <Image
                src={"imageTrailHero_997x1125.svg"}
                width={997}
                height={1125.5}
                alt="image trail vector."
                className="w-full h-full object-cover "
              />
            </div>
            <div className="absolute top-[150px] right-56 w-[361.8px] height-[387.32px]">
              <Image
                src={"/image-with-play_807x853.png"}
                width={807}
                height={853}
                alt="Image of founders fridays may edition"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-[250px] -right-7 w-[361.8px] height-[387.32px]">
              <Image
                src={"/group-image_858x898.png"}
                width={858}
                height={898}
                alt="Image of founders fridays may edition"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-[590px] right-76 w-[201px] height-[215.01px]">
              <Image
                src={"/white-bg-ladies_477x499.png"}
                width={477}
                height={499}
                alt="Image of founders fridays may edition"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-[750px] right-40 w-[100.5px] height-[107.25px]">
              <Image
                src={"/white-bg-group_250x260.png"}
                width={250}
                height={260}
                alt="Image of founders fridays may edition"
                className="w-full h-full object-cover"
              />
            </div>
          </main>
        </section>

        {/* about us */}
        <AboutUs />
      </MaxWidthWrapper>
      {/* what happends at */}
      <WhatHappensAt />
      <SponsorNext />
      <ComingTo />
      <RegisterAndBe />
      <LearningExperience />
      <Reviews />
      <FAQs />
    </div>
  );
}
