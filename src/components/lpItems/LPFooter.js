"use client";
import classes from "./LPFooter.module.css";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import CustomModal from "../Modal";
import Image from "next/image";
import TransparentLogo from "../../../public/images/TransparentLogo2.png";

function LPFooter() {
  const router = useRouter();
  const handleMaintainance = () => {
    toast("Section Under Maintainance!", {
      icon: "⚠️",
    });
  };
  const handleInternalClick = (url) => {
    return () => {
      window.open(url, "_blank");
    };
  };
  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        <div className={`${classes.box1} ${classes.box3}`}>
          <div className={classes.logo}>
            <div className={classes.imageContainer}>
              <Image
                className={classes.image}
                src={TransparentLogo}
                alt="Image"
                fill={true}
                placeholder="blur"
                priority={true}
                quality={true}
              />
            </div>
          </div>
          <div className={classes.slogan}>Collaborate. Create. Cowork.</div>
          <CustomModal>
            <div className={classes.handlesLink}>
              <FacebookIcon className={classes.icon} sx={{ fontSize: 22 }} />
              <InstagramIcon className={classes.icon} sx={{ fontSize: 22 }} />
              <LinkedInIcon className={classes.icon} sx={{ fontSize: 22 }} />
              <TwitterIcon className={classes.icon} sx={{ fontSize: 22 }} />
            </div>
          </CustomModal>
        </div>
        <div className={`${classes.box2} ${classes.box1}`}>
          <div className={classes.heading}>Connect with us</div>

          <div className={classes.option}>
            <CallIcon
              sx={{ color: "rgb(254, 173, 22);", marginRight: "8px" }}
            />
            <p className={classes.text}>+91 9871001079</p>
          </div>
          <div className={classes.option}>
            <EmailIcon
              sx={{ color: "rgb(254, 173, 22);", marginRight: "8px" }}
            />
            <p className={classes.text}>sales@virtualxcel.in</p>
          </div>
          <div className={classes.option2}>
            <div className={classes.text2} style={{ alignItems: "center" }}>
              <LocationOnIcon
                sx={{ color: "rgb(254, 173, 22);", marginRight: "8px" }}
              />
              <p>Lower Ground Floor, Saket Salcon Rasvilas,</p>
            </div>
            <p className={classes.text2} style={{ margin: "0 0 4px 32px" }}>
              Saket District Centre, Sector 6, Pushp Vihar,
            </p>
            <p className={classes.text2} style={{ margin: "0 0 4px 32px" }}>
              Next to Select City Walk Mall, Delhi 110017
            </p>
          </div>
        </div>
      </div>
      {/* <div className={classes.container2}>
        <div className={classes.bottomLeft}>
          Copyright © 2023, UNITY Cowork. All Rights Reserved
        </div>
        <div className={classes.bottomRight}></div>
      </div> */}
    </div>
  );
}

export default LPFooter;
