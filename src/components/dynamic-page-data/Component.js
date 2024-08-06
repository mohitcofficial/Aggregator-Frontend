"use client";
import React, { useEffect, useState } from "react";
import classes from "./Component.module.css";
import Form from "./Form";
import PlanSlider from "../slider/PlanSlider";
import { data } from "../../app/data/LocationData";

import LocationSlider2 from "../slider/LocationSlider2";
// import dynamic from "next/dynamic";
// const LocationSlider2 = dynamic(
//   () => import("../../components/slider/LocationSlider2"),
//   {
//     ssr: false,
//   }
// );

const cityMap = {
  Delhi: "New Delhi",
  Chandigarh: "Chandigarh",
  Noida: "Noida",
  Kolkata: "Kolkata",
  Bangalore: "Bangalore",
  Mumbai: "Mumbai",
  Chennai: "Chennai",
  Gurgaon: "Gurgaon",
  Punjab: "Punjab",
  Goa: "Goa",
  Kochi: "Kochi",
  Hyderabad: "Hyderabad",
};
const locationMap = {
  Dwarka: "Dwarka",
  "Saket-Near-Metro-Station": "Saket Near Metro Station",
  "Saket-Near-Select-City": "Saket Near Select City",
  "Asaf-Ali": "Asaf Ali",
  Chhattarpur: "Chhattarpur",
  Janakpuri: "Janakpuri",
  "Rajouri-Garden": "Rajouri Garden",
  "Connaught-Place": "Connaught Place",
  "Connaught-Place": "Connaught Place",
  Okhla: "Okhla",
  "Lajpat-Nagar": "Lajpat Nagar",
  "Laxmi-Nagar": "Laxmi Nagar",
  "Nehru-Place": "Nehru Place",
  "Industrial-Area": "Industrial Area",
  ZirakPur: "ZirakPur",
  "Phase-7": "Phase 7",
  "Sector-26": "Sector 26",
  "Mukherjee-Rd": "Mukherjee Rd",
  Elgin: "Elgin",
  Bidhannagar: "Bidhannagar",
  "Park-Street": "Park Street",
  "Salt-Lake": "Salt Lake",
  "East-Kolkata-Township": "East Kolkata Township",
  "Rabindranath-Tagore-Nagar-Main-Rd-Ganganagar":
    "Rabindranath Tagore Nagar Main Rd Ganganagar",
  Whitefield: "Whitefield",
  Indiranagar: "Indiranagar",
  Ganganagar: "Ganganagar",
  Koramangala: "Koramangala",
  "HSR-Layout": "HSR Layout",
  "Bandra-West": "Bandra West",
  Andheri: "Andheri",
  "Bandra-Kurla-Complex": "Bandra Kurla Complex",
  "Santa-Cruz": "Santa Cruz",
  Powai: "Powai",
  Airoli: "Airoli",
  "Kandivali West": "Kandivali West",
  "Malad-West": "Malad West",
  "Anna-Salai-Rd": "Anna Salai Rd",
  Perungudi: "Perungudi",
  Thoraipakkam: "Thoraipakkam",
  Guindy: "Guindy",
  Saidapet: "Saidapet",
  Teynampet: "Teynampet",
  "Sector-43": "Sector 43",
  "Cyber-City": "Cyber City",
  "Udyog-Vihar": "Udyog Vihar",
  "Golf-Course-Road": "Golf Course Road",
  "Sohna-Road": "Sohna Road",
  "MG-Road": "MG Road",
  "Sushant-Lok": "Sushant Lok",
  "Cyber-Park": "Cyber Park",
  "Palm-Court": "Palm Court",
  Peermuchalla: "Peermuchalla",
  Panjim: "Panjim",
  Verna: "Verna",
  Kharadi: "Kharadi",
  Yervada: "Yervada",
  "Viman-Nagar": "Viman Nagar",
  "Pimpri-Chinchwad": "Pimpri Chinchwad",
  Hinjewadi: "Hinjewadi",
  "Koregon-Park": "Koregon Park",
  Bandhan: "Bandhan",
  Baner: "Baner",
  "Sector-3": "Sector 3",
  "Sector-2": "Sector 2",
  "Sector-15": "Sector 15",
  "Sector-62": "Sector 62",
  "Sector-63": "Sector 63",
  "Sector-132": "Sector 132",
  "Sector-19": "Sector 19",
  "Sector-16": "Sector 16",
  Earnakulam: "Earnakulam",
  Angamaly: "Angamaly",
  Edappally: "Edappally",
  Kakkanad: "Kakkanad",
  Kadavanthra: "Kadavanthra",
  Kondapur: "Kondapur",
  "HITEC-City": "HITEC City",
  Gachibowli: "Gachibowli",
  Madhapur: "Madhapur",
  "Banjara-Hills": "Banjara Hills",
};

