import React from "react";
import classes from "./page.module.css";
import Banner4 from "@/components/banner/Banner4";
import Image from "next/image";
import NoidaTheme from "../../../../public/images/Noida/NoidaTheme.png";
import LocationCard from "@/components/items/LocationCard";
import VirtualBenefits from "@/components/items/VirtualBenefits";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import LocationContainer from "@/components/delhi/LocationContainer";

export const metadata = {
  title: "Virtual Office Space in Noida for GST & Company Address",
  description:
    "Virtualxcel offers affordable virtual office space in Noida where you get professional GST registration & company address and meeting rooms.",
  robots: "max-image-preview:large",
  canonical: "https://www.coworktown.com/virtual-offices/noida/",
};

function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Banner4 place={"Noida"} />
        <LocationContainer location={"Noida"} />
        <div className={classes.infoContainer}>
          <p className={classes.heading}>
            Welcome to Virtualxcel's newest addition to our range of services -
            Virtual Offices in Noida!
          </p>
          <p className={classes.para}>
            Enjoy the benefits of a prime business address without the overhead
            of a physical space. Our virtual office solutions include mail
            handling, call forwarding, and access to meeting rooms, ensuring a
            professional image and efficient business operations. Enhance your
            business presence with us today!
          </p>
          <p className={classes.para}>
            Join the thriving community of entrepreneurs, startups, and
            professionals who trust Virtualxcel for their virtual office needs.
            Elevate your business presence in Noida without the overhead costs
            of a physical office. Discover the convenience, flexibility, and
            professionalism of Virtualxcel's virtual offices today!
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={NoidaTheme}
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
