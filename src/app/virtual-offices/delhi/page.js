import Banner4 from "@/components/banner/Banner4";
import LocationContainer from "@/components/delhi/LocationContainer";
import Footer from "@/components/footer/Footer";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import Header from "@/components/header/Header";
import VirtualBenefits from "@/components/items/VirtualBenefits";
import Image from "next/image";
import DelhiImage from "../../../../public/images/Delhi/DelhiTheme.png";
import classes from "./page.module.css";

export const metadata = {
  title: "Cheap Virtual Office Space in Delhi for GST & Mailing Address",
  description:
    "Get affordable virtual office space in Delhi with professional mailing addresses, company and GST registration from Virtualxcel. Elevate your business!",
  robots: "max-image-preview:large",
  canonical: "https://virtualxcel.in/virtual-offices/delhi/",
};
function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Banner4 />
        <LocationContainer location={"New Delhi"} />
        <div className={classes.infoContainer}>
          <p className={classes.heading}>
            Welcome to Virtualxcel's newest addition to our range of services -
            Virtual Offices in Delhi!
          </p>
          <p className={classes.para}>
            Whether you're a startup, freelancer, or a remote team, our virtual
            offices offer you the professional address and support you need to
            thrive in the bustling city of Delhi.
          </p>
          <p className={classes.para}>
            Join the thriving community of entrepreneurs, startups, and
            professionals who trust Virtualxcel for their virtual office needs.
            Elevate your business presence in Delhi without the overhead costs
            of a physical office. Discover the convenience, flexibility, and
            professionalism of Virtualxcel's virtual offices today!
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={DelhiImage}
            alt="Image"
            fill={true}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw"
          />
        </div>
        <div className={classes.heading0}>
          <span>Virtual Office Benefits</span>
          <p>for Your Business</p>
        </div>
        <VirtualBenefits />
        {/* <FrequentQuestions /> */}
      </div>
      <Footer />
    </>
  );
}

export default page;
