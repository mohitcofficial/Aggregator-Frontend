"use client";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Industrial1 from "../../../public/images/Chandigarh/IndustrialPhase2/Industrial1.jpg";
import Industrial4 from "../../../public/images/Chandigarh/IndustrialPhase2/Industrial4.jpg";
import Industrial5 from "../../../public/images/Chandigarh/IndustrialPhase2/Industrial5.jpg";
import Industrial6 from "../../../public/images/Chandigarh/IndustrialPhase2/Industrial6.jpg";
import Industrial7 from "../../../public/images/Chandigarh/IndustrialPhase2/Industrial7.jpg";
import Anna2 from "../../../public/images/Chennai/AnnaSalai/Anna2.jpg";
import Anna3 from "../../../public/images/Chennai/AnnaSalai/Anna3.jpg";
import Anna5 from "../../../public/images/Chennai/AnnaSalai/Anna5.jpg";
import Anna6 from "../../../public/images/Chennai/AnnaSalai/Anna6.jpg";
import Anna8 from "../../../public/images/Chennai/AnnaSalai/Anna8.jpg";
import Innove2 from "../../../public/images/Delhi/Saket/Innove2.jpg";
import Innove3 from "../../../public/images/Delhi/Saket/Innove3.jpg";
import Innove4 from "../../../public/images/Delhi/Saket/Innove4.jpg";
import Innove5 from "../../../public/images/Delhi/Saket/Innove5.jpg";
import Innove6 from "../../../public/images/Delhi/Saket/Innove6.jpg";
import MyTime1 from "../../../public/images/Delhi/Saket/MyTime1.jpeg";
import MyTime2 from "../../../public/images/Delhi/Saket/MyTime2.jpeg";
import MyTime3 from "../../../public/images/Delhi/Saket/MyTime3.jpeg";
import MyTime4 from "../../../public/images/Delhi/Saket/MyTime4.jpeg";
import MyTime5 from "../../../public/images/Delhi/Saket/MyTime5.jpeg";
import Dwarka1 from "../../../public/images/Delhi/Dwarka/Dwarka1.jpg";
import Dwarka2 from "../../../public/images/Delhi/Dwarka/Dwarka2.jpg";
import Dwarka3 from "../../../public/images/Delhi/Dwarka/Dwarka3.jpg";
import RajouriGarden1 from "../../../public/images/Delhi/RajouriGarden/RajouriGarden1.jpg";
import RajouriGarden2 from "../../../public/images/Delhi/RajouriGarden/RajouriGarden2.jpg";
import RajouriGarden3 from "../../../public/images/Delhi/RajouriGarden/RajouriGarden3.jpg";
import RajouriGarden4 from "../../../public/images/Delhi/RajouriGarden/RajouriGarden4.jpg";
import CP1 from "../../../public/images/Delhi/CP/CP1.jpg";
import CP2 from "../../../public/images/Delhi/CP/CP2.jpg";
import CP3 from "../../../public/images/Delhi/CP/CP3.jpg";
import CP4 from "../../../public/images/Delhi/CP/CP4.jpg";
import CP5 from "../../../public/images/Delhi/CP/CP5.jpg";
import Sector31 from "../../../public/images/Noida/Sector3/Sector31.jpg";
import Sector32 from "../../../public/images/Noida/Sector3/Sector32.jpg";
import Sector33 from "../../../public/images/Noida/Sector3/Sector33.jpg";
import Sector34 from "../../../public/images/Noida/Sector3/Sector34.jpg";
import Sector35 from "../../../public/images/Noida/Sector3/Sector35.jpg";
import Sector36 from "../../../public/images/Noida/Sector3/Sector36.jpg";
import Sector37 from "../../../public/images/Noida/Sector3/Sector37.jpg";
import LajpatNagar1 from "../../../public/images/Delhi/LajpatNagar/LajpatNagar1.jpg";
import LajpatNagar2 from "../../../public/images/Delhi/LajpatNagar/LajpatNagar2.jpg";
import LajpatNagar3 from "../../../public/images/Delhi/LajpatNagar/LajpatNagar3.jpg";
import Okhla1 from "../../../public/images/Delhi/Okhla/Okhla1.jpg";
import Okhla2 from "../../../public/images/Delhi/Okhla/Okhla2.jpg";
import Okhla3 from "../../../public/images/Delhi/Okhla/Okhla3.jpg";
import Okhla4 from "../../../public/images/Delhi/Okhla/Okhla4.jpg";
import Okhla5 from "../../../public/images/Delhi/Okhla/Okhla5.jpg";
import Verna2 from "../../../public/images/Goa/Verna/Verna2.jpg";
import Verna3 from "../../../public/images/Goa/Verna/Verna3.jpg";
import Verna5 from "../../../public/images/Goa/Verna/Verna5.jpg";
import Verna6 from "../../../public/images/Goa/Verna/Verna6.jpg";
import Verna7 from "../../../public/images/Goa/Verna/Verna7.jpg";
import CyberCity1 from "../../../public/images/Gurgaon/CyberCity/CyberCity1.jpg";
import CyberCity2 from "../../../public/images/Gurgaon/CyberCity/CyberCity2.jpg";
import CyberCity3 from "../../../public/images/Gurgaon/CyberCity/CyberCity3.jpg";
import CyberCity4 from "../../../public/images/Gurgaon/CyberCity/CyberCity4.jpg";
import UdyogVihar1 from "../../../public/images/Gurgaon/UdyogVihar/UdyogVihar1.jpg";
import UdyogVihar2 from "../../../public/images/Gurgaon/UdyogVihar/UdyogVihar2.jpg";
import UdyogVihar3 from "../../../public/images/Gurgaon/UdyogVihar/UdyogVihar3.jpg";
import UdyogVihar4 from "../../../public/images/Gurgaon/UdyogVihar/UdyogVihar4.jpg";
import GolfCourseRoad1 from "../../../public/images/Gurgaon/GolfCourseRoad/GolfCourseRoad1.jpg";
import GolfCourseRoad2 from "../../../public/images/Gurgaon/GolfCourseRoad/GolfCourseRoad2.jpg";
import GolfCourseRoad3 from "../../../public/images/Gurgaon/GolfCourseRoad/GolfCourseRoad3.jpg";
import GolfCourseRoad4 from "../../../public/images/Gurgaon/GolfCourseRoad/GolfCourseRoad4.jpg";
import GolfCourseRoad5 from "../../../public/images/Gurgaon/GolfCourseRoad/GolfCourseRoad5.jpg";
import GolfCourseRoad6 from "../../../public/images/Gurgaon/GolfCourseRoad/GolfCourseRoad6.jpg";
import MukherjeeRd1 from "../../../public/images/Kolkata/MukherjeeRd/MukherjeeRd1.jpg";
import MukherjeeRd3 from "../../../public/images/Kolkata/MukherjeeRd/MukherjeeRd11.jpg";
import MukherjeeRd4 from "../../../public/images/Kolkata/MukherjeeRd/MukherjeeRd12.jpg";
import MukherjeeRd2 from "../../../public/images/Kolkata/MukherjeeRd/MukherjeeRd2.jpg";
import MukherjeeRd5 from "../../../public/images/Kolkata/MukherjeeRd/MukherjeeRd9.jpg";
import iblueentertainment1 from "../../../public/images/Bangalore/iblueentertainment/iblueentertainment1.jpg";
import iblueentertainment2 from "../../../public/images/Bangalore/iblueentertainment/iblueentertainment2.jpg";
import iblueentertainment3 from "../../../public/images/Bangalore/iblueentertainment/iblueentertainment3.jpg";
import iblueentertainment4 from "../../../public/images/Bangalore/iblueentertainment/iblueentertainment4.jpg";
import iblueentertainment5 from "../../../public/images/Bangalore/iblueentertainment/iblueentertainment5.jpg";
import classes from "./LocationSlider2.module.css";

