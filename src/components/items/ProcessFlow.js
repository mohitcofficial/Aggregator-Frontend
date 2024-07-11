import React from "react";
import classes from "./ProcessFlow.module.css";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PaymentIcon from "@mui/icons-material/Payment";
import VerifiedIcon from "@mui/icons-material/Verified";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

function ProcessFlow() {
  const processCard = (icon, heading1, heading2, color, text, number) => {
    return (
      <div className={classes.container2}>
        <p style={{ color: color }} className={classes.number}>
          {number}
        </p>
        <div>{icon}</div>
        <div style={{ marginBottom: "8px" }}>
          <p
            className={`${classes.text2} ${classes.bolder}`}
            style={{ color: color }}
          >
            {heading1}
          </p>
          <p className={`${classes.text2} ${classes.bold}`}>{heading2}</p>
        </div>
        <p className={classes.text3}>{text}</p>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.headingContainer}>
        <p className={`${classes.text} ${classes.bold}`}>Process Flow </p>
        <p className={classes.text}> of a Virtual Office</p>
      </div>
      <div className={classes.cardContainer}>
        {processCard(
          <FmdGoodIcon sx={{ color: "#EB8534", fontSize: "50px" }} />,
          "Choose a",
          "Location",
          "#EB8534",
          "Access prime business areas across the country.",
          1
        )}
        {processCard(
          <EventNoteIcon sx={{ color: "#9F6FD9", fontSize: "50px" }} />,
          "Select your",
          "Plan",
          "#9F6FD9",
          "Flexible plan options available.",
          2
        )}
        {processCard(
          <PaymentIcon sx={{ color: "#5894A5", fontSize: "50px" }} />,
          "Make a",
          "Payment",
          "#5894A5",
          "Convenient payment methods accepted.",
          3
        )}
        {processCard(
          <DocumentScannerIcon sx={{ color: "#EB8534", fontSize: "50px" }} />,
          "KYC Documents",
          "Verification",
          "#EB8534",
          "Smooth document verification process.",
          4
        )}
        {processCard(
          <VerifiedIcon sx={{ color: "#9F6FD9", fontSize: "50px" }} />,
          "Ready to use",
          "Virtual Office",
          "#9F6FD9",
          "Virtual office ready for immediate use.",
          5
        )}
      </div>
    </div>
  );
}

export default ProcessFlow;
