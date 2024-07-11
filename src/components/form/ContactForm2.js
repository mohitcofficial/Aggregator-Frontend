import React from "react";
import classes from "./ContactForm2.module.css";
import ContactImage from "../../../public/images/ContactForm.png";
import Image from "next/image";
import Form from "./Form";

function ContactForm2() {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={ContactImage}
          alt="Image"
          fill={true}
          placeholder="blur"
        />
      </div>
      <Form />
    </div>
  );
}

export default ContactForm2;