const images = {
  mytimecowork: [MyTime2, MyTime3, MyTime1, MyTime4, MyTime5],
  innove: [Innove2, Innove3, Innove4, Innove5, Innove6],
  havlhitech: [Anna5, Anna2, Anna3, Anna6, Anna8],
  workyard: [Industrial6, Industrial7, Industrial5, Industrial1, Industrial4],
  iblueentertainment: [],
  laxmibusinesscentre: [],
  b2bbusinesscentre: [],
  wisdom: [],
  workyardPunjab: [],
  letsWork: [],
  kcancoworking: [
    MukherjeeRd3,
    MukherjeeRd5,
    MukherjeeRd2,
    MukherjeeRd4,
    MukherjeeRd1,
  ],
  vernawisdom: [Verna6, Verna5, Verna2, Verna3, Verna7],
  iblueentertainment: [
    iblueentertainment1,
    iblueentertainment2,
    iblueentertainment4,
    iblueentertainment3,
    iblueentertainment5,
  ],
  //---new
  dwarka: [Dwarka1, Dwarka2, Dwarka3],
  rajourigarden: [
    RajouriGarden1,
    RajouriGarden2,
    RajouriGarden3,
    RajouriGarden4,
  ],
  connaughtplace: [CP1, CP2, CP3, CP4, CP5],
  okhla: [Okhla1, Okhla2, Okhla3, Okhla4, Okhla5],
  lajpatnagar: [LajpatNagar1, LajpatNagar2, LajpatNagar3],
  cybercity: [CyberCity1, CyberCity2, CyberCity3, CyberCity4],
  udyogvihar: [UdyogVihar1, UdyogVihar2, UdyogVihar3, UdyogVihar4],
  golfcourseroad: [
    GolfCourseRoad1,
    GolfCourseRoad2,
    GolfCourseRoad3,
    GolfCourseRoad4,
    GolfCourseRoad5,
    GolfCourseRoad6,
  ],
  sector3: [
    Sector31,
    Sector32,
    Sector33,
    Sector34,
    Sector35,
    Sector36,
    Sector37,
  ],
};

function LocationSlider2({ id = "mytimecowork" }) {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
      <Slider ref={sliderRef} {...settings}>
        {images[id]?.map((image, index) => (
          <div key={index} className={classes.imageContainer}>
            <Image
              className={classes.image}
              src={image}
              alt="Image"
              fill={true}
              placeholder="blur"
              sizes="(max-width: 768px) 100vw"
            />
          </div>
        ))}
      </Slider>
      {!images[id] && (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "lightGray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Sorry images can be loaded right now!
        </div>
      )}
    </div>
  );
}

export default LocationSlider2;
