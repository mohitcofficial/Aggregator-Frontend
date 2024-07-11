"use client";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import PlanCard from "../items/PlanCard";
import classes from "./PlanSlider.module.css";

function PanSlider({
  price = null,
  tenure,
  setTenure,
  activeIndex,
  type,
  setType,
  setCalculatedPrice = () => {},
}) {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderRef = useRef(null);
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.rightBox}>
          <Slider ref={sliderRef} {...settings}>
            <PlanCard
              tenure={tenure}
              setTenure={setTenure}
              activeIndex={activeIndex}
              setCalculatedPrice={setCalculatedPrice}
              price={price}
              type={type}
              setType={setType}
            />
            <PlanCard
              tenure={tenure}
              activeIndex={activeIndex}
              setTenure={setTenure}
              setCalculatedPrice={setCalculatedPrice}
              price={price}
              duration={2}
              flag={true}
              type={type}
              setType={setType}
            />
            <PlanCard
              activeIndex={activeIndex}
              tenure={tenure}
              setTenure={setTenure}
              setCalculatedPrice={setCalculatedPrice}
              price={price}
              duration={3}
              flag={true}
              type={type}
              setType={setType}
            />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default PanSlider;
