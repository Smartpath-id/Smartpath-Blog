import React from "react";
import Link from "next/link";
import Card from "../Card";

// hit api events
const getAllEvents = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_LOCAL}/event`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

const Hero = async () => {
  const { data } = await getAllEvents();
  const currentDate = new Date();

  const eventComming = data.eventServices
    .filter((event) => {
      const startDate = new Date(event.date_start);
      return startDate >= currentDate;
    })
    .slice(0, 3);

  return (
    <section>
      <div className="container mx-auto sm:px-16">
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
        <div className="flex justify-center gap-y-10 lg:gap-y-12 xl:gap-y-16 lg:justify-between gap-x-8 flex-wrap">
          {eventComming.map(
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
                  image={poster}
                  title={title}
                  description={description}
                  date_start={date_start}
                />
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
