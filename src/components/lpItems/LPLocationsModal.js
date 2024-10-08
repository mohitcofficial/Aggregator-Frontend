"use client";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import React from "react";
import classes from "../LocationsModal.module.css";
import CloseIcon from "@mui/icons-material/Close";
import CustomModal from "../Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function LPLocationsModal({ children }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const fontSize = { xs: 26, sm: 28, md: 30, lg: 32 };

  const premuimLocations = [
    "Delhi",
    "Gurgaon",
    "Noida",
    "Bangalore",
    "Mumbai",
    "Chandigarh",
    "Chennai",
  ];
  const otherLocations = [
    "Hyderabad",
    "Kolkata",
    "Pune",
    "Kochi",
    "Kerala",
    "Punjab",
    "Agra",
    "Coimbatore",
    "Dehradun",
    "Goa",
    "Ghaziabad",
    "Indore",
    "Jalandhar",
    "Jamshedpur",
    "Kanpur",
    "Lucknow",
    "Nagpur",
    "Patna",
    "Raipur",
    "Ranchi",
    "Vishakhapatnam",
    "Zirakpur",
  ];

  return (
    <div>
      <div onClick={handleOpen}>{children}</div>
      <Modal
        open={open}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          height: "100%",
          overflow: "auto",
        }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={classes.modalInnerContainer}>
          <div className={classes.buttonContainer}>
            <CloseIcon
              sx={{ fontSize: fontSize }}
              className={classes.closeButton}
              onClick={handleClose}
            />
          </div>
          <h2 className={classes.heading}>Premium Locations</h2>
          <div className={classes.content}>
            {premuimLocations.map((location, index) => (
              <div key={index}>
                <CustomModal>
                  <div className={classes.button}>{location}</div>
                </CustomModal>
              </div>
            ))}
          </div>
          <h2 className={classes.heading}>Other Locations</h2>
          <div className={classes.content}>
            {otherLocations.map((location, index) => (
              <div key={index}>
                <CustomModal>
                  <div className={classes.button2}>{location}</div>
                </CustomModal>
              </div>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
