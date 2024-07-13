"use client";

import React, { useState } from "react";
import classes from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import TransparentLogo from "../../../public/images/TransparentLogo4.png";
import Link from "next/link";

function Header({ dark = false }) {
  const router = useRouter();
  const path = usePathname();
  const [hamMenuOpen, setHamMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("");
  const [navbarBg, setNavbarBg] = useState("transparent");
  const [navBorder, setNavBorder] = useState(false);
  const [dropDownActive, setDropDownActive] = useState(false);

  useEffect(() => {
    const parts = path.split("/").filter((part) => part !== "");
    const lastElement = parts[parts.length - 1];
    if (!lastElement) {
      setActiveNavItem("home");
    } else if (lastElement === "virtual-offices") {
      setActiveNavItem("virtual-offices");
    } else if (lastElement === "coworking-spaces") {
      setActiveNavItem("coworking-spaces");
    } else if (lastElement === "partnership") {
      setActiveNavItem("partnership");
    } else if (lastElement == "contact-us") {
      setActiveNavItem("contact");
    } else if (lastElement == "business-registration") {
      setActiveNavItem("business-registration");
    } else if (lastElement == "gst-registration") {
      setActiveNavItem("gst-registration");
    } else if (lastElement == "mailing-address") {
      setActiveNavItem("mailing-address");
    } else {
      setActiveNavItem("");
    }
  }, [path]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 && window.scrollY <= 40) {
        setNavbarBg("rgb(0, 0, 0, 0.6)");
      } else if (window.scrollY > 40 && window.scrollY < 250) {
        setNavbarBg("rgb(0, 0, 0, 0.8)");
      } else if (window.scrollY >= 250) {
        setNavBorder(true);
        setNavbarBg("#191c20");
      } else {
        setNavBorder(false);
        setNavbarBg("transparent");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropDownClick = (event) => {
    event.stopPropagation();
  };

  return (
    <nav
      className={classes.navbar}
      style={{
        backgroundColor: dark ? "#191c20" : navbarBg,
        borderBottom: navBorder ? "0.6px solid rgb(145, 145, 145)" : "none",
      }}
    >
      <div className={classes.navContainer}>
        <Link style={{ textDecoration: "none", color: "inherit" }} href="/">
          <div className={classes.logo}>
            {/* <div className={`${classes.firstPart}`}>COWORK</div>
          <div className={classes.secondPart}>TOWN</div> */}
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
        </Link>

        <ul className={classes.navlist}>
          <li
            onClick={() => {
              setActiveNavItem("home");
            }}
            className={`${classes.listItem}
              ${activeNavItem === "home" ? classes.active : ""}`}
          >
            <Link
              className={classes.aTag}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              href="/"
            >
              Home
            </Link>
          </li>
          <li
            className={`${classes.listItem} ${
              activeNavItem === "virtual-offices" ? classes.active : ""
            } ${classes.listItemwithDropdown}`}
            onClick={() => {
              setActiveNavItem("virtual-offices");
              // router.push("/virtual-offices");
            }}
            onMouseEnter={() => setDropDownActive(true)}
            onMouseLeave={() => setDropDownActive(false)}
          >
            <Link
              className={classes.aTag}
              style={{ textDecoration: "none", color: "inherit" }}
              href="/virtual-offices"
            >
              Virtual Offices
              {dropDownActive && (
                <ul className={classes.hoveredDropdown}>
                  <li
                    onClick={(event) => {
                      handleDropDownClick(event);
                      if (!(event.metaKey || event.ctrlKey))
                        setActiveNavItem("business-registration");
                    }}
                    className={`${classes.dropListItem} ${
                      activeNavItem === "business-registration"
                        ? classes.active
                        : ""
                    }`}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="/business-registration"
                    >
                      Business Registration
                    </Link>
                  </li>
                  <hr className={classes.line} />
                  <li
                    onClick={(event) => {
                      handleDropDownClick(event);
                      if (!(event.metaKey || event.ctrlKey))
                        setActiveNavItem("gst-registration");
                    }}
                    className={`${classes.dropListItem} ${
                      activeNavItem === "gst-registration" ? classes.active : ""
                    }`}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="/gst-registration"
                    >
                      GST Registration
                    </Link>
                  </li>
                  <hr className={classes.line} />
                  <li
                    onClick={(event) => {
                      handleDropDownClick(event);
                      if (!(event.metaKey || event.ctrlKey))
                        setActiveNavItem("mailing-address");
                    }}
                    className={`${classes.dropListItem} ${
                      activeNavItem === "mailing-address" ? classes.active : ""
                    }`}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="/mailing-address"
                    >
                      Mailing Address
                    </Link>
                  </li>
                </ul>
              )}
            </Link>
          </li>
          <li
            className={`${classes.listItem} ${
              activeNavItem === "coworking-spaces" ? classes.active : ""
            }`}
            onClick={() => {
              setActiveNavItem("coworking-spaces");
            }}
          >
            <Link
              className={classes.aTag}
              style={{ textDecoration: "none", color: "inherit" }}
              href="/coworking-spaces"
            >
              Coworking Spaces
            </Link>
          </li>
          <li
            onClick={() => {
              setActiveNavItem("partnership");
            }}
            className={`${classes.listItem} ${
              activeNavItem === "partnership" ? classes.active : ""
            }`}
          >
            <Link
              className={classes.aTag}
              style={{ textDecoration: "none", color: "inherit" }}
              href="/partnership"
            >
              Partnership
            </Link>
          </li>
          <li
            onClick={() => {
              setActiveNavItem("contact");
            }}
            className={`${classes.listItem} ${
              activeNavItem === "contact" ? classes.active : ""
            }`}
          >
            <Link
              className={classes.aTag}
              style={{ textDecoration: "none", color: "inherit" }}
              href="/contact-us"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div
          onClick={() => setHamMenuOpen((prev) => !prev)}
          className={classes.hamMenu}
        >
          {hamMenuOpen ? (
            <CloseIcon
              sx={{
                fontSize: "44px",
                padding: "0 2px",
                color: "white",
              }}
            />
          ) : (
            <MenuIcon
              sx={{
                fontSize: "44px",
                color: "white",
                padding: "0 2px",
              }}
            />
          )}
        </div>
      </div>
      <ul
        className={`${classes.mobileNavMenu} ${
          hamMenuOpen ? classes.active : ""
        }`}
      >
        <li
          onClick={() => {
            setActiveNavItem("home");
            setHamMenuOpen(false);
            router.push("/");
          }}
          className={`${classes.mobileListItem}
              ${activeNavItem === "home" ? classes.active : ""}`}
        >
          Home
        </li>
        <li
          className={`${classes.mobileListItem} ${
            activeNavItem === "virtual-offices" ? classes.active : ""
          }`}
          onClick={() => {
            setActiveNavItem("virtual-offices");
            setHamMenuOpen(false);
            router.push("/virtual-offices");
          }}
          style={{ borderBottom: "none" }}
        >
          Virtual Offices
        </li>
        <ul className={classes.dropMobileList}>
          <li
            onClick={(event) => {
              handleDropDownClick(event);
              setActiveNavItem("business-registration");
              router.push("/business-registration");
              setHamMenuOpen(false);
            }}
            className={`${classes.mobileDropListItem} ${
              activeNavItem === "business-registration" ? classes.active : ""
            }`}
          >
            Business Registration
          </li>
          <li
            onClick={(event) => {
              handleDropDownClick(event);
              router.push("/gst-registration");
              setActiveNavItem("gst-registration");
              setHamMenuOpen(false);
            }}
            className={`${classes.mobileDropListItem} ${
              activeNavItem === "gst-registration" ? classes.active : ""
            }`}
          >
            GST Registration
          </li>
          <li
            onClick={(event) => {
              handleDropDownClick(event);
              setActiveNavItem("mailing-address");
              router.push("mailing-address");
              setHamMenuOpen(false);
            }}
            className={`${classes.mobileDropListItem} ${
              activeNavItem === "mailing-address" ? classes.active : ""
            }`}
          >
            Mailing Address
          </li>
        </ul>

        <li
          className={`${classes.mobileListItem} ${
            activeNavItem === "coworking-spaces" ? classes.active : ""
          }`}
          onClick={() => {
            setHamMenuOpen(false);
            setActiveNavItem("coworking-spaces");
            router.push("/coworking-spaces");
          }}
        >
          Coworking Spaces
        </li>
        <li
          className={`${classes.mobileListItem} ${
            activeNavItem === "partnership" ? classes.active : ""
          }`}
          onClick={() => {
            setActiveNavItem("partnership");
            router.push("/partnership");
            setHamMenuOpen(false);
          }}
        >
          Partnership
        </li>
        <li
          onClick={() => {
            setActiveNavItem("contact");
            setHamMenuOpen(false);
            router.push("/contact-us");
          }}
          className={`${classes.mobileListItem} ${
            activeNavItem === "contact" ? classes.active : ""
          }`}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Header;
