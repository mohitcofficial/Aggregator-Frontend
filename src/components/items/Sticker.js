"use client";

import React from "react";
import classes from "./Sticker.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function Sticker({ name, img, redirect, icon }) {
  const gradientStyle = {
    transition: "none",
    background:
      "linear-gradient(90deg, rgba(36, 0, 0, 1) 0%, rgba(233, 157, 24, 1) 0%, rgba(245, 40, 185, 1) 100%)",
  };
  const router = useRouter();
  const handleClick = () => {
    if (icon) {
      toast("Section Under Maintainance!", {
        icon: "⚠️",
      });
      return;
    }
    router.push(redirect);
  };
  return (
    <div onClick={handleClick} className={classes.container}>
      <div className={classes.imageContainer} style={icon && gradientStyle}>
        {icon ? (
          icon
        ) : (
          <Image className={classes.image} src={img} alt="image" />
        )}
      </div>
      <p className={classes.name}>{name}</p>
    </div>
  );
}

export default Sticker;
