import Banner from "@/components/DetailEvent/Banner";
import ContentEvent from "@/components/DetailEvent/Content";
import HeroEvent from "@/components/DetailEvent/Hero";
import React from "react";

const page = () => {
  return (
    <main>
      <Banner>
        <HeroEvent />
      </Banner>

      <ContentEvent />
    </main>
  );
};

export default page;
