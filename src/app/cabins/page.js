import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import PremuimLocations from "@/components/items/PremiumLocations";
import classes from "./page.module.css";
import Banner5 from "@/components/banner/Banner5";
import WhyUs from "@/components/items/WhyUs";

import dynamic from "next/dynamic";
const ReviewSlider = dynamic(
  () => import("../../components/slider/ReviewSlider"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Private Cabins for Premium Comfort | VirtualXcel",
  description:
    "Elevate your workspace with VirtualXcel's exclusive private cabins, perfect for teams and individuals seeking privacy and comfort.",
  keywords:
    "private cabins, coworking space, premium comfort, VirtualXcel, private workspace, team workspace, cheap cabins new me, cheapest private cabins, best private cabins",
  author: "Virtualxcel",
};

function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Banner5 value={5} />
        <PremuimLocations />
        <p className={classes.heading0}>
          Why Choose
          <span> Virtualxcel ?</span>
        </p>
        <WhyUs />
        <ReviewSlider />
      </div>
      <Footer />
    </>
  );
}

export default page;
