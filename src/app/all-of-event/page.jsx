import EventCards from "@/components/AllEvents/EventCards";
import EventSearch from "@/components/AllEvents/EventSearch";
import React from "react";

const page = ({ searchParams }) => {
  const query = searchParams?.query || "";

  return (
    <main>
      <EventSearch />
      <EventCards query={query} />
    </main>
  );
};

export default page;
