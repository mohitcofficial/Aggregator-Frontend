"use client";
import React from "react";
import { useRouter } from "next/navigation";
import classes from "./ReadMoreButton.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import toast from "react-hot-toast";
import Link from "next/link";

function ReadMoreButton2() {
  const router = useRouter();
  const handleMaintainance = () => {
    toast("Section Under Maintainance!", {
      icon: "⚠️",
    });
  };
  return (
    <div onClick={handleMaintainance} className={classes.readMoreButton}>
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          color: "inherit",
        }}
        href="https://blog.virtualxcel.in/"
      >
        Read More
        <ArrowForwardIcon />
      </Link>
    </div>
  );
}

export default ReadMoreButton2;
