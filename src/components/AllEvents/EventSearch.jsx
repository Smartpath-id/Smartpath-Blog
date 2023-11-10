import ChevronLeft from "@/assets/icons/ChevronLeft";
import React from "react";
import Search from "../Search";
import MagnifyingGlass from "@/assets/icons/MagnifyingGlass";

const EventSearch = () => {
  return (
    <section className="my-10 md:my-14">
      <div className="container px-4 sm:px-0 mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-y-4 gap-x-4">
          <div className="flex gap-x-4 md:gap-x-6 items-center">
            <ChevronLeft className="stroke-[2.5] stroke-[#0056A3] !w-8 !h-8" />
            <h3 className="text-[#0056A3] font-bold text-xl">
              Semua Event Smartpathh
            </h3>
          </div>

          <Search
            icon={<MagnifyingGlass className="!w-11 !h-11 stroke-[#0056A3]" />}
          />
        </div>
      </div>
    </section>
  );
};

export default EventSearch;
