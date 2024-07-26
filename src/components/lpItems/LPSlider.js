"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BangaloreImage from "../../../public/images/Bangalore/Bangalore.jpeg";
import DelhiImage from "../../../public/images/Delhi.jpg";
import HaryanaImage from "../../../public/images/Gurgaon/Gurgaon.jpg";
import KolkataImage from "../../../public/images/Kolkata/Kolkata.jpg";
import MaharashtraImage from "../../../public/images/Mumbai/Mumbai.jpg";
import NoidaImage from "../../../public/images/Noida/Noida2.jpeg";
import classes from "./LPSlider.module.css";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CustomModal from "../Modal";

function LPSlider() {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderRef = useRef(null);
  const lpData = [
    {
      image: DelhiImage,
      name: "Delhi",
      price: 999,
    },
    {
      image: HaryanaImage,
      name: "Gurgaon",
      price: 999,
    },
    {
      image: NoidaImage,
      name: "Noida",
      price: 999,
    },
    {
      image: BangaloreImage,
      name: "Bangalore",
      price: 999,
    },
    {
      image: KolkataImage,
      name: "Kolkata",
      price: 999,
    },
    {
      image: MaharashtraImage,
      name: "Mumbai",
      price: 999,
    },
  ];
  const fontSize = { lg: 28, md: 24, sm: 24, xs: 24 };
  const fontSize2 = { lg: 13, md: 12, sm: 12, xs: 12 };
  const fontSize3 = { lg: 13, md: 12, sm: 12, xs: 12 };
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>
        Get registered accross
        <span>Trending Locations</span>
      </h2>
      {/* <div
        onClick={() => sliderRef?.current?.slickPrev()}
        className={classes.prevSlideButton}
      >
        <ArrowBackIosIcon sx={{ fontSize: fontSize, padding: "8px" }} />
      </div> */}
      <div className={classes.innerContainer}>
        <div className={classes.rightBox}>
          <Slider ref={sliderRef} {...settings}>
            {lpData.map((item, index) => (
              <CustomModal>
                <div key={index} className={classes.imageContainer}>
                  <Image
                    className={classes.image}
                    src={item.image}
                    alt="Image"
                    fill={true}
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw"
                  />
                  <div className={classes.content}>
                    <p className={classes.name}>{item.name}</p>
                    <p className={classes.text}>
                      Starting at
                      <span>
                        <CurrencyRupeeIcon
                          sx={{ fontSize: fontSize2, marginTop: "8px" }}
                        />
                        {item.price}
                      </span>
                    </p>
                  </div>
                </div>
              </CustomModal>
            ))}
          </Slider>
        </div>
      </div>
      {/* <div
        onClick={() => sliderRef?.current?.slickNext()}
        className={classes.nextSlideButton}
      >
        <ArrowForwardIosIcon sx={{ fontSize: fontSize, padding: "8px" }} />
      </div> */}

      <div>
        <CustomModal>
          <button className={classes.visitAllButton}>
            Visit all Virtual Office locations
            <ArrowForwardIcon sx={{ fontSize: fontSize }} />
          </button>
        </CustomModal>
      </div>
    </div>
  );
}

export default LPSlider;
