import ZoomParallax from "@/components/animations/ZoomParallax";
import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import InfoContainer from "@/components/home/InfoContainer";
import BlogCard from "@/components/items/BlogCard";
import ContactViaSticker from "@/components/items/ContactViaSticker";
import NeedExpertPoster from "@/components/items/NeedExpertPoster";
import PremiumLocations from "@/components/items/PremiumLocations";
import PriceItem from "@/components/items/PriceItem";
import ReviewSlider from "@/components/slider/ReviewSlider";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Head from "next/head";
import Link from "next/link";
import classes from "./page.module.css";
import WhyUs from "@/components/items/WhyUs";

export const metadata = {
  title: "Best Virtual Offices & Coworking Servies Pan India",
  keywords:
    "Best Coworking Offices, Coworking Spaces, Virtual Offices, Cheap Coworking Spaces, Cheapest Coworking Space, Coworking Spaces near me",
  description:
    "Discover the ultimate coworking experience at Virtualxcel. Join a vibrant community of professionals in a modern workspace designed for collaboration, productivity, and success. Explore our flexible membership options and amenities today.",
};

export default function Home() {
  const fontSize = { lg: 32, md: 30, sm: 30, xs: 28 };
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <ContactViaSticker />
        <Banner />
        <InfoContainer />
        <PriceItem />
        <PremiumLocations />
        <ZoomParallax />
        <p className={classes.heading0}>
          Why Choose
          <span> Virtualxcel ?</span>
        </p>
        <WhyUs />
        <p className={classes.heading2}>
          <span>Blogs</span> Section
          <Link
            href={"https://blog.virtualxcel.in/"}
            className={classes.openInNewLink}
          >
            <OpenInNewIcon sx={{ fontSize: fontSize, marginTop: "4px" }} />
          </Link>
        </p>
        <div className={classes.blogContainer}>
          <BlogCard
            index={1}
            heading={
              "The Rise of Co-Working Spaces in the Modern Business Landscape"
            }
            content={
              "In recent years, co-working spaces have revolutionized the traditional office environment, offering flexible and cost-effective solutions for startups, freelancers, and established businesses alike. These dynamic workspaces foster collaboration, innovation, and networking opportunities, making them an ideal choice for professionals seeking a vibrant community. With amenities like high-speed internet, meeting rooms, and recreational areas, co-working spaces provide a productive and engaging atmosphere that adapts to the evolving needs of today's workforce."
            }
          />
          <BlogCard
            index={2}
            heading={"The Benefits of Virtual Offices for Remote Businesses"}
            content={
              "Virtual offices have emerged as a game-changer for remote businesses, providing a professional address and essential services without the need for a physical presence. This setup allows entrepreneurs and small businesses to establish credibility and expand their reach while keeping overhead costs low. "
            }
          />
          <BlogCard
            index={3}
            heading={
              "Simplifying Business and GST Registration for Entrepreneurs"
            }
            content={
              "Navigating the complexities of business and GST registration can be a daunting task for entrepreneurs. Our platform simplifies this process by providing comprehensive support and guidance, ensuring that your business complies with all legal requirements. "
            }
          />
        </div>
        <NeedExpertPoster />
        <ReviewSlider />
      </div>
      <Footer />
    </>
  );
}
