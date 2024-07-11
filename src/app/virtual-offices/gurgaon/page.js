import React from "react";
import classes from "./page.module.css";
import Banner4 from "@/components/banner/Banner4";
import Image from "next/image";
import GurgaonTheme from "../../../../public/images/Gurgaon/GurgaonTheme.png";
import LocationCard from "@/components/items/LocationCard";
import VirtualBenefits from "@/components/items/VirtualBenefits";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import LocationContainer from "@/components/delhi/LocationContainer";

export const metadata = {
  title: "Virtual Office Space in Gurgaon for GST & Company Address",
  description:
    "Secure premium virtual office space in Gurgaon with Virtualxcel. Enjoy professional GST registration, company address, and mail handling at affordable rates.",
  robots: "max-image-preview:large",
  canonical: "https://virtualxcel.in/virtual-offices/gurgaon/",
};
function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Banner4 place="Gurgaon" />
        <LocationContainer location={"Gurgaon"} />
        <div className={classes.infoContainer}>
          <p className={classes.heading}>
            Welcome to Virtualxcel's newest addition to our range of services -
            Virtual Offices in Gurgaon!
          </p>
          <p className={classes.para}>
            Welcome to Virtualxcel's newest addition to our range of services -
            Virtual Offices in Gurgaon!
          </p>
          <p className={classes.para}>
            Virtual Offices in Gurgaon! Experience the flexibility of a
            prestigious business address without the need for a physical office.
            Our virtual office solutions offer mail handling, call forwarding,
            and access to meeting rooms, providing you with a professional image
            and seamless business operations. Join us and elevate your business
            presence today! Join the thriving community of entrepreneurs,
            startups, and professionals who trust Virtualxcel for their virtual
            office needs. Elevate your business presence in Gurgaon without the
            overhead costs of a physical office. Discover the convenience,
            flexibility, and professionalism of Virtualxcel's virtual offices
            today!
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={GurgaonTheme}
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
