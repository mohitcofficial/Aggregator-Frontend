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
  title: "Best Virtual Offices & Coworking Servies Pan India",
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
        <ContactUsPoster />
        <ReviewSlider />
      </div>
      <Footer />
    </>
  );
}
