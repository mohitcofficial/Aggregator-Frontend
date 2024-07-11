"use client";
import React from "react";
import classes from "./ContactItem.module.css";

function ContactItem({ heading, icon, text, buttonText = null }) {
  const openLinkInNewTab = () => {
    const newTab = window.open("https://wa.me/9871001076", "_blank");
    newTab.focus();
  };
  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        <div>{icon}</div>
        <div className={classes.heading}>{heading}</div>
        <div className={classes.text}>{text}</div>
        {buttonText === "Chat" && (
          <div onClick={openLinkInNewTab} className={classes.button}>
            {buttonText}
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactItem;
