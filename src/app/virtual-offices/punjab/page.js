import Banner4 from "@/components/banner/Banner4";
import LocationContainer from "@/components/delhi/LocationContainer";
import Footer from "@/components/footer/Footer";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import Header from "@/components/header/Header";
import VirtualBenefits from "@/components/items/VirtualBenefits";
import Image from "next/image";
import PunjabTheme from "../../../../public/images/Punjab/PunjabTheme.jpg";
import classes from "./page.module.css";

export const metadata = {
  title: "Virtual Offices in Punjab",
  keywords:
    "coworking office space in punjab, coworking space in punjab, virtual office in punjab, best coworking space in punjab, cheapest coworking space in punjab, cheapest virtual office in punjab",
  description:
    "Discover most affordable Coworking Spaces in Punjab. Join a vibrant community of professionals in a modern workspace designed for collaboration, productivity, and success. Explore our flexible membership options and amenities today.",
};
function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Banner4 place={"Punjab"} />
        <LocationContainer location={"Punjab"} />
        <div className={classes.infoContainer}>
          <p className={classes.heading}>
            Welcome to Virtualxcel's newest addition to our range of services -
            Virtual Offices in Punjab!
          </p>
          <p className={classes.para}>
            Welcome to Virtualxcel's distinguished service - Virtual Offices in
            Punjab! Establish a commanding presence in the heart of North India
            without the hassle of a physical workspace. Our virtual office
            solutions offer comprehensive mail management, seamless call
            forwarding, and access to premium meeting spaces, ensuring a
            polished and professional image for your business. Join us and
            thrive in Punjab's vibrant business landscape!
          </p>
          <p className={classes.para}>
            Join the thriving community of entrepreneurs, startups, and
            professionals who trust Virtualxcel for their virtual office needs.
            Elevate your business presence in Punjab without the overhead costs
            of a physical office. Discover the convenience, flexibility, and
            professionalism of Virtualxcel's virtual offices today!
          </p>
        </div>

        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={PunjabTheme}
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
