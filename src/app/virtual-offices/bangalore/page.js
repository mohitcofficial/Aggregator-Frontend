import React from "react";
import classes from "./page.module.css";
import Banner4 from "@/components/banner/Banner4";
import Image from "next/image";
import BangaloreTheme from "../../../../public/images/Bangalore/BangaloreTheme.png";
import LocationCard from "@/components/items/LocationCard";
import VirtualBenefits from "@/components/items/VirtualBenefits";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import LocationContainer from "@/components/delhi/LocationContainer";

export const metadata = {
  title: "Virtual Offices in Bangalore",
  keywords:
    "coworking office space in Bangalore, coworking space in banglore, virtual office in bangalore, best coworking space in bangalore, cheapest coworking space in bangalore, cheapest virtual office in bangalore",
  description:
    "Discover most affordable Coworking Spaces in Bangalore. Join a vibrant community of professionals in a modern workspace designed for collaboration, productivity, and success. Explore our flexible membership options and amenities today.",
};
function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Banner4 place={"Bangalore"} />
        <LocationContainer location={"Bangalore"} />
        <div className={classes.infoContainer}>
          <p className={classes.heading}>
            Welcome to Virtualxcel's newest addition to our range of services -
            Virtual Offices in Bangalore!
          </p>
          <p className={classes.para}>
            Welcome to Virtualxcel's newest offering - Virtual Offices in
            Bangalore! Obtain a prestigious business address without the need
            for a physical office. Our virtual office solutions feature mail
            handling, call forwarding, and meeting room access, ensuring a
            professional appearance and efficient business operations. Enhance
            your business presence with us today!
          </p>
          <p className={classes.para}>
            Join the thriving community of entrepreneurs, startups, and
            professionals who trust Virtualxcel for their virtual office needs.
            Elevate your business presence in Bangalore without the overhead
            costs of a physical office. Discover the convenience, flexibility,
            and professionalism of Virtualxcel's virtual offices today!
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={BangaloreTheme}
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
        <FrequentQuestions />
      </div>
      <Footer />
    </>
  );
}

export default page;
