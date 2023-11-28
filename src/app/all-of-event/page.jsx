import EventCards from "@/components/AllEvents/EventCards";
import EventSearch from "@/components/AllEvents/EventSearch";
import React from "react";

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
    return { data: null };
  }
};

const getCategory = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_LOCAL}/category`,
      {
        cache: "no-store",
      }
    );

    return response.json();
  } catch (error) {
    return { data: null };
  }
};

const page = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const { data: events } = await getAllEvents(query);
  const { data: categories } = await getCategory();

  return (
    <main>
      <EventSearch />
      <EventCards events={events} categories={categories} query={query} />
    </main>
  );
};

export default page;
