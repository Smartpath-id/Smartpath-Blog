import React from "react";
import Dropdown from "../Button/Dropdown";
import { cards } from "../Home/EventSoon";
import Card from "../Card";

const categoryEvent = [
  {
    title: "Event Terbaru",
  },

  {
    title: "Event selesai",
  },

  {
    title: "Beasiswa",
  },

  {
    title: "Webinar",
  },
  {
    title: "Essay & Olimpiade",
  },
  {
    title: "Business case Competition",
  },
];

const EventCards = () => {
  const allCards = Array.from({ length: cards.length }, () =>
    cards.flatMap((card) => ({ ...card }))
  );

  return (
    <section>
      <div className="container px-4 sm:px-0 mx-auto">
        <div className="w-full flex gap-x-4 gap-y-3 sm:gap-y-0 justify-start sm:justify-center md:justify-end items-center my-10 md:my-20 flex-wrap">
          <p className="text-lg">Sesuaikan berdasarkan :</p>

          <Dropdown
            title={"Beasiswa"}
            values={categoryEvent}
            size="w-[277px]"
          />
        </div>

        {/* Cards */}
        <div className="flex justify-center gap-y-10 lg:gap-y-12 xl:gap-y-16 md:justify-between flex-wrap">
          {allCards.map((cards) =>
            cards.map(({ src, title, description, date }, idx) => (
              <Card
                key={idx}
                image={src}
                title={title}
                description={description}
                date={date}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default EventCards;
