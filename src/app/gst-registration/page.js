import Banner5 from "@/components/banner/Banner5";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import classes from "./page.module.css";
import ReviewSlider from "@/components/slider/ReviewSlider";
import PremuimLocations from "@/components/items/PremiumLocations";
import PriceCard from "@/components/items/PriceCard";
import ScrollParallax from "@/components/animations/ScrollParallax";
import { BoxData2 } from "../data/PriceCardData";
import GSTBenefits from "@/components/items/GSTBenefits";
import WavyBackground3 from "@/components/background/WavyBackground3";

export const metadata = {
  title: "Quick and Easy GST Registration Services | Virtualxcel",
  description:
    "Get your GST registration done quickly and easily with Virtualxcel. Our expert team ensures hassle-free GST compliance for your business. Focus on growth while we handle the complexities of GST registration. Discover our efficient and tailored GST solutions today.",
  keywords:
    "GST registration, GST compliance, quick GST registration, hassle-free GST, business GST services, Virtualxcel GST, GST solutions",
  author: "Virtualxcel",
};

function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Banner5 value={1} />
        <div className={classes.container2}>
          <WavyBackground3 />
          <div className={classes.headingContainer}>
            <h2 className={classes.heading1}>
              Best Plan For <b>GST Registration</b>
            </h2>
            <h3 className={classes.heading2}>Starting just at &#8377; 999</h3>
          </div>
          <div className={classes.priceContainer}>
            <div className={classes.imagesContainer}>
              <ScrollParallax />
            </div>
            <PriceCard
              price={BoxData2[1].price}
              heading={BoxData2[1].heading}
              points={BoxData2[1].points}
              flag={0}
            />
          </div>
        </div>
        <PremuimLocations />
        <h1 className={classes.heading0}>
          <p>
            Benefits of Registering for
            <span className={classes.bold}>GST</span>
          </p>
        </h1>
        <GSTBenefits />
        <ReviewSlider />
      </div>
      <Footer />
    </>
  );
}

export default page;
