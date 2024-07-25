import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import PremuimLocations from "@/components/items/PremiumLocations";
import ReviewSlider from "@/components/slider/ReviewSlider";
import classes from "./page.module.css";
import Banner5 from "@/components/banner/Banner5";
import WhyUs from "@/components/items/WhyUs";

export const metadata = {
  title: "Your Personal Desk Awaits | VirtualXcel",
  description:
    "Secure a dedicated desk at VirtualXcel, designed for focused and uninterrupted work. Find your perfect workspace with us.",
  keywords:
    "dedicated desk, coworking space, focused work, VirtualXcel, uninterrupted work, personal workspace, cheap private desk, best private dest, best coworking space, cheapest coworking space",
  author: "Virtualxcel",
};

function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Banner5 value={4} />
        <PremuimLocations />
        <p className={classes.heading0}>
          Why Choose
          <span> Virtualxcel ?</span>
        </p>
        <WhyUs />
        <ReviewSlider />
      </div>
      <Footer />
    </>
  );
}

export default page;
