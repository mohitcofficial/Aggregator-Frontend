import React from "react";
import classes from "./WhyUsCard.module.css";

function WhyUsCard({ icon, heading, text, right = false }) {
  return (
    <div className={`${classes.container} ${right && classes.right}`}>
      {!right && icon}
      <div className={`${classes.contentContainer}`}>
        <p className={`${classes.heading} ${right && classes.right}`}>
          {heading}
        </p>
        <p className={`${classes.text} ${right && classes.right}`}>{text}</p>
      </div>
      {right && icon}
    </div>
  );
}

export default WhyUsCard;
