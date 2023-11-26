import { validateDate } from "@/utils";
import Image from "next/image";
import React from "react";
import Clock from "@/assets/icons/Clock.svg";

const Card = ({ image, title, description, date_start }) => {
  const { date, check } = validateDate(date_start);
  const fileName = (image && image.substring(image.indexOf("images"))) || "";

  return (
    <div
      className="bg-white rounded-[20px] w-full sm:w-[335px] lg:w-[395px] overflow-hidden flex
      flex-col justify-between"
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_URL_LOCAL}/${fileName}`}
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
          check ? "bg-[#01B313]" : "bg-[#0056A3]"
        } px-3.5 py-2 flex items-center gap-x-3 w-full`}
      >
        <Image
          src={Clock.src}
          width={50}
          height={50}
          className="w-6 h-6 aspect-square"
        />
        <p className="text-white text-lg font-medium">
          {check ? "Selesai" : date}
        </p>
      </div>
    </div>
  );
};

export default Card;
