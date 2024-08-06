import React from "react";
import classes from "./LocationCard.module.css";
import BookButton from "@/utils/buttons/BookButton";
import GetQuoteButton from "@/utils/buttons/GetQuoteButton";
import CustomModal3 from "../Modal3";

import LocationSlider from "../slider/LocationSlider";
// import dynamic from "next/dynamic";
// const LocationSlider = dynamic(
//   () => import("../../components/slider/LocationSlider"),
//   {
//     ssr: false,
//   }
// );

function LocationCard({
  id,
  url,
  name,
  businessPrice,
  gstPrice,
  mailingPrice,
}) {
  return (
    <div className={classes.container}>
      <LocationSlider name={name} id={id} />
      <div className={classes.cardInfo}>
        <div className={classes.heading}>{name}</div>
        <div className={classes.priceItem}>
          <div>Business Registration</div>
          <div>Price</div>
        </div>
        <div className={classes.prices}>
          <div className={classes.priceItem}>
            <div className={classes.item}>Business Registration</div>
            <div className={classes.item}> {businessPrice} / year</div>
          </div>
          <div className={classes.priceItem}>
            <div className={classes.item}>GST Registration</div>
            <div className={classes.item}> {gstPrice} / year</div>
          </div>
          <div className={classes.priceItem}>
            <div className={classes.item}>Mailing Address</div>
            <div className={classes.item}> {mailingPrice} / year</div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <BookButton url={url} />
          <CustomModal3>
            <GetQuoteButton />
          </CustomModal3>
        </div>
      </div>
    </div>
  );
}

export default LocationCard;
