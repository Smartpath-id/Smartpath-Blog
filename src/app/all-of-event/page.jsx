import EventCards from "@/components/AllEvents/EventCards";
import EventSearch from "@/components/AllEvents/EventSearch";
import React from "react";

const page = () => {
  return (
    <main>
      <EventSearch />
      <EventCards />
    </main>
  );
};

export default page;
