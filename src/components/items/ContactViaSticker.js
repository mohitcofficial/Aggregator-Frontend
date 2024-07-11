"use client";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import classes from "./ContactViaSticker.module.css";

function ContactViaSticker() {
  const fontSize = { xs: 26, sm: 28, md: 32, lg: 32 };
  const handleClick = (url) => {
    return () => {
      window.open(url, "_blank");
    };
  };
  return (
    <div className={classes.container}>
      <FacebookIcon
        className={classes.icon}
        sx={{ fontSize: fontSize, color: "#1877F2" }}
        onClick={handleClick("https://www.facebook.com/coworktown")}
      />
      <InstagramIcon
        className={classes.icon}
        sx={{ fontSize: fontSize, color: "#d62976" }}
        onClick={handleClick(
          "https://www.instagram.com/coworktownindia/?next=%2F"
        )}
      />
      <LinkedInIcon
        onClick={handleClick("https://linkedin.com/company/coworktownindia")}
        className={classes.icon}
        sx={{ fontSize: fontSize, color: "#0072b1 " }}
      />
      <TwitterIcon
        onClick={handleClick("https://twitter.com/coworktownindia")}
        className={classes.icon}
        sx={{ fontSize: fontSize, color: "#00acee" }}
      />
    </div>
  );
}

export default ContactViaSticker;
