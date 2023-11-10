import React from "react";
import other_event_1 from "@/assets/image/other_event_1.png";
import other_event_2 from "@/assets/image/other_event_2.png";
import other_event_3 from "@/assets/image/other_event_3.png";
import Card from "../Card";

const cards = [
  {
    title: "Beasiswa Smartpath 2023",
    src: other_event_1.src,
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam ornare euismod massa rhoncus volutpat a. Ut feugiat mattis faucibus semper.",
    date: "10 November 2023",
  },
  {
    title: "Beasiswa Smartpath 2023",
    src: other_event_2.src,
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam ornare euismod massa rhoncus volutpat a. Ut feugiat mattis faucibus semper.",
    date: "10 November 2023",
  },
  {
    title: "Beasiswa Smartpath 2023",
    src: other_event_3.src,
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam ornare euismod massa rhoncus volutpat a. Ut feugiat mattis faucibus semper.",
    date: false,
  },
];

const OtherEvents = () => {
  return (
    <section className="md:py-10">
      <div className="container mx-auto px-4 sm:px-0 space-y-10 sm:space-y-20">
        <div className="flex flex-wrap md:flex-nowrap gap-y-4 justify-between items-center gap-x-2 sm:gap-x-4">
          <h2 className="text-2xl sm:text-3xl font-semibold basis-auto lg:basis-1/4 md:order-1">
            Event lainnya
          </h2>
          <div className="border-2 border-[#FFA700] basis-full md:basis-1/2 lg:basis-full h-1 sm:h-0 order-last md:order-2" />
          <button className="text-white bg-[#FFA700] py-3 px-3.5 md:px-0 lg:px-2 basis-auto md:basis-1/3 lg:basis-2/6 xl:basis-1/4 rounded-[10px] md:order-3">
            <span className="font-semibold text-lg text-white">
              Lihat lebih banyak
            </span>
          </button>
        </div>

        {/* Cards */}
        <div className="flex justify-center gap-y-8 md:justify-between flex-wrap">
          {cards.map(({ src, title, description, date }, idx) => (
            <Card
              key={idx}
              image={src}
              title={title}
              description={description}
              date={date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherEvents;
