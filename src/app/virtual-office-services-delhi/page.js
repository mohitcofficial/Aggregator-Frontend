import LPBannerCities from "@/components/banner/LPBannerCities";
import VirtualBenefits from "@/components/items/VirtualBenefits";
import ImagesBox from "@/components/lpItems/delhi/ImagesBox";
import LPFooter from "@/components/lpItems/LPFooter";
import LPGuarantee from "@/components/lpItems/LPGuarantee";
import LPHeader from "@/components/lpItems/LPHeader";
import LPPriceItem from "@/components/lpItems/LPPriceItem";
import LPServices from "@/components/lpItems/LPServices";
import LPSlider from "@/components/lpItems/LPSlider";
import classes from "./page.module.css";

import dynamic from "next/dynamic";

const ReviewSlider = dynamic(
  () => import("../../components/slider/ReviewSlider"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Best Virtual Offices & Prime Business Addresses in Delhi",
  description:
    "Discover the finest virtual office solutions in Delhi with Virtualxcel. Secure a prestigious business address and elevate your company's presence.",
  keywords: [
    "virtual office Delhi",
    "virtual office in Delhi",
    "best office in Delhi",
    "cheapest virtual office in Delhi",
    "Delhi business address",
    "virtual office in South Delhi",
    "virtual office in North Delhi",
    "virtual office in West Delhi",
    "virtual office in East Delhi",
    "virtual office in Saket",
    "virtual office in Saket",
    "virtual office in Janakpuri",
    "virtual office in Nehru Place",
    "virtual office in Cannaught Place",
    "virtual office in Rajouri Garden",
    "virtual office in Lajpat Nagar",
    "virtual office in Hauz Khaz",
    "virtual office in Malviya Nagar",
    "virtual office in Greater Kailash",
    "virtual office in Rohini",
    "virtual office in Pitampura",
    "prestigious virtual office Delhi",
    "affordable business address Delhi",
    "virtual office solutions Delhi",
  ],
};
function page() {
  return (
    <>
      <LPHeader />
      <div className={classes.container}>
        <LPBannerCities name={"Delhi"} />
        <ImagesBox />
        <LPSlider name={"Delhi"} />
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
