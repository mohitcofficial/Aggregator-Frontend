import React from "react";
import classes from "./Facilities.module.css";
import Image from "next/image";
import BackgroundImage from "../../../public/images/Background5.png";

function Facilities({ data }) {
  return (
    <div className={classes.container}>
      {/* <Image
        className={classes.image}
        src={BackgroundImage}
        fill
        alt="image"
        placeholder="blur"
        sizes="(max-width: 768px) 100vw"
      /> */}
      <div className={classes.heading}>
        <span className={classes.heading1}>Facilites included</span>
        <span className={classes.heading2}>Free Of Cost</span>
      </div>
      <div className={classes.container1}>
        {data.map((item, index) => (
          <div key={index} className={classes.box}>
            <div className={classes.imageContainer}>{item.icon}</div>
            <span className={classes.title}>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facilities;
