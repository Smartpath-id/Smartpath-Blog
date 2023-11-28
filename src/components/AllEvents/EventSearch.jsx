"use client";

import ChevronLeft from "@/assets/icons/ChevronLeft";
import React from "react";
import Search from "../Search";
import MagnifyingGlass from "@/assets/icons/MagnifyingGlass";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const EventSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <section className="my-10 md:my-14">
      <div className="container px-4 sm:px-16 mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-y-4 gap-x-4">
          <div className="flex gap-x-4 md:gap-x-6 items-center">
            <Link href={"/"} className="cursor-pointer">
              <ChevronLeft className="stroke-[2.5] stroke-[#0056A3] !w-8 !h-8" />
            </Link>
            <h3 className="text-[#0056A3] font-bold text-xl">
              Semua Event Smartpathh
            </h3>
          </div>

          <Search
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            defaultValue={searchParams.get("query")?.toString()}
            icon={<MagnifyingGlass className="!w-11 !h-11 stroke-[#0056A3]" />}
          />
        </div>
      </div>
    </section>
  );
};

export default EventSearch;
