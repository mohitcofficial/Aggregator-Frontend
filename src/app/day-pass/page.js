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
  title: "Experience Flexibility with Our Day Passes  | Virtualxcel",
  description:
    "Enjoy a productive day at VirtualXcel's coworking spaces, tailored to your dynamic work style. Get the flexibility you need with our convenient day passes.",
  keywords:
    "day pass, coworking space, flexible workspace, VirtualXcel, productivity, work style",
  author: "Virtualxcel",
};

function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Banner5 value={3} />
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
