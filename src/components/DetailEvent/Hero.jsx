import Image from "next/image";
import React from "react";
import event from "@/assets/image/event_3_full.png";
import Clock from "@/assets/icons/Clock";

const HeroEvent = () => {
  return (
    <div className="flex gap-x-10 items-start lg:items-end w-full relative z-10 container lg:max-w-7xl mx-auto pt-10 px-4 sm:px-0 lg:px-0 lg:pt-52 md:justify-center xl:justify-normal flex-col-reverse lg:flex-row gap-y-10 lg:gap-y-0">
      <Image
        src={event.src}
        alt="event"
        width={500}
        height={500}
        className="h-[509px] w-[419px] lg:h-[649px] lg:w-[519px]"
        style={{ objectFit: "cover" }}
        priority
      />

      <div className="space-y-9 mb-0 lg:mb-20">
        <div className="w-fit text-lg border border-[#0056A34D] rounded-[10px] text-center px-6 py-1.5 bg-[#EBF2F8]">
          Beasiswa
        </div>

        <div className="space-y-6">
          <h2 className="font-semibold text-4xl">Beasiswa Smartpath</h2>

          <div className="flex gap-x-4">
            <Clock />
            <p className="text-[#0056A3] font-medium text-lg">
              10 November 2023
            </p>
          </div>

          <div className="flex gap-x-4">
            <Clock />
            <p className="text-[#0056A3] font-medium text-lg">
              10 November 2023
            </p>
          </div>

          <div className="flex gap-x-4">
            <Clock />
            <p className="text-[#0056A3] font-medium text-lg">
              10 November 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroEvent;
