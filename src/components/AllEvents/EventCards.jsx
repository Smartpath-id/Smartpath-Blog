import React from "react";
import Dropdown from "../Button/Dropdown";
import Card from "../Card";
import Link from "next/link";

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

const getAllEvents = async (query) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_LOCAL}/event?search=${query}&page=1`,
      {
        cache: "no-store",
      }
    );

    return await response.json();
  } catch (error) {
    return error;
  }
};

const EventCards = async ({ query }) => {
  const { data } = await getAllEvents(query);

  return (
    <section>
      <div className="container px-4 sm:px-16 mx-auto">
        <div className="w-full flex gap-x-4 gap-y-3 sm:gap-y-0 justify-start sm:justify-center md:justify-end items-center my-10 md:my-20 flex-wrap">
          <p className="text-lg">Sesuaikan berdasarkan :</p>

          <Dropdown
            title={"Beasiswa"}
            values={categoryEvent}
            size="w-[277px]"
          />
        </div>

        {/* Cards */}
        <div className="flex justify-center gap-y-10 lg:gap-y-12 xl:gap-y-16 lg:justify-between gap-x-8 flex-wrap">
          {Object.keys(data).length !== 0 ? (
            data.eventServices.map(
              ({ title, description, date_start, poster, slug }, idx) => (
                <Link
                  key={idx}
                  href={{
                    pathname: `/event/${slug}`,
                  }}
                  className="cursor-pointer"
                >
                  <Card
                    key={idx}
                    image={poster || ""}
                    title={title}
                    description={description}
                    date_start={date_start}
                  />
                </Link>
              )
            )
          ) : (
            <div className="space-y-4 mx-auto">
              <h3 className="text-center text-2xl text-slate-800 font-semibold">
                No data found
              </h3>

              <p className="text-center text-lg text-slate-400 font-medium">
                Man day data is empty or Try adjusting your filter
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventCards;
