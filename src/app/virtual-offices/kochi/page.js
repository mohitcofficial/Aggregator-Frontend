import React from "react";
import classes from "./page.module.css";
import Banner4 from "@/components/banner/Banner4";
import Image from "next/image";
import DelhiImage from "../../../../public/images/Delhi/DelhiTheme.png";
import LocationCard from "@/components/items/LocationCard";
import VirtualBenefits from "@/components/items/VirtualBenefits";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import LocationContainer from "@/components/delhi/LocationContainer";

export const metadata = {
  title: "Virtual Offices in Kochi",
  keywords:
    "coworking office space in kochi, coworking space in banglore, virtual office in kochi, best coworking space in kochi, cheapest coworking space in kochi, cheapest virtual office in kochi",
  description:
    "Discover most affordable Coworking Spaces in Kochi. Join a vibrant community of professionals in a modern workspace designed for collaboration, productivity, and success. Explore our flexible membership options and amenities today.",
};
function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Banner4 place={"Kochi"} />
        <LocationContainer location={"Kochi"} />
        <div className={classes.infoContainer}>
          <p className={classes.heading}>
            Welcome to Virtualxcel's newest addition to our range of services -
            Virtual Offices in Kochi!
          </p>
          <p className={classes.para}>
            Welcome to Virtualxcel's esteemed service - Virtual Offices in
            Kochi! Position your business strategically in the heart of Kerala,
            without the constraints of a traditional office setup. Our virtual
            office solutions provide seamless mail handling, efficient call
            forwarding, and access to well-appointed meeting spaces, enabling
            you to project a professional image and conduct business with ease.
            Embrace the flexibility and convenience of virtual offices with
            Virtualxcel in Kochi!
          </p>
          <p className={classes.para}>
            Join the thriving community of entrepreneurs, startups, and
            professionals who trust Virtualxcel for their virtual office needs.
            Elevate your business presence in Kochi without the overhead costs
            of a physical office. Discover the convenience, flexibility, and
            professionalism of Virtualxcel's virtual offices today!
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={DelhiImage}
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
