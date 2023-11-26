import Image from "next/image";
import React from "react";
import Vector from "@/assets/icons/Vector.svg";
import Location from "@/assets/icons/location.svg";
import Clocks from "@/assets/icons/Clocks.svg";
import moment from 'moment';

const HeroEvent = ({ data }) => {
  const fileName =
    (data.poster && data.poster.substring(data.poster.indexOf("images"))) || "";

  return (
    <div className="flex gap-x-10 items-start lg:items-end w-full relative z-10 container lg:max-w-7xl mx-auto pt-10 px-4 sm:px-16 lg:px-0 lg:pt-52 md:justify-center  flex-col-reverse lg:flex-row gap-y-10 lg:gap-y-0 2xl:pr-24">
      <Image
        src={`${process.env.NEXT_PUBLIC_URL_LOCAL}/${fileName}`}
        alt="event"
        width={500}
        height={500}
        className="h-[509px] w-[419px] lg:h-[649px] lg:w-[519px]"
        style={{ objectFit: "cover" }}
        priority
      />

      <div className="space-y-9 mb-0 lg:mb-20">
        <div className="w-fit text-lg border border-[#0056A34D] rounded-[10px] text-center px-6 py-1.5 bg-[#EBF2F8]">
          {data.categories.name}
        </div>

        <div className="space-y-6">
          <h2 className="font-semibold text-4xl">{data.title}</h2>

          <div className="flex gap-x-4">
            <Image
              src={Clocks.src}
              width={50}
              height={50}
              className="w-6 h-6 aspect-square"
            />
            <p className="text-[#0056A3] font-medium text-lg">
              {moment(data.date_start).format('DD MMMM YYYY')}
            </p>
          </div>

          <div className="flex gap-x-4">
            <Image
              src={Vector.src}
              width={50}
              height={50}
              className="w-6 h-6 aspect-square"
            />
            <p className="text-[#0056A3] font-medium text-lg">
              {data.kuota}
            </p>
          </div>

          {/* <div className="flex gap-x-4">
            <Image
              src={Location.src}
              width={50}
              height={50}
              className="w-6 h-6 aspect-square"
            />
            <p className="text-[#0056A3] font-medium text-lg">
              Online
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroEvent;
