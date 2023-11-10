import Clock from "@/assets/icons/Clock";
import Image from "next/image";
import React from "react";

const Card = ({ image, title, description, date = false }) => {
  return (
    <div
      className="bg-white rounded-[20px] w-full sm:w-[335px] lg:w-[395px] overflow-hidden"
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
    >
      <Image
        src={image}
        width={350}
        height={350}
        className="aspect-square w-full"
        alt="event"
        style={{ objectFit: "contain" }}
      />

      <div className="px-4 py-8 space-y-4 md:space-y-6">
        <h4 className="text-[#0056A3] font-semibold text-xl">{title}</h4>
        <p className="text-black text-base">{description}</p>
      </div>

      <div
        className={`${
          date ? "bg-[#0056A3]" : "bg-[#01B313]"
        } px-3.5 py-2 flex items-center gap-x-3 w-full`}
      >
        <Clock className="fill-white stroke-none" />
        <p className="text-white text-lg font-medium">
          {date ? date : "Selesai"}
        </p>
      </div>
    </div>
  );
};

export default Card;
