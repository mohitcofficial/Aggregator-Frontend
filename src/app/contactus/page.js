import classes from "./page.module.css";
import React from "react";
import Banner3 from "@/components/banner/Banner3";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ContactItem from "@/components/items/ContactItem";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContactForm2 from "@/components/form/ContactForm2";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Connect With Us",
  description:
    "Get in touch with Cowork Town today. Whether you have inquiries, feedback, or partnership proposals, our team is here to assist you. Reach out to us easily and start your journey towards a vibrant coworking experience.",
};

function page() {
  const fontSize = { xs: 40, sm: 40, md: 50, lg: 60 };
  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.helper}></div>
        <Banner3 />
        <div className={classes.container2}>
          <div className={classes.boxContainer}>
            <ContactItem
              icon={
                <CallIcon
                  sx={{ color: "rgb(63, 63, 63)", fontSize: fontSize }}
                />
              }
              heading={"Phone"}
              text={"+91 9871001079"}
            />
            <ContactItem
              icon={
                <WhatsAppIcon
                  sx={{ color: "rgb(63, 63, 63)", fontSize: fontSize }}
                />
              }
              heading={"WhatsApp"}
              text={"+91 9871001079"}
              buttonText={"Chat"}
            />
            <ContactItem
              icon={
                <EmailIcon
                  sx={{ color: "rgb(63, 63, 63)", fontSize: fontSize }}
                />
              }
              heading={"Email"}
              text={"sales@coworktown.com"}
            />
          </div>
        </div>

        <ContactForm2 />
      </div>
      <Footer />
    </>
  );
}

export default page;
