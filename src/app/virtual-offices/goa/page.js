import Banner4 from "@/components/banner/Banner4";
import LocationContainer from "@/components/delhi/LocationContainer";
import Footer from "@/components/footer/Footer";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import Header from "@/components/header/Header";
import VirtualBenefits from "@/components/items/VirtualBenefits";
import Image from "next/image";
import GoaTheme from "../../../../public/images/Goa/GoaTheme.png";
import classes from "./page.module.css";

export const metadata = {
  title: "Virtual Offices in Goa",
  keywords:
    "coworking office space in goa, coworking space in goa, virtual office in goa, best coworking space in goa, cheapest coworking space in goa, cheapest virtual office in goa",
  description:
    "Discover most affordable Coworking Spaces in Gao. Join a vibrant community of professionals in a modern workspace designed for collaboration, productivity, and success. Explore our flexible membership options and amenities today.",
};
function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Banner4 place={"Goa"} />
        <LocationContainer location={"Goa"} />
        <div className={classes.infoContainer}>
          <p className={classes.heading}>
            Experience the Best of Business and Leisure with Cowork Town's
            Virtual Offices in Goa!
          </p>
          <p className={classes.para}>
            Welcome to Cowork Town's exclusive virtual office services in Goa!
            Embrace the perfect blend of business efficiency and coastal
            tranquility. Our virtual offices in Goa provide top-notch mail
            handling, professional call answering, and access to
            state-of-the-art meeting rooms, all without the need for a physical
            office. Establish your business in Goa and enjoy the flexibility and
            freedom our services offer.
          </p>
          <p className={classes.para}>
            Join the wave of innovative entrepreneurs, startups, and
            professionals who choose Cowork Town for their virtual office needs.
            Enhance your business presence in Goa with our cost-effective
            solutions, tailored to meet your specific requirements. Discover the
            advantages of a virtual office in Goa and elevate your business to
            new heights!
          </p>
        </div>

        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={GoaTheme}
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
        <FrequentQuestions />
      </div>
      <Footer />
    </>
  );
}

export default page;
