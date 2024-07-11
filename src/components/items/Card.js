import React from "react";
import classes from "./Card.module.css";
import Image from "next/image";
import Image1 from "../../../public/images/DayPass.png";
import Image2 from "../../../public/images/Desk.jpg";
import Image3 from "../../../public/images/Cabin.jpeg";

function Card({ heading, img, ind }) {
  const Images = [Image1, Image2, Image3];
  return (
    <div className={classes.container}>
      <Image
        className={`${classes.background}`}
        src={Images[ind]}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="hi"
        placeholder="blur"
        fill={true}
      />
      <div className={classes.heading}>{heading}</div>
    </div>
  );
}

export default Card;
