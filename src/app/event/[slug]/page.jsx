import Banner from "@/components/DetailEvent/Banner";
import ContentEvent from "@/components/DetailEvent/Content";
import HeroEvent from "@/components/DetailEvent/Hero";
import React from "react";
import Image from "next/image";
import NotFound from "@/assets/icons/NotFound.svg";

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
        <div className="w-full -mb-10 px-4 md:px-0">
          <Image
            width={250}
            height={250}
            src={NotFound.src}
            className="mx-auto my-20 w-72 sm:w-80"
            alt="not found"
            style={{
              objectFit: "contain",
            }}
          />

          <div className="space-y-4 mx-auto">
            <h3 className="text-center text-2xl text-slate-800 font-semibold">
              Not Found
            </h3>

            <p className="text-center text-lg text-slate-400 font-medium">
              Data is empty or Try adjusting your filter
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default page;
