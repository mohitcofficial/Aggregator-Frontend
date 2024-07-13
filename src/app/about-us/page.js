import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import classes from "./page.module.css";
import ContactViaSticker from "@/components/items/ContactViaSticker";
import PrivacyPolicyImage from "../../../public/images/PrivacyPolicy.jpeg";
import Image from "next/image";
import ReviewSlider from "@/components/slider/ReviewSlider";

function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <ContactViaSticker />
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={PrivacyPolicyImage}
            fill={true}
            alt=""
            placeholder="blur"
            sizes="(max-width: 768px) 100vw"
          />
          <div className={classes.headingContainer}>
            <p className={`${classes.heading} ${classes.gradientText2}`}>
              About Us
            </p>
            <p className={classes.subHeading}>Last Updated 21 June ,2024</p>
          </div>
        </div>
        <div className={classes.contentContainer}>
          <ReviewSlider />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
