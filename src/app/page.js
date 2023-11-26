import Banner from "@/components/Home/Banner";
import Hero from "@/components/Home/EventSoon";
import OtherEvents from "@/components/Home/OtherEvents";
import Partners from "@/components/Home/Partners";

export default async function Home() {
  return (
    <main>
      {/* <Banner /> */}
      <Hero />
      {/* <Partners /> */}
      <OtherEvents />
    </main>
  );
}
