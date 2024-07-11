import React from "react";
import classes from "./WhyCoworking.module.css";
import ReadMoreButton from "@/utils/buttons/ReadMoreButton";
import WhyCoworkingImage from "../../../public/images/WhyCoworking.jpg";
import Image from "next/image";

function WhyCoworking() {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={WhyCoworkingImage}
          alt="Image"
          fill={true}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw"
        />
      </div>
      <div className={classes.container2}>
        <div className={classes.heading}>
          Why is
          <span>Coworking Important?</span>
        </div>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            Networking opportunities and collaborations.
          </li>
          <li className={classes.listItem}>
            Flexibility in workspace options and memberships.
          </li>
          <li className={classes.listItem}>
            Cost-effectiveness and reduced overheads.
          </li>
          <li className={classes.listItem}>
            Increased productivity and motivation.
          </li>
          <li className={classes.listItem}>
            Accesalt="Picture of the author"s to shared resources and amenities.
          </li>
          <li className={classes.listItem}>Sense of community and support.</li>
        </ul>
        <div className={classes.buttonContainer}>
          <ReadMoreButton />
        </div>
      </div>
    </div>
  );
}

export default WhyCoworking;
