"use client";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import React from "react";
import classes from "./LocationsModal.module.css";
import CloseIcon from "@mui/icons-material/Close";

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

export default function LocationsModal({ children }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const fontSize = { xs: 26, sm: 28, md: 30, lg: 32 };

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
            <a className={classes.button} href="/virtual-offices/delhi">
              Delhi
            </a>
            <a className={classes.button} href="/virtual-offices/gurgaon">
              Gurgaon
            </a>
            <a className={classes.button} href="/virtual-offices/noida">
              Noida
            </a>
            <a className={classes.button} href="/virtual-offices/bangalore">
              Bangalore
            </a>
            <a className={classes.button} href="/virtual-offices/mumbai">
              Mumbai
            </a>
            <a className={classes.button} href="/virtual-offices/chandigarh">
              Chandigarh
            </a>
            <a className={classes.button} href="/virtual-offices/chennai">
              Chennai
            </a>
          </div>
          <h2 className={classes.heading}>Other Locations</h2>
          <div className={classes.content}>
            <a className={classes.button2} href="/virtual-offices/hyderabad">
              Hyderabad
            </a>
            <a className={classes.button2} href="/virtual-offices/kolkata">
              Kolkata
            </a>
            <a className={classes.button2} href="/virtual-offices/pune">
              Pune
            </a>
            <a className={classes.button2} href="/virtual-offices/kochi">
              Kochi
            </a>
            <a className={classes.button2} href="/virtual-offices/kerela">
              Kerela
            </a>
            <a className={classes.button2} href="/virtual-offices/punjab">
              Punjab
            </a>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
