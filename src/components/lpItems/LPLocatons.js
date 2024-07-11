import React from "react";
import classes from "../items/PremiumLocations.module.css";
import HaryanaImage from "../../../public/images/Gurgaon/Gurgaon.jpg";
import MaharashtraImage from "../../../public/images/Mumbai/Mumbai.jpg";
import BangaloreImage from "../../../public/images/Bangalore/Bangalore.jpeg";
import KeralaImage from "../../../public/images/Kerala/Kerala2.jpeg";
import KolkataImage from "../../../public/images/Kolkata/Kolkata.jpg";
import HyderabadImage from "../../../public/images/Hyderabad/Hyderabad2.jpeg";
import NoidaImage from "../../../public/images/Noida/Noida2.jpeg";
import DelhiImage from "../../../public/images/Delhi.jpg";
import Image from "next/image";

function LPLocations() {
  return (
    <div className={classes.container}>
      <div className={classes.marginBlock}>
        <p className={classes.heading}>
          Our
          <span>Premium Locations</span>
        </p>
        <div className={classes.locationContainer}>
          <div className={classes.box1}>
            <div className={`${classes.card1} ${classes.card}`}>
              <p className={classes.text}>Gurgaon</p>
              <Image
                className={classes.image}
                src={HaryanaImage}
                alt="Image"
                style={{ cursor: "inherit" }}
                fill={true}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <div className={`${classes.card2} ${classes.card}`}>
              <p className={classes.text}>Delhi</p>
              <Image
                className={classes.image}
                src={DelhiImage}
                alt="Image"
                fill={true}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </div>
          <div className={classes.box1}>
            <div className={`${classes.card3} ${classes.card}`}>
              <p className={classes.text}>Bangalore</p>
              <Image
                className={classes.image}
                src={BangaloreImage}
                alt="Image"
                fill={true}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <div className={`${classes.card3} ${classes.card}`}>
              <p className={classes.text}>Kolkata</p>
              <Image
                className={classes.image}
                src={KolkataImage}
                alt="Image"
                fill={true}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <div className={`${classes.card3} ${classes.card}`}>
              <p className={classes.text}>Hyderabad</p>
              <Image
                className={classes.image}
                src={HyderabadImage}
                alt="Image"
                fill={true}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </div>
          <div className={classes.box1}>
            <div className={`${classes.card4} ${classes.card}`}>
              <p className={classes.text}>Noida</p>
              <Image
                className={classes.image}
                src={NoidaImage}
                alt="Image"
                fill={true}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <div className={`${classes.card5} ${classes.card}`}>
              <p className={classes.text}>Mumbai</p>
              <Image
                className={classes.image}
                src={MaharashtraImage}
                alt="Image"
                fill={true}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LPLocations;