function Component({ city, location }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("businessRegistration");
  const [tenure, setTenure] = useState(12);
  const [calculatedPrice, setCalculatedPrice] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [businessPrice, setBusinessPrice] = useState(null);
  const [gstPrice, setGstPrice] = useState(null);
  const [mailingPrice, setMailingPrice] = useState(null);
  const [locationId, setLocationId] = useState(null);

  useEffect(() => {
    const arr = data[cityMap[city]];
    if (arr) {
      const cur = arr?.filter((item) => item.name === locationMap[location]);
      if (cur && cur.length > 0) {
        setBusinessPrice(cur[0]?.businessPrice);
        setGstPrice(cur[0]?.gstPrice);
        setMailingPrice(cur[0]?.mailingPrice);
        setLocationId(cur[0]?.id);
        setCalculatedPrice(cur[0]?.gstPrice);
      }
    }
  }, []);

  return (
    <div className={classes.marginContainer}>
      <div className={classes.leftContainer}>
        <LocationSlider2 id={locationId} />
        <div className={classes.headingContainer}>
          <h2 className={classes.heading}>{location}</h2>
          <p className={classes.text}>({city})</p>
        </div>
        <div className={classes.options}>
          <button
            className={`${classes.option} ${
              activeIndex === 0 ? classes.active : ""
            }`}
            onClick={() => {
              setActiveIndex(0);
            }}
          >
            Business Registration
          </button>
          <button
            className={`${classes.option} ${
              activeIndex === 1 ? classes.active : ""
            }`}
            onClick={() => {
              setActiveIndex(1);
            }}
          >
            GST Registration
          </button>
          <button
            className={`${classes.option} ${
              activeIndex === 2 ? classes.active : ""
            }`}
            onClick={() => {
              setActiveIndex(2);
            }}
          >
            Mailing Address
          </button>
        </div>
        {activeIndex === 0 ? (
          <PlanSlider
            price={businessPrice}
            setCalculatedPrice={setCalculatedPrice}
            tenure={tenure}
            setTenure={setTenure}
            activeIndex={activeIndex}
            type={type}
            setType={setType}
          />
        ) : (
          <></>
        )}
        {activeIndex === 1 ? (
          <PlanSlider
            activeIndex={activeIndex}
            price={gstPrice}
            setCalculatedPrice={setCalculatedPrice}
            tenure={tenure}
            setTenure={setTenure}
            type={type}
            setType={setType}
          />
        ) : (
          <></>
        )}
        {activeIndex === 2 ? (
          <PlanSlider
            activeIndex={activeIndex}
            price={mailingPrice}
            setCalculatedPrice={setCalculatedPrice}
            tenure={tenure}
            setTenure={setTenure}
            type={type}
            setType={setType}
          />
        ) : (
          <></>
        )}
      </div>
      <div className={classes.rightContainer}>
        <Form
          location={location}
          price={calculatedPrice}
          tenure={tenure}
          setTenure={setTenure}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          type={type}
          setType={setType}
        />
      </div>
    </div>
  );
}

export default Component;
