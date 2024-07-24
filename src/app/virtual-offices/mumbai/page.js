import React from "react";
import classes from "./page.module.css";
import Banner4 from "@/components/banner/Banner4";
import Image from "next/image";
import MumbaiTheme from "../../../../public/images/Mumbai/MumbaiTheme.png";
import LocationCard from "@/components/items/LocationCard";
import VirtualBenefits from "@/components/items/VirtualBenefits";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import LocationContainer from "@/components/delhi/LocationContainer";

export const metadata = {
  title: "Virtual Offices in Mumbai",
  keywords:
    "coworking office space in mumbai, coworking space in banglore, virtual office in mumbai, best coworking space in mumbai, cheapest coworking space in mumbai, cheapest virtual office in mumbai",
  description:
    "Discover most affordable Coworking Spaces in Mumbai. Join a vibrant community of professionals in a modern workspace designed for collaboration, productivity, and success. Explore our flexible membership options and amenities today.",
};
function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Banner4 place={"Mumbai"} />
        <LocationContainer location={"Mumbai"} />
        <div className={classes.infoContainer}>
          <p className={classes.heading}>
            Welcome to Virtualxcel's newest addition to our range of services -
            Virtual Offices in Mumbai!
          </p>
          <p className={classes.para}>
            Welcome to Virtualxcel's newest offering - Virtual Offices in
            Mumbai! Establish a prestigious business address in the heart of the
            city without the expense of a physical office. Our virtual office
            services include professional mail handling, call forwarding, and
            access to meeting rooms. Boost your business image and streamline
            your operations with us today!
          </p>
          <p className={classes.para}>
            Join the thriving community of entrepreneurs, startups, and
            professionals who trust Virtualxcel for their virtual office needs.
            Elevate your business presence in Mumbai without the overhead costs
            of a physical office. Discover the convenience, flexibility, and
            professionalism of Virtualxcel's virtual offices today!
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={MumbaiTheme}
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
