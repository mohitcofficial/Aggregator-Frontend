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
import AsafAliRd1 from "../../../public/images/Delhi/AsafAliRd/AsafAliRd1.jpeg";
import AsafAliRd2 from "../../../public/images/Delhi/AsafAliRd/AsafAliRd2.jpeg";
import AsafAliRd3 from "../../../public/images/Delhi/AsafAliRd/AsafAliRd3.jpg";
import Chhattarpur1 from "../../../public/images/Delhi/Chhattarpur/Chhattarpur1.jpeg";
import Chhattarpur2 from "../../../public/images/Delhi/Chhattarpur/Chhattarpur2.jpeg";
import Chhattarpur3 from "../../../public/images/Delhi/Chhattarpur/Chhattarpur3.jpeg";
import Chhattarpur4 from "../../../public/images/Delhi/Chhattarpur/Chhattarpur4.jpeg";
import NehruPlace1 from "../../../public/images/Delhi/NehruPlace/NehruPlace1.jpg";
import NehruPlace2 from "../../../public/images/Delhi/NehruPlace/NehruPlace2.jpg";
import NehruPlace3 from "../../../public/images/Delhi/NehruPlace/NehruPlace3.jpg";
import LaxmiNagar1 from "../../../public/images/Delhi/LaxmiNagar/LaxmiNagar1.jpg";
import LaxmiNagar2 from "../../../public/images/Delhi/LaxmiNagar/LaxmiNagar2.jpg";
import LaxmiNagar3 from "../../../public/images/Delhi/LaxmiNagar/LaxmiNagar3.jpg";
import LaxmiNagar4 from "../../../public/images/Delhi/LaxmiNagar/LaxmiNagar4.jpg";
import Verna2 from "../../../public/images/Goa/Verna/Verna2.jpg";
import Verna3 from "../../../public/images/Goa/Verna/Verna3.jpg";
import Verna5 from "../../../public/images/Goa/Verna/Verna5.jpg";
import Verna6 from "../../../public/images/Goa/Verna/Verna6.jpg";
import Verna7 from "../../../public/images/Goa/Verna/Verna7.jpg";
import Dwarka1 from "../../../public/images/Delhi/Dwarka/Dwarka1.jpg";
import Dwarka2 from "../../../public/images/Delhi/Dwarka/Dwarka2.jpg";
import Dwarka3 from "../../../public/images/Delhi/Dwarka/Dwarka3.jpg";
import CP1 from "../../../public/images/Delhi/CP/CP1.jpg";
import CP2 from "../../../public/images/Delhi/CP/CP2.jpg";
import CP3 from "../../../public/images/Delhi/CP/CP3.jpg";
import CP4 from "../../../public/images/Delhi/CP/CP4.jpg";
import CP5 from "../../../public/images/Delhi/CP/CP5.jpg";
import Sector21 from "../../../public/images/Noida/Sector2/Sector21.png";
import Sector22 from "../../../public/images/Noida/Sector2/Sector22.png";
import Sector31 from "../../../public/images/Noida/Sector3/Sector31.jpg";
import Sector32 from "../../../public/images/Noida/Sector3/Sector32.jpg";
import Sector33 from "../../../public/images/Noida/Sector3/Sector33.jpg";
import Sector34 from "../../../public/images/Noida/Sector3/Sector34.jpg";
import Sector35 from "../../../public/images/Noida/Sector3/Sector35.jpg";
import Sector36 from "../../../public/images/Noida/Sector3/Sector36.jpg";
import Sector37 from "../../../public/images/Noida/Sector3/Sector37.jpg";
import Sector151 from "../../../public/images/Noida/Sector15/Sector151.jpg";
import Sector152 from "../../../public/images/Noida/Sector15/Sector152.jpg";
import Sector153 from "../../../public/images/Noida/Sector15/Sector153.jpg";
import Sector621 from "../../../public/images/Noida/Sector62/Sector621.jpeg";
import Sector622 from "../../../public/images/Noida/Sector62/Sector622.jpeg";
import Sector631 from "../../../public/images/Noida/Sector63/Sector631.webp";
import Sector632 from "../../../public/images/Noida/Sector63/Sector632.webp";
import Sector633 from "../../../public/images/Noida/Sector63/Sector633.png";
import Sector1321 from "../../../public/images/Noida/Sector132/Sector1321.jpeg";
import Sector1322 from "../../../public/images/Noida/Sector132/Sector1322.jpeg";
import Sector191 from "../../../public/images/Noida/Sector19/Sector191.jpg";
import Sector192 from "../../../public/images/Noida/Sector19/Sector192.jpg";
import Sector161 from "../../../public/images/Noida/Sector16/Sector161.jpeg";
import Sector162 from "../../../public/images/Noida/Sector16/Sector162.webp";
import Okhla1 from "../../../public/images/Delhi/Okhla/Okhla1.jpg";
import Okhla2 from "../../../public/images/Delhi/Okhla/Okhla2.jpg";
import Okhla3 from "../../../public/images/Delhi/Okhla/Okhla3.jpg";
import Okhla4 from "../../../public/images/Delhi/Okhla/Okhla4.jpg";
import Okhla5 from "../../../public/images/Delhi/Okhla/Okhla5.jpg";
import CyberCity1 from "../../../public/images/Gurgaon/CyberCity/CyberCity1.jpg";
import CyberCity2 from "../../../public/images/Gurgaon/CyberCity/CyberCity2.jpg";
import CyberCity3 from "../../../public/images/Gurgaon/CyberCity/CyberCity3.jpg";
import CyberCity4 from "../../../public/images/Gurgaon/CyberCity/CyberCity4.jpg";
import LajpatNagar1 from "../../../public/images/Delhi/LajpatNagar/LajpatNagar1.jpg";
import LajpatNagar2 from "../../../public/images/Delhi/LajpatNagar/LajpatNagar2.jpg";
import LajpatNagar3 from "../../../public/images/Delhi/LajpatNagar/LajpatNagar3.jpg";
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
import RajouriGarden1 from "../../../public/images/Delhi/RajouriGarden/RajouriGarden1.jpg";
import RajouriGarden2 from "../../../public/images/Delhi/RajouriGarden/RajouriGarden2.jpg";
import RajouriGarden3 from "../../../public/images/Delhi/RajouriGarden/RajouriGarden3.jpg";
import RajouriGarden4 from "../../../public/images/Delhi/RajouriGarden/RajouriGarden4.jpg";
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
import WhiteField1 from "../../../public/images/Bangalore/WhiteField/WhiteField1.jpg";
import WhiteField2 from "../../../public/images/Bangalore/WhiteField/WhiteField2.jpg";
import WhiteField3 from "../../../public/images/Bangalore/WhiteField/WhiteField3.jpg";
import WhiteField4 from "../../../public/images/Bangalore/WhiteField/WhiteField4.jpg";
import Indiranagar1 from "../../../public/images/Bangalore/Indiranagar/Indiranagar1.jpg";
import Indiranagar2 from "../../../public/images/Bangalore/Indiranagar/Indiranagar2.jpg";
import Indiranagar3 from "../../../public/images/Bangalore/Indiranagar/Indiranagar3.jpg";
import Indiranagar4 from "../../../public/images/Bangalore/Indiranagar/Indiranagar4.jpg";
import HSRLayout1 from "../../../public/images/Bangalore/HSRLayout/HSRLayout1.jpg";
import HSRLayout2 from "../../../public/images/Bangalore/HSRLayout/HSRLayout2.jpg";
import HSRLayout3 from "../../../public/images/Bangalore/HSRLayout/HSRLayout3.jpg";
import HSRLayout4 from "../../../public/images/Bangalore/HSRLayout/HSRLayout4.jpg";
import Koramangala1 from "../../../public/images/Bangalore/Koramangala/Koramangala1.jpg";
import Koramangala2 from "../../../public/images/Bangalore/Koramangala/Koramangala2.jpg";
import Koramangala3 from "../../../public/images/Bangalore/Koramangala/Koramangala3.jpeg";
import Ganganagar1 from "../../../public/images/Bangalore/Ganganagar/Ganganagar1.jpg";
import Ganganagar2 from "../../../public/images/Bangalore/Ganganagar/Ganganagar2.jpeg";
import Ganganagar3 from "../../../public/images/Bangalore/Ganganagar/Ganganagar3.jpg";
import Ganganagar4 from "../../../public/images/Bangalore/Ganganagar/Ganganagar4.jpg";
import BandraWest1 from "../../../public/images/Mumbai/BandraWest/BandraWest1.jpg";
import BandraWest2 from "../../../public/images/Mumbai/BandraWest/BandraWest2.jpg";
import BandraWest3 from "../../../public/images/Mumbai/BandraWest/BandraWest3.jpg";
import Andheri1 from "../../../public/images/Mumbai/Andheri/Andheri1.jpeg";
import Andheri2 from "../../../public/images/Mumbai/Andheri/Andheri2.jpg";
import Andheri3 from "../../../public/images/Mumbai/Andheri/Andheri3.jpg";
import BandraKurlaComplex1 from "../../../public/images/Mumbai/BandraKurlaComplex/BandraKurlaComplex1.jpg";
import BandraKurlaComplex2 from "../../../public/images/Mumbai/BandraKurlaComplex/BandraKurlaComplex2.jpg";
import BandraKurlaComplex3 from "../../../public/images/Mumbai/BandraKurlaComplex/BandraKurlaComplex3.jpg";
import SantaCruz1 from "../../../public/images/Mumbai/SantaCruz/SantaCruz1.jpg";
import SantaCruz2 from "../../../public/images/Mumbai/SantaCruz/SantaCruz2.jpg";
import SantaCruz3 from "../../../public/images/Mumbai/SantaCruz/SantaCruz3.jpg";
import Powai1 from "../../../public/images/Mumbai/Powai/Powai1.jpg";
import Powai2 from "../../../public/images/Mumbai/Powai/Powai2.jpg";
import Powai3 from "../../../public/images/Mumbai/Powai/Powai3.jpg";
import Airoli1 from "../../../public/images/Mumbai/Airoli/Airoli1.jpg";
import Airoli2 from "../../../public/images/Mumbai/Airoli/Airoli2.jpg";
import Airoli3 from "../../../public/images/Mumbai/Airoli/Airoli3.jpg";
import Kandivali1 from "../../../public/images/Mumbai/Kandivali/Kandivali1.jpg";
import Kandivali2 from "../../../public/images/Mumbai/Kandivali/Kandivali2.jpg";
import Kandivali3 from "../../../public/images/Mumbai/Kandivali/Kandivali3.jpg";
import MaladWest1 from "../../../public/images/Mumbai/MaladWest/MaladWest1.jpg";
import MaladWest2 from "../../../public/images/Mumbai/MaladWest/MaladWest2.jpg";

