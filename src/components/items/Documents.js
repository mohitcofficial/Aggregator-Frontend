"use client";

import classes from "./Documents.module.css";
import { useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import DocumentImage from "../../../public/images/DocumentImage.jpg";

function Documents() {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.container2}>
        <div className={classes.leftContainer}>
          <div className={classes.heading}>
            <span className={classes.heading1}>KYC Documents</span>
            <span className={classes.heading2}>Required</span>
          </div>
          <div className={classes.option}>
            <div
              onClick={() => setIndex(0)}
              className={`${classes.options} ${
                index == 0 ? classes.active : ""
              }`}
            >
              Sole Proprietor / Individual
            </div>
            <div
              onClick={() => setIndex(1)}
              className={`${classes.options} ${
                index == 1 ? classes.active : ""
              }`}
            >
              LLP & Partnership Firms
            </div>
            <div
              onClick={() => setIndex(2)}
              className={`${classes.options} ${
                index == 2 ? classes.active : ""
              }`}
            >
              Company (Public & Private)
            </div>
          </div>
          {index == 0 && (
            <ul data-aos="fade-right" className={classes.list}>
              <li className={classes.listItem}>
                Aadhar Card Copy/ Passport Copy
              </li>
              <li className={classes.listItem}>PAN Card Copy</li>
              <li className={classes.listItem}>
                One Photo/ Passport Size Photo
              </li>
              <li className={classes.listItem}>
                Cancelled cheque/ Passbook front page copy.
              </li>
            </ul>
          )}
          {index == 1 && (
            <ul data-aos="fade-down" className={classes.list}>
              <li className={classes.listItem}>
                Aadhar Card Copy/ Passport Copy (All Partners)
              </li>
              <li className={classes.listItem}>PAN Card Copy (All Partners)</li>
              <li className={classes.listItem}>
                One Photo/ Passport Size Photo (All Partners)
              </li>
              <li className={classes.listItem}>
                Cancelled cheque/ Passbook front page copy.
              </li>
              <li className={classes.listItem}>
                PAN Card Copy of the Business
              </li>
              <li className={classes.listItem}>
                GST Certificate (if applicable)
              </li>
              <li className={classes.listItem}>
                COI (Certificate of Incorporation) (if applicable)
              </li>
              <li className={classes.listItem}>
                COI (Certificate of Incorporation) (if applicable GST
                Certificate (if applicable)
              </li>
            </ul>
          )}
          {index == 2 && (
            <ul data-aos="fade-left" className={classes.list}>
              <li className={classes.listItem}>
                Aadhar Card Copy/ Passport Copy (All Partners)
              </li>
              <li className={classes.listItem}>PAN Card Copy (All Partners)</li>
              <li className={classes.listItem}>
                One Photo/ Passport Size Photo (All Partners)
              </li>
              <li className={classes.listItem}>
                Cancelled cheque/ Passbook front page copy.
              </li>
              <li className={classes.listItem}>
                PAN Card Copy of the Business
              </li>
              <li className={classes.listItem}>
                GST Certificate (if applicable)
              </li>
              <li className={classes.listItem}>
                COI (Certificate of Incorporation) (if applicable)
              </li>
              <li className={classes.listItem}>
                GST Certificate (if applicable)
              </li>
            </ul>
          )}
        </div>
        <div className={classes.rightContainer}>
          <Image
            className={classes.image}
            src={DocumentImage}
            fill={true}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

export default Documents;
