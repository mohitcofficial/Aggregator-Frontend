"use client";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
// import swal from "sweetalert";
import classes from "./Modal.module.css";

import UserApis from "../services/User.api.services";
import { useRouter } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";

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

export default function CustomModal({ children }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    setFormErrors({});
  };

  const initialInputValue = {
    user_name: "",
    user_email: "",
    user_message: "",
    user_mobile: "",
  };

  const formRef = useRef();
  const [formState, setFormState] = useState(initialInputValue);
  const [formErrors, setFormErrors] = useState({});

  const inputChangeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const sendMail = async (mailBody) => {
    const body = {
      to: "testing@virtualxcel.in",
      subject: "Enquiry-Landing Page",
      text: mailBody,
    };
    setLoading(true);
    try {
      const resp = await UserApis.sendMail(body);
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "submit", {
          event_category: "form",
          event_label: "Contact Form",
          event_action: "submit",
        });
      }
      sendGTMEvent({ event: "formSubmit", value: "Landing Page" });
      setLoading(false);
      toast.success("Thank You For Contacting Us !");
      setFormState(initialInputValue);
      setOpen(false);
      // swal(
      //   "Form Submitted Successfully !",
      //   "Our team will contact you as soon as possible",
      //   "success"
      // ).then(() => router.push("/"));
      router.push("/thank-you");
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong ! Try Again Later");
      setLoading(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let getFormErrors = formValidation();
    setFormErrors(getFormErrors);
    if (Object.keys(getFormErrors).length === 0) {
      const mailBody = `<h2>Message Recieved from ${formState.user_email}</h2>
                        <br>
                        <h4>This message is from the Landing Page</h4>
                        <br>
                        <h3>Name: </h3> <p>${formState.user_name}</p>
                        <h3>Email: </h3> <p>${formState.user_email}</p>
                        <h3>Phone No: </h3> <p>${formState.user_mobile}</p>
                        <h3>Requirement: </h3>  <p>${formState.user_message}</p>
                        <br>
                        Have a good day!`;
      sendMail(mailBody);
    }
  };

  const formValidation = () => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^[0-9]{10,11}$/;
    if (formState.user_name.trim() === "") {
      errors.user_name = "Username is Required! ";
    }
    if (!regex.test(formState.user_email)) {
      errors.user_email = "Invalid Email Format! ";
    }
    if (formState.user_email.trim() === "") {
      errors.user_email = "Email is Required! ";
    }
    if (!phoneRegex.test(formState.user_mobile)) {
      errors.user_mobile =
        "Phone Number must be 10 or 11 digits long and contain only numbers! ";
    }
    if (formState.user_mobile.trim() === "") {
      errors.user_mobile = "Phone Number is Required! ";
    }
    if (formState.user_message.trim() === "") {
      errors.user_message = "Message is Required! ";
    }
    return errors;
  };

  const fontSize = { xs: 14, sm: 15, md: 16, lg: 16 };

  return (
    <div style={{ width: "100%" }}>
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
          <form
            className={classes.form}
            ref={formRef}
            onSubmit={formSubmitHandler}
            method="POST"
          >
            <p className={classes.heading}>Connect with Us</p>
            {/* <div className={classes.points}>
              <div className={classes.point}>
                <DoneIcon
                  sx={{ fontSize: fontSize, color: "rgb(0, 156, 0)" }}
                />
                <p className={classes.text}>Lowest Price Guarantee</p>
              </div>
              <div className={classes.point}>
                <DoneIcon
                  sx={{ fontSize: fontSize, color: "rgb(0, 156, 0)" }}
                />
                <p className={classes.text}>1hr Average Response Time</p>
              </div>
            </div> */}
            <input
              placeholder="Name"
              className={classes.input}
              type="text"
              onChange={inputChangeHandler}
              name="user_name"
              value={formState.user_name}
            />

            <p className={classes.errorMessage}>{formErrors.user_name}</p>

            <input
              placeholder="E-mail"
              className={classes.input}
              type="email"
              onChange={inputChangeHandler}
              name="user_email"
              value={formState.user_email}
            />

            <p className={classes.errorMessage}>{formErrors.user_email}</p>

            <div className={classes.inputContainer}>
              <p className={classes.text2}>+91</p>

              <input
                placeholder="Phone Number"
                className={classes.input2}
                type="text"
                onChange={inputChangeHandler}
                name="user_mobile"
                value={formState.user_mobile}
              />
            </div>

            <p className={classes.errorMessage}>{formErrors.user_mobile}</p>

            <textarea
              placeholder="Requirement"
              className={classes.textArea}
              name="user_message"
              onChange={inputChangeHandler}
              value={formState.user_message}
            />

            <p className={classes.errorMessage}>{formErrors.user_message}</p>

            <button
              disabled={loading}
              className={`${classes.button}`}
              type="submit"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