import Sector431 from "../../../public/images/Gurgaon/Sector43/Sector431.webp";
import Sector432 from "../../../public/images/Gurgaon/Sector43/Sector432.jpg";
import Sector433 from "../../../public/images/Gurgaon/Sector43/Sector433.jpeg";
import SohnaRoad1 from "../../../public/images/Gurgaon/SohnaRoad/SohnaRoad1.webp";
import SohnaRoad2 from "../../../public/images/Gurgaon/SohnaRoad/SohnaRoad2.webp";
import SohnaRoad3 from "../../../public/images/Gurgaon/SohnaRoad/SohnaRoad3.webp";
import MGRoad1 from "../../../public/images/Gurgaon/MGRoad/MGRoad1.jpg";
import MGRoad2 from "../../../public/images/Gurgaon/MGRoad/MGRoad2.png";
import MGRoad3 from "../../../public/images/Gurgaon/MGRoad/MGRoad3.webp";
import SushantLok1 from "../../../public/images/Gurgaon/SushantLok/SushantLok1.jpeg";
import SushantLok2 from "../../../public/images/Gurgaon/SushantLok/SushantLok2.webp";
import SushantLok3 from "../../../public/images/Gurgaon/SushantLok/SushantLok3.webp";
import CyberPark1 from "../../../public/images/Gurgaon/CyberPark/CyberPark1.webp";
import CyberPark2 from "../../../public/images/Gurgaon/CyberPark/CyberPark2.webp";
import CyberPark3 from "../../../public/images/Gurgaon/CyberPark/CyberPark3.webp";
import classes from "./LocationSlider.module.css";

