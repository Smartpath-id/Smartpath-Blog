import Banner from "@/components/DetailEvent/Banner";
import ContentEvent from "@/components/DetailEvent/Content";
import HeroEvent from "@/components/DetailEvent/Hero";
import React from "react";

const getEvent = async (slug) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_LOCAL}/event/${slug}`,
      {
        cache: "no-store",
      }
    );

    return await response.json();
  } catch (error) {
    return error;
  }
};

const page = async ({ params }) => {
  const { slug } = params;
  const { data } = await getEvent(slug);

  return (
    <main>
      {Object.keys(data).length !== 0 ? (
        <>
          <Banner>
            <HeroEvent data={data} />
          </Banner>

          <ContentEvent data={data} />
        </>
      ) : (
        <h1>NOT Found</h1>
      )}
    </main>
  );
};

export default page;
