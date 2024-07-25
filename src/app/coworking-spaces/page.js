import CoworkingBanner from "@/components/banner/CoworkingBanner";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Card from "@/components/items/Card";
import ContactViaSticker from "@/components/items/ContactViaSticker";
import Facilities from "@/components/items/Facilities";
import NeedExpertPoster from "@/components/items/NeedExpertPoster";
import WhyCoworking from "@/components/items/WhyCoworking";
import WhyUs from "@/components/items/WhyUs";
import ReviewSlider from "@/components/slider/ReviewSlider";
import { coworkingCardDataArray } from "../data/CoworkingCardData";
import { coworkingFacilities } from "../data/Facilities";
import classes from "./page.module.css";

export const metadata = {
  title: "Coworking Spaces",
  description:
    "Virtualxcel offers a dynamic coworking environment where innovation thrives. Join our collaborative workspace and unlock new opportunities for growth and networking.",
};

function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <ContactViaSticker />
        <CoworkingBanner />
        <div className={classes.container2}>
          <div className={classes.heading}>
            <span className={classes.heading1}>Choose a Coworking Space</span>
            <span className={classes.heading2}>
              that best suits your needs and preferences
            </span>
          </div>
          <div className={classes.cardContainer}>
            {coworkingCardDataArray.map((item, index) => (
              <Card
                key={index}
                ind={index}
                heading={item.heading}
                img={item.img}
                link={item.link}
              />
            ))}
          </div>
          <WhyCoworking />
          <Facilities data={coworkingFacilities} />
          <p className={classes.heading0}>
            Why Choose
            <span> Virtualxcel ?</span>
          </p>
          <WhyUs />
          <NeedExpertPoster />
          <ReviewSlider />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
