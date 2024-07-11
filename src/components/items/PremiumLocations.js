import React from "react";
import classes from "./PremiumLocations.module.css";
import HaryanaImage from "../../../public/images/Gurgaon/Gurgaon.jpg";
import MaharashtraImage from "../../../public/images/Mumbai/Mumbai.jpg";
import BangaloreImage from "../../../public/images/Bangalore/Bangalore.jpeg";
import KeralaImage from "../../../public/images/Kerala/Kerala2.jpeg";
import KolkataImage from "../../../public/images/Kolkata/Kolkata.jpg";
import HyderabadImage from "../../../public/images/Hyderabad/Hyderabad2.jpeg";
import NoidaImage from "../../../public/images/Noida/Noida2.jpeg";
import DelhiImage from "../../../public/images/Delhi.jpg";
import Image from "next/image";
import Link from "next/link";

function PremuimLocations() {
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
              <Link
                style={{ color: "transparent", cursor: "auto" }}
                href="/virtual-offices/gurgaon"
              >
                <Image
                  className={classes.image}
                  src={HaryanaImage}
                  alt="Image"
                  style={{ cursor: "inherit" }}
                  fill={true}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw"
                />
              </Link>
            </div>
            <div className={`${classes.card2} ${classes.card}`}>
              <p className={classes.text}>Delhi</p>
              <Link
                style={{ color: "transparent", cursor: "auto" }}
                href="/virtual-offices/delhi"
              >
                <Image
                  className={classes.image}
                  src={DelhiImage}
                  alt="Image"
                  fill={true}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw"
                />
              </Link>
            </div>
          </div>
          <div className={classes.box1}>
            <div className={`${classes.card3} ${classes.card}`}>
              <p className={classes.text}>Bangalore</p>
              <Link
                style={{ color: "transparent", cursor: "auto" }}
                href="/virtual-offices/bangalore"
              >
                <Image
                  className={classes.image}
                  src={BangaloreImage}
                  alt="Image"
                  fill={true}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw"
                />
              </Link>
            </div>
            <div className={`${classes.card3} ${classes.card}`}>
              <p className={classes.text}>Kolkata</p>
              <Link
                style={{ color: "transparent", cursor: "auto" }}
                href="/virtual-offices/kolkata"
              >
                <Image
                  className={classes.image}
                  src={KolkataImage}
                  alt="Image"
                  fill={true}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw"
                />
              </Link>
            </div>
            <div className={`${classes.card3} ${classes.card}`}>
              <p className={classes.text}>Hyderabad</p>
              <Link
                style={{ color: "transparent", cursor: "auto" }}
                href="/virtual-offices/hyderabad"
              >
                <Image
                  className={classes.image}
                  src={HyderabadImage}
                  alt="Image"
                  fill={true}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw"
                />
              </Link>
            </div>
          </div>
          <div className={classes.box1}>
            <div className={`${classes.card4} ${classes.card}`}>
              <p className={classes.text}>Noida</p>
              <Link
                style={{ color: "transparent", cursor: "auto" }}
                href="/virtual-offices/noida"
              >
                <Image
                  className={classes.image}
                  src={NoidaImage}
                  alt="Image"
                  fill={true}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw"
                />
              </Link>
            </div>
            <div className={`${classes.card5} ${classes.card}`}>
              <p className={classes.text}>Mumbai</p>
              <Link
                style={{ color: "transparent", cursor: "auto" }}
                href="/virtual-offices/mumbai"
              >
                <Image
                  className={classes.image}
                  src={MaharashtraImage}
                  alt="Image"
                  fill={true}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremuimLocations;
