"use client";
import classes from "./Footer.module.css";
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
import Link from "next/link";

function Footer() {
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
            <p className={`${classes.firstPart}`}>Virtualxcel</p>
          </div>
          <div className={classes.slogan}>Collaborate. Create. Cowork.</div>
          <div className={classes.handlesLink}>
            <FacebookIcon
              onClick={handleInternalClick(
                "https://www.facebook.com/coworktown"
              )}
              className={classes.icon}
              sx={{ fontSize: 22 }}
            />
            <InstagramIcon
              onClick={handleInternalClick(
                "https://www.instagram.com/coworktownindia/?next=%2F"
              )}
              className={classes.icon}
              sx={{ fontSize: 22 }}
            />
            <LinkedInIcon
              onClick={handleInternalClick(
                "https://linkedin.com/company/coworktownindia"
              )}
              className={classes.icon}
              sx={{ fontSize: 22 }}
            />
            <TwitterIcon
              onClick={handleInternalClick(
                "https://twitter.com/coworktownindia"
              )}
              className={classes.icon}
              sx={{ fontSize: 22 }}
            />
          </div>
        </div>
        <div className={classes.box1}>
          <div className={classes.heading}>Services</div>
          <div className={classes.content}>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/gst-registration"
              >
                GST Registration
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/virtual-offices"
              >
                Virtual Office
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/business-registration"
              >
                Business Registration
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/mailing-address"
              >
                Mailing Address
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/coworking-spaces"
              >
                Coworking Spaces
              </Link>
            </p>
          </div>
        </div>
        <div className={classes.box1}>
          <div className={classes.heading}>Pages</div>
          <div className={classes.content}>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/"
              >
                Home
              </Link>
            </p>
            <p className={classes.links}>About Us</p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/contactus"
              >
                Contact Us
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/partnership"
              >
                Partner With Us
              </Link>
            </p>
            <p onClick={handleMaintainance} className={classes.links}>
              Blog
            </p>
          </div>
        </div>
        <div className={classes.box1}>
          <div className={classes.heading}>Others</div>
          <div className={classes.content}>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/terms-and-conditions"
              >
                Terms & Conditions
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/refund-policy"
              >
                Refund Policy
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/cookies-policy"
              >
                Cookies Policy
              </Link>
            </p>
          </div>
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
            <p className={classes.text}>sales@coworktown.com</p>
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
      <div className={classes.container2}>
        <div className={classes.bottomLeft}>
          Copyright © 2024, Virtualxcel. All Rights Reserved
        </div>
        <div className={classes.bottomRight}>Virtualxcel Solutions Pvt Ltd</div>
      </div>
    </div>
  );
}

export default Footer;
