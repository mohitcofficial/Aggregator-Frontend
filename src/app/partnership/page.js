import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
import PartnershipImage from "../../../public/images/Partnership.jpg";
import ConnectButton from "@/utils/buttons/ConnectButton";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Partner With Us",
  description:
    "Explore exciting partnership opportunities with Cowork Town. Join forces with us to create innovative programs, events, and initiatives that empower professionals and businesses. Let's collaborate for mutual success.",
};

function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Image
          src={PartnershipImage}
          alt="img"
          fill
          sizes="(max-width: 768px) 100vw"
          placeholder="blur"
          className={classes.image}
        />
        <div className={classes.content}>
          <div className={classes.heading}>
            <span className={classes.heading1}>
              <span>Collaborate with</span>
              <span className={classes.gradientText}>Cowork Town</span>
              <span>:</span>
            </span>
            <span> Partner with Us</span>
          </div>
          <div className={classes.subHeading}>
            Thank you for expressing your interest in partnering with Team
            CoWork. We’d love to have you onboard with us.
          </div>
          <div className={classes.text}>
            At Cowork Town, we are passionate about fostering meaningful
            collaborations and expanding horizons. We believe in the power of
            partnerships to create shared value and drive mutual success. As
            pioneers in the coworking and virtual office space, we are excited
            about the prospect of joining forces with innovative organizations
            like yours.
          </div>
          <ConnectButton />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