const images = {
  //Delhi
  mytimecowork: [MyTime2, MyTime3, MyTime1, MyTime4, MyTime5],
  innove: [Innove2, Innove3, Innove4, Innove5, Innove6],
  asafali: [AsafAliRd1, AsafAliRd2, AsafAliRd3],
  chhattarpur: [Chhattarpur1, Chhattarpur2, Chhattarpur3, Chhattarpur4],
  rajourigarden: [
    RajouriGarden1,
    RajouriGarden2,
    RajouriGarden3,
    RajouriGarden4,
  ],
  dwarka: [Dwarka1, Dwarka2, Dwarka3],
  connaughtplace: [CP1, CP2, CP3, CP4, CP5],
  okhla: [Okhla1, Okhla2, Okhla3, Okhla4, Okhla5],
  lajpatnagar: [LajpatNagar1, LajpatNagar2, LajpatNagar3],
  laxminagar: [LaxmiNagar1, LaxmiNagar2, LaxmiNagar3, LaxmiNagar4],
  nehruplace: [NehruPlace1, NehruPlace2, NehruPlace3],

  havlhitech: [Anna5, Anna2, Anna3, Anna6, Anna8],
  workyard: [Industrial6, Industrial7, Industrial5, Industrial1, Industrial4],
  laxmibusinesscentre: [],
  b2bbusinesscentre: [],
  wisdom: [],
  workyardPunjab: [],
  //gurgaon
  letsWork: [Sector431, Sector432, Sector433],
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
  sohnaroad: [SohnaRoad1, SohnaRoad2, SohnaRoad3],
  mgroad: [MGRoad1, MGRoad2, MGRoad3],
  sushantlok: [SushantLok1, SushantLok2, SushantLok3],
  cyberpark: [CyberPark1, CyberPark2, CyberPark3],
  palmcourt: [],
  kcancoworking: [
    MukherjeeRd3,
    MukherjeeRd5,
    MukherjeeRd2,
    MukherjeeRd4,
    MukherjeeRd1,
  ],
  vernawisdom: [Verna6, Verna5, Verna2, Verna3, Verna7],
  //bangalore
  iblueentertainment: [
    iblueentertainment1,
    iblueentertainment2,
    iblueentertainment4,
    iblueentertainment3,
    iblueentertainment5,
  ],
  whitefield: [WhiteField1, WhiteField2, WhiteField3, WhiteField4],
  indiranagar: [Indiranagar1, Indiranagar2, Indiranagar3, Indiranagar4],
  hsrLayout: [HSRLayout1, HSRLayout2, HSRLayout3, HSRLayout4],
  koramangala: [Koramangala1, Koramangala2, Koramangala3],
  ganganagar: [Ganganagar1, Ganganagar2, Ganganagar3, Ganganagar4],
  //Noida
  sector3: [
    Sector31,
    Sector32,
    Sector33,
    Sector34,
    Sector35,
    Sector36,
    Sector37,
  ],
  sector2: [Sector21, Sector22],
  sector15: [Sector151, Sector152, Sector153],
  sector19: [Sector191, Sector192],
  sector16: [Sector161, Sector162],
  sector62: [Sector621, Sector622],
  sector63: [Sector633, Sector632, Sector631],
  sector132: [Sector1321, Sector1322],
  //mumbai
  laxmibusinesscentre: [BandraWest2, BandraWest3, BandraWest1],
  andheri: [Andheri1, Andheri2, Andheri3],
  kandrakurlacomplex: [
    BandraKurlaComplex1,
    BandraKurlaComplex2,
    BandraKurlaComplex3,
  ],
  santacruz: [SantaCruz1, SantaCruz2, SantaCruz3],
  powai: [Powai1, Powai2, Powai3],
  airoli: [Airoli1, Airoli2, Airoli3],
  kandivaliwest: [Kandivali1, Kandivali2, Kandivali3],
  maladwest: [MaladWest1, MaladWest2],
};

function LocationSlider({ name = "mytimecowork", id = "mytimecowork" }) {
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
    </div>
  );
}

export default LocationSlider;
