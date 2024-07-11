import React from "react";
import classses from "./StickerContainer2.module.css";
import DelhiSticker from "../../../public/images/svgs/Delhi.svg";
import NoidaSticker from "../../../public/images/svgs/Noida.svg";
import MumbaiSticker from "../../../public/images/svgs/Mumbai.svg";
import GurgaonSticker from "../../../public/images/svgs/Gurgaon.svg";
import ChandigarhSticker from "../../../public/images/svgs/Chandigarh.svg";
import BangaloreSticker from "../../../public/images/svgs/Bangalore.svg";
import ChennaiSticker from "../../../public/images/svgs/Chennai.svg";
import Sticker from "./Sticker";
import AddIcon from "@mui/icons-material/Add";

function StickerContainer2() {
  const dataArray = [
    {
      name: "Delhi",
      img: DelhiSticker,
      redirect: "/virtual-offices/delhi",
    },
    {
      name: "Gurgaon",
      img: GurgaonSticker,
      redirect: "/virtual-offices/gurgaon",
    },
    {
      name: "Noida",
      img: NoidaSticker,
      redirect: "/virtual-offices/noida",
    },
    {
      name: "Bangalore",
      img: BangaloreSticker,
      redirect: "/virtual-offices/bangalore",
    },
    {
      name: "Mumbai",
      img: MumbaiSticker,
      redirect: "/virtual-offices/mumbai",
    },
    {
      name: "Chandigarh",
      img: ChandigarhSticker,
      redirect: "/virtual-offices/chandigarh",
    },
    {
      name: "Chennai",
      img: ChennaiSticker,
      redirect: "/virtual-offices/chennai",
    },
    {
      name: "View All",
      img: ChennaiSticker,
      icon: <AddIcon sx={{ fontSize: "30px" }} />,
      redirect: "/virtual-offices/chennai",
    },
  ];
  return (
    <div className={classses.container}>
      {dataArray.map((item, index) => (
        <Sticker
          key={index}
          name={item.name}
          img={item.img}
          redirect={item.redirect}
          icon={item.icon || null}
        />
      ))}
    </div>
  );
}

export default StickerContainer2;
