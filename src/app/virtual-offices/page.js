import CustomModal2 from "@/components/Modal2";
import Banner6 from "@/components/banner/Banner6";
import Footer from "@/components/footer/Footer";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import Header from "@/components/header/Header";
import ContactUsPoster from "@/components/items/ContactUsPoster";
import ContactViaSticker from "@/components/items/ContactViaSticker";
import Documents from "@/components/items/Documents";
import PriceItem from "@/components/items/PriceItem";
import ProcessFlow from "@/components/items/ProcessFlow";
import VirtualBenefits from "@/components/items/VirtualBenefits";
import VirtualServices from "@/components/items/VirtualServices";
import LPGuarantee from "@/components/lpItems/LPGuarantee";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Head from "next/head";
import Image from "next/image";
import LP1 from "../../../public/images/LP1.jpg";
import classes from "./page.module.css";

export const metadata = {
  title: "Virtual Offices & Business Addresses Across India",
  description:
    "Discover the flexibility of our virtual offices at Virtualxcel. Gain a prestigious business address, professional support, and remote services tailored to your needs. Elevate your business presence today.",
  keywords: [
    "virtual office space in delhi",
    "cheap virtual office space in delhi",
    "virtual office space in noida",
    "virtual office address in gurgaon",
    "virtual office space in gurgaon",
  ],
};

export default function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Head>
          <link rel="icon" href="/images/LaptopSticker.png" />
        </Head>
        <ContactViaSticker />
        <Banner6 />
        <div className={classes.container2}>
          <div className={classes.marginBlock}>
            <div className={classes.leftContainer}>
              <p className={classes.heading}>
                Embracing the Evolution of Virtual Offices Across India
              </p>
              <p className={classes.text}>
                Establish your company's footprint in India with a virtual
                office. Benefit from a prestigious business address in key
                locations, comprehensive mail handling, professional call
                answering, and on-demand access to meeting rooms and desks.
                Leverage our global network for seamless business operations and
                enhanced credibility in the market.
              </p>
              <CustomModal2>
                <button className={classes.buyNowButton}>BUY NOW</button>
              </CustomModal2>
              <div className={classes.box3}>
                <p>Or call us at</p>
                <LocalPhoneIcon
                  sx={{
                    fontSize: { xs: 20, sm: 20, md: 22, lg: 24 },
                  }}
                />

                <span className={classes.bold}>+91 9871001079</span>
              </div>
            </div>
            <div className={classes.rightContainer}>
              <div className={classes.imageContainer}>
                <div className={classes.backgroundDesign}></div>
                <Image
                  className={classes.image}
                  src={LP1}
                  fill={true}
                  alt=""
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
            </div>
          </div>
        </div>
        <PriceItem />
        <Documents />
        <LPGuarantee />
        <h1 className={classes.heading0}>
          <p>Expand Your Business with </p>
          <span>Virtual Office Benefits</span>
        </h1>
        <VirtualBenefits />
      </div>
      <ContactUsPoster />
      <VirtualServices />
      <Footer />
    </>
  );
}
