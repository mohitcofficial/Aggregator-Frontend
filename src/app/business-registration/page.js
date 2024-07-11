import React from "react";
import classes from "./page.module.css";
import Banner5 from "@/components/banner/Banner5";
import Documents from "@/components/items/Documents";
import { BoxData2 } from "../data/PriceCardData";
import PriceCard from "@/components/items/PriceCard";
import ScrollParallax from "@/components/animations/ScrollParallax";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ReviewSlider from "@/components/slider/ReviewSlider";
import PremuimLocations from "@/components/items/PremiumLocations";
import BusinessBenefits from "@/components/items/BusinessBenefits";

export const metadata = {
  title: "Best Business Registration Services",
  description:
    "Simplify your business registration process with Virtualxcel's Virtual Office. Our efficient services help you establish or expand your venture seamlessly. Focus on growth while we handle the complexities of registration. Explore our tailored solutions today.",
  keywords:
    "business registration services, company registration, start a business, business setup, register a company, business incorporation, new business registration, online business registration, easy business registration, business registration process, business registration support, business registration experts, corporate registration, business registration solutions, professional business registration, virtual office for business registration, register your business today, business registration assistance, hassle-free business registration",
  author: "Virtualxcel",
};

function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Banner5 value={0} />
        <div className={classes.container2}>
          <div className={classes.headingContainer}>
            <h2 className={classes.heading1}>
              Best Plan For <b>Business Registration</b>
            </h2>
            <h3 className={classes.heading2}>Starting just at &#8377; 999</h3>
          </div>
          <div className={classes.priceContainer}>
            <div className={classes.imagesContainer}>
              <ScrollParallax />
            </div>
            <PriceCard
              price={BoxData2[0].price}
              heading={BoxData2[0].heading}
              points={BoxData2[0].points}
              flag={0}
            />
          </div>
        </div>
        <Documents />
        <PremuimLocations />
        <h1 className={classes.heading0}>
          <p>
            Benefits of
            <span className={classes.bold}>Company Registration</span>
          </p>
        </h1>
        <BusinessBenefits />
        <ReviewSlider />
      </div>
      <Footer />
    </>
  );
}

export default page;
