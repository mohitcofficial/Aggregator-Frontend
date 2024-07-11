"use client";
import React from "react";
import { useRouter } from "next/navigation";
import classes from "./ReadMoreButton.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import toast from "react-hot-toast";

function ReadMoreButton2() {
  const router = useRouter();
  const handleMaintainance = () => {
    toast("Section Under Maintainance!", {
      icon: "⚠️",
    });
  };
  return (
    <div onClick={handleMaintainance} className={classes.readMoreButton}>
      Read More
      <ArrowForwardIcon />
    </div>
  );
}

export default ReadMoreButton2;
