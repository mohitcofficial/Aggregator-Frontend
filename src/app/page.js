import Image from "next/image";
import classes from "./page.module.css";
import Banner from "@/components/banner/Banner";
import ContactViaSticker from "@/components/items/ContactViaSticker";
import PriceItem from "@/components/items/PriceItem";
import ZoomParallax from "@/components/animations/ZoomParallax";
import ReviewSlider from "@/components/slider/ReviewSlider";
import Head from "next/head";
import WelcomeImage from "../../public/images/Image1.png";
import BlogCard from "@/components/items/BlogCard";
import ContactUsPoster from "@/components/items/ContactUsPoster";
import ProcessFlow from "@/components/items/ProcessFlow";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import PremiumLocations from "@/components/items/PremiumLocations";

export const metadata = {
  title: "Best Coworking Servies Pan India",
  keywords:
    "Best Coworking Offices, Coworking Spaces, Virtual Offices, Cheap Coworking Spaces, Cheapest Coworking Space, Coworking Spaces near me",
  description:
    "Discover the ultimate coworking experience at Virtualxcel. Join a vibrant community of professionals in a modern workspace designed for collaboration, productivity, and success. Explore our flexible membership options and amenities today.",
};

export default function Home() {
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
        <div className={classes.container1}>
          <div
            data-aos="fade"
            data-aos-delay="50"
            className={classes.leftContainer}
          >
            <Image
              className={classes.image}
              src={WelcomeImage}
              alt="Image"
              fill={true}
              placeholder="blur"
              sizes="(max-width: 768px) 100vw"
            />
          </div>
          <div className={classes.rightContainer}>
            <div className={classes.heading}>
              Elevate Your Work Experience: Discover the Fusion of Coworking
              Spaces and Virtual Offices
            </div>
            <div className={classes.content}>
              <p className={classes.text}>
                Welcome to Virtualxcel Explore the dynamic synergy between
                coworking spaces and virtual offices—a game-changing combination
                designed to amplify productivity, foster collaboration, and
                transcend boundaries.
              </p>
              <p className={classes.text}>
                Step into a world where work is no longer confined to
                traditional cubicles and rigid structures. Our meticulously
                curated coworking spaces are vibrant hubs where creativity
                ignites and connections flourish. Join a diverse community of
                like-minded professionals, from freelancers to established
                businesses, in an environment that nurtures collaboration and
                sparks innovation.
              </p>
              <p className={classes.text}>
                Elevate your work experience with our combined offering of
                coworking spaces and virtual offices. Unleash your potential,
                collaborate effortlessly, and embrace a new era of
                productivity—wherever you are, whenever you need. Experience the
                fusion of innovation and functionality; welcome to the future of
                work.
              </p>
            </div>
          </div>
        </div>
        <PriceItem />
        <PremiumLocations />
        <ZoomParallax />
        <ProcessFlow />
        <p className={classes.heading2}>
          Our <span>Blogs</span>
        </p>
        <div className={classes.blogContainer}>
          <BlogCard
            heading={
              "Choosing the Right Virtual Office Provider for Hassle-Free GST Registration"
            }
            content={
              "In today’s rapidly evolving business landscape, entrepreneurs are increasingly turning to virtual offices to establish a psodnfsid fsod fnsdo fisnd fosd"
            }
          />
          <BlogCard
            heading={
              "Choosing the Right Virtual Office Provider for Hassle-Free GST Registration"
            }
            content={
              "In today’s rapidly evolving business landscape, entrepreneurs are increasingly turning to virtual offices to establish a psodnfsid fsod fnsdo fisnd fosd"
            }
          />
          <BlogCard
            heading={
              "Choosing the Right Virtual Office Provider for Hassle-Free GST Registration"
            }
            content={
              "In today’s rapidly evolving business landscape, entrepreneurs are increasingly turning to virtual offices to establish a psodnfsid fsod fnsdo fisnd fosd"
            }
          />
        </div>
        <ContactUsPoster />
        <ReviewSlider />
      </div>
      <Footer />
    </>
  );
}
