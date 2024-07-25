import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import classes from "./page.module.css";
import Banner5 from "@/components/banner/Banner5";
import ScrollParallax from "@/components/animations/ScrollParallax";
import PriceCard from "@/components/items/PriceCard";
import { BoxData2 } from "../data/PriceCardData";
import GSTBenefits from "@/components/items/GSTBenefits";
import PremuimLocations from "@/components/items/PremiumLocations";
import ReviewSlider from "@/components/slider/ReviewSlider";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import VirtualBenefits from "@/components/items/VirtualBenefits";

export const metadata = {
  title: "Professional Mailing Address Services | Virtualxcel",
  description:
    "Enhance your business image with professional mailing address services from Virtualxcel. Establish a credible presence without the need for a physical office. Discover our flexible mailing solutions tailored to your business needs.",
  keywords:
    "professional mailing address, virtual office address, business address services, Virtualxcel mailing address, mail handling services, virtual mailbox, business credibility",
  author: "Virtualxcel",
};

function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Banner5 value={2} />
        <div className={classes.container2}>
          <div className={classes.headingContainer}>
            <h2 className={classes.heading1}>
              Best Plan For <b>Mailing Address</b>
            </h2>
            <h3 className={classes.heading2}>Starting just at &#8377; 799</h3>
          </div>
          <div className={classes.priceContainer}>
            <div className={classes.imagesContainer}>
              <ScrollParallax />
            </div>
            <PriceCard
              price={BoxData2[2].price}
              heading={BoxData2[2].heading}
              points={BoxData2[2].points}
              flag={0}
            />
          </div>
        </div>
        <PremuimLocations />
        <h1 className={classes.heading0}>
          <p>Expand Your Business with </p>
          <span>Virtual Office Benefits</span>
        </h1>
        <VirtualBenefits />
        {/* <FrequentQuestions /> */}
        <ReviewSlider />
      </div>
      <Footer />
    </>
  );
}

export default page;
