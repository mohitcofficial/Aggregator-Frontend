import LPBanner from "@/components/banner/LPBanner";
import VirtualBenefits from "@/components/items/VirtualBenefits";
import LPFooter from "@/components/lpItems/LPFooter";
import LPGuarantee from "@/components/lpItems/LPGuarantee";
import LPHeader from "@/components/lpItems/LPHeader";
import LPLocations from "@/components/lpItems/LPLocatons";
import LPPriceItem from "@/components/lpItems/LPPriceItem";
import LPServices from "@/components/lpItems/LPServices";
import CustomModal from "@/components/Modal";
import ReviewSlider from "@/components/slider/ReviewSlider";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Image from "next/image";
import LP1 from "../../../public/images/LP1.jpg";
import classes from "./page.module.css";
import LPSlider from "@/components/lpItems/LPSlider";

export const metadata = {
  title: "Best Virtual Offices & Business Addresses Across India",
  description:
    "Discover Virtualxcel: Your gateway to the perfect virtual office address. Elevate your professional presence and expand your business seamlessly.",
  keywords: [
    "Best Virtual Office Address for your Business",
    "Best Business Address registration plans accross india",
    "virtual office space in delhi",
    "cheap virtual office space in delhi",
    "virtual office space in india",
  ],
};
function page() {
  return (
    <>
      <LPHeader />
      <div className={classes.container}>
        <LPBanner />
        <LPSlider />
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
              <CustomModal>
                <button className={classes.buyNowButton}>BUY NOW</button>
              </CustomModal>
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
        {/* <LPLocations /> */}
        <LPPriceItem />
        <LPGuarantee />
        <h1 className={classes.heading0}>
          <p>Expand Your Business with </p>
          <span>Virtual Office Benefits</span>
        </h1>
        <VirtualBenefits />
        <LPServices />
        <ReviewSlider />
      </div>
      <LPFooter />
    </>
  );
}

export default page;
