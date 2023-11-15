import React from "react";
import bannerDetail from "@/assets/image/bannerDetail.jpg";
import Image from "next/image";

const Banner = ({ children }) => {
  return (
    <section className="w-full relative h-[425px] mb-[31rem] lg:mb-[32.813rem]">
      <Image
        src={bannerDetail.src}
        priority
        alt="banner"
        className="w-full"
        fill
        style={{ objectFit: "cover" }}
      />
      {children}
    </section>
  );
};

export default Banner;
