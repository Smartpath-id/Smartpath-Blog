import React from "react";
import event_1 from "@/assets/image/event_1.png";
import event_2 from "@/assets/image/event_2.png";
import event_3 from "@/assets/image/event_3.png";
import Card from "../Card";

export const cards = [
  {
    title: "Beasiswa Smartpath 2023",
    src: event_1.src,
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam ornare euismod massa rhoncus volutpat a. Ut feugiat mattis faucibus semper.",
    date: "10 November 2023",
  },
  {
    title: "Beasiswa Smartpath 2023",
    src: event_2.src,
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam ornare euismod massa rhoncus volutpat a. Ut feugiat mattis faucibus semper.",
    date: "10 November 2023",
  },
  {
    title: "Beasiswa Smartpath 2023",
    src: event_3.src,
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam ornare euismod massa rhoncus volutpat a. Ut feugiat mattis faucibus semper.",
    date: "10 November 2023",
  },
];

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-0">
        <div className="max-w-2xl mx-auto py-12 mt-5 sm:py-20 sm:mt-10 relative z-20 text-center w-full">
          <div className="space-y-6">
            <h2 className="font-semibold text-4xl text-black md:leading-[54px]">
              Event yang akan datang
            </h2>
            <p className="text-lg leading-[27px] text-black">
              Jangan lewatkan event yang akan datang. Pilih event sesuai dengan
              kebuthanmu yang diselenggarakan SmartPath secara Online
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex justify-center gap-y-10 lg:gap-y-12 xl:gap-y-16 md:justify-between flex-wrap">
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

export default Hero;
