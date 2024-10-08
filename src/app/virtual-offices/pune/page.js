import React from "react";
import classes from "./page.module.css";
import Banner4 from "@/components/banner/Banner4";
import Image from "next/image";
import PuneTheme from "../../../../public/images/Pune/PuneTheme.png";
import LocationCard from "@/components/items/LocationCard";
import VirtualBenefits from "@/components/items/VirtualBenefits";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import LocationContainer from "@/components/delhi/LocationContainer";

export const metadata = {
  title: "Virtual Offices in Pune",
  keywords:
    "coworking office space in pune, coworking space in pune, virtual office in pune, best coworking space in pune, cheapest coworking space in pune, cheapest virtual office in pune",
  description:
    "Discover most affordable Coworking Spaces in Pune. Join a vibrant community of professionals in a modern workspace designed for collaboration, productivity, and success. Explore our flexible membership options and amenities today.",
};
function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Banner4 place={"Pune"} />
        <LocationContainer location={"Pune"} />
        <div className={classes.infoContainer}>
          <p className={classes.heading}>
            Welcome to Virtualxcel's newest addition to our range of services -
            Virtual Offices in Pune!
          </p>
          <p className={classes.para}>
            Welcome to Virtualxcel's distinguished service - Virtual Offices in
            Pune! Establish a commanding presence in the cultural heart of West
            Bengal without the hassle of a physical workspace. Our virtual
            office solutions offer comprehensive mail management, seamless call
            forwarding, and access to premium meeting spaces, ensuring a
            polished and professional image for your business. Join us and
            thrive in Pune's dynamic business landscape!
          </p>
          <p className={classes.para}>
            Join the thriving community of entrepreneurs, startups, and
            professionals who trust Virtualxcel for their virtual office needs.
            Elevate your business presence in Pune without the overhead costs of
            a physical office. Discover the convenience, flexibility, and
            professionalism of Virtualxcel's virtual offices today!
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={PuneTheme}
            alt="Image"
            fill={true}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw"
          />
        </div>
        <div className={classes.heading0}>
          <span>Virtual Office Benefits</span>
          <p>for Your Business</p>
        </div>
        <VirtualBenefits />
        {/* <FrequentQuestions /> */}
      </div>
      <Footer />
    </>
  );
}

export default page;
