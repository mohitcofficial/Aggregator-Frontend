import React from "react";
import classes from "./WhyUsCard.module.css";

function WhyUsCard({ icon, heading, text }) {
  return (
    <div className={classes.container}>
      {icon}
      <p className={classes.heading}>{heading}</p>
      <p className={classes.text}>{text}</p>
    </div>
  );
}

export default WhyUsCard;
