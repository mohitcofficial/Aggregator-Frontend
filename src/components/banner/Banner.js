"use client";
import React, { useState, useEffect } from "react";
import classes from "./Banner.module.css";
import Typewriter from "typewriter-effect";
import SearchIcon from "@mui/icons-material/Search";
// import { toast } from "react-toastify";
import toast from "react-hot-toast";

import Image from "next/image";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Background1 from "../../../public/images/Background1.jpg";
import { useRouter } from "next/navigation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StickerContainer from "../items/StickerContainer";

const values1 = [
  "Virtual Offices",
  "Coworking Spaces",
  "Meeting Rooms",
  "Private Cabin",
];
const values2 = [
  "Delhi",
  "Gurgaon",
  "Noida",
  "Bangalore",
  "Mumbai",
  "Hyderabad",
  "Kolkata",
  "Pune",
  "Chennai",
  "Goa",
  "Kochi",
  "Kerala",
  "Chandigarh",
  "Punjab",
];

function Banner() {
  // const [dropdown1Open, setDropdown1Open] = useState(false);
  // const [dropdown1Val, setDropdown1Val] = useState(0);
  const router = useRouter();
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [found, setFound] = useState(false);
  const [filteredData, setFilteredData] = useState([...values2]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const newArray = values2.filter((item) => {
      const cur = item.toLowerCase();
      return cur.includes(input.toLowerCase());
    });
    if (input.length > 0 && newArray.length != 1) setDropdown2Open(true);
    if (newArray.length === 0) {
      setFound(false);
      setFilteredData([]);
    } else {
      if (input.length === 0) setFound(false);
      else setFound(true);
      setFilteredData([...newArray]);
    }
  }, [input]);

  const handleSearch = () => {
    if (input.length == 0) {
      toast("Please Enter Location!", {
        icon: "⚠️",
      });
      return;
    }
    if (!found) {
      toast("Invalid Location!", {
        icon: "⚠️",
      });
      return;
    }

    if (input === "Delhi" || input === "delhi") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/delhi");
      return;
    } else if (input === "Gurgaon" || input === "gurgaon") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/gurgaon");
      return;
    } else if (input === "Noida" || input === "noida") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/noida");
      return;
    } else if (input === "Bangalore" || input === "bangalore") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/bangalore");
      return;
    } else if (input === "Mumbai" || input === "mumbai") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/mumbai");
      return;
    } else if (input === "Hyderabad" || input === "hyderabad") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/hyderabad");
      return;
    } else if (input === "Kolkata" || input === "kolkata") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/kolkata");
      return;
    } else if (input === "Pune" || input === "pune") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/pune");
      return;
    } else if (input === "Chennai" || input === "chennai") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/chennai");
      return;
    } else if (input === "Kochi" || input === "kochi") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/kochi");
      return;
    } else if (input === "Kerala" || input === "kerala") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/kerala");
      return;
    } else if (input === "Goa" || input === "goa") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/goa");
      return;
    } else if (input === "Punjab" || input === "punjab") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/punjab");
      return;
    } else if (input === "Chandigarh" || input === "chandigarh") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/chandigarh");
      return;
    }

    toast("Invalid Location!", {
      icon: "⚠️",
    });
  };
  const handleSearch2 = (input) => {
    console.log("Input:", input);
    if (input.length == 0) {
      toast("Please Enter Location!", {
        icon: "⚠️",
      });
      return;
    }

    if (input === "Delhi" || input === "delhi") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/delhi");
      return;
    } else if (input === "Gurgaon" || input === "gurgaon") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/gurgaon");
      return;
    } else if (input === "Noida" || input === "noida") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/noida");
      return;
    } else if (input === "Bangalore" || input === "bangalore") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/bangalore");
      return;
    } else if (input === "Mumbai" || input === "mumbai") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/mumbai");
      return;
    } else if (input === "Hyderabad" || input === "hyderabad") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/hyderabad");
      return;
    } else if (input === "Kolkata" || input === "kolkata") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/kolkata");
      return;
    } else if (input === "Pune" || input === "pune") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/pune");
      return;
    } else if (input === "Chennai" || input === "chennai") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/chennai");
      return;
    } else if (input === "Kochi" || input === "kochi") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/kochi");
      return;
    } else if (input === "Kerala" || input === "kerala") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/kerala");
      return;
    } else if (input === "Goa" || input === "goa") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/goa");
      return;
    } else if (input === "Punjab" || input === "punjab") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/punjab");
      return;
    } else if (input === "Chandigarh" || input === "chandigarh") {
      setTimeout(() => {
        toast.success("Search Successful !");
      }, 300);
      router.push("/virtual-offices/chandigarh");
      return;
    }

    toast("Invalid Location!", {
      icon: "⚠️",
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <div className={classes.backgroundImage}>
          <Image
            className={classes.image}
            fill={true}
            src={Background1}
            alt="Image"
          />
        </div>
        <div className={classes.textContent}>
          <div className={classes.heading1}>
            <div>Unlock Your</div>
            <div className={classes.gradientText2}>Productivity</div>
            <div>Potential</div>
            with Us
          </div>
          <div className={`${classes.typewriter}`}>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "Your Vision, Our Space",
                  "Inspire. Collaborate. Succeed.",
                  "Your Desk, Your Way, Your Success",
                  "Unleash Your Potential in a Shared Space",
                ],
                pauseFor: 600,
              }}
            />
          </div>
          <div className={classes.searchField}>
            {/* <div className={classes.dropdown1}>
              <div
                onClick={() => {
                  setDropdown1Open((prev) => !prev);
                  setDropdown2Open(false);
                }}
                className={classes.dropdown1Header}
              >
                <p>{values1[dropdown1Val]}</p>
                {dropdown1Open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </div>
              {dropdown1Open && (
                <ul
                  className={classes.dropdown1List}
                >
                  {values1.map((item, index) => (
                    <li
                      onClick={() => {
                        setDropdown1Val(index);
                        setDropdown1Open(false);
                      }}
                      key={index}
                      className={classes.dropdown1ListItem}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div> */}
            <div className={classes.locationIcon}>
              <LocationOnIcon
                sx={{
                  // color: found ? "rgb(0, 159, 0)" : "rgb(254, 173, 22)",
                  color: "rgb(254, 173, 22)",
                  fontSize: { xs: 28, sm: 32, md: 36, lg: 40 },
                }}
              />
            </div>
            <div className={classes.dropdown2}>
              <input
                className={classes.inputField}
                type="text"
                onFocus={() => {
                  setDropdown2Open(true);
                  // setDropdown1Open(false);
                }}
                onBlur={() => {
                  setTimeout(() => {
                    setDropdown2Open(false);
                  }, 150);
                }}
                placeholder="Enter the location"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              {dropdown2Open && (
                <ul className={classes.dropdown2List}>
                  {filteredData.map((item, index) => (
                    <li
                      onClick={() => {
                        setInput(item);
                        handleSearch2(item);
                        setDropdown2Open(false);
                      }}
                      key={index}
                      className={classes.dropdown2ListItem}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div onClick={handleSearch} className={classes.searchButton}>
              <SearchIcon
                sx={{ fontSize: { xs: 28, sm: 32, md: 36, lg: 40 } }}
              />
            </div>
          </div>
          {/* <StickerContainer /> */}
          <button>View All Locations</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
