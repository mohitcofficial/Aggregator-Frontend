import Image from "next/image";
import Link from "next/link";
import BangaloreImage from "../../../public/images/Bangalore/Bangalore.jpeg";
import DelhiImage from "../../../public/images/Delhi.jpg";
import HaryanaImage from "../../../public/images/Gurgaon/Gurgaon2.jpg";
import HyderabadImage from "../../../public/images/Hyderabad/Hyderabad2.jpeg";
import KolkataImage from "../../../public/images/Kolkata/Kolkata.jpg";
import MaharashtraImage from "../../../public/images/Mumbai/Mumbai.jpg";
import NoidaImage from "../../../public/images/Noida/Noida2.jpeg";
import classes from "./PremiumLocations.module.css";

function PremuimLocations() {
  return (
    <div className={classes.container}>
      <div className={classes.marginBlock}>
        <p className={classes.heading}>
          Our
          <span>Premium Locations</span>
          in India
        </p>
        <div className={classes.locationContainer}>
          <div className={classes.box1}>
            <div className={`${classes.card1} ${classes.card}`}>
              <div className={classes.content1}>
                <p className={classes.text}>Gurgaon</p>
                <p className={classes.text2}>Starts at just &#8377;799</p>
              </div>
              <div className={classes.content2}>
                <Link
                  className={classes.link}
                  href={"/booking/Gurgaon/Cyber-City.html"}
                >
                  Cyber City
                </Link>
                <Link
                  className={classes.link}
                  href={"/booking/Gurgaon/Sector-43.html"}
                >
                  Sector 43
                </Link>

                <Link
                  className={classes.link}
                  href={"/booking/Gurgaon/Golf-Course-Road.html"}
                >
                  Golf Course Road
                </Link>
                <Link
                  className={classes.link}
                  href={"/booking/Gurgaon/Udyog-Vihar.html"}
                >
                  Udyog Vihar
                </Link>
                <Link
                  className={classes.browseButton}
                  href={"/virtual-offices/gurgaon"}
                >
                  Browse All
                </Link>
              </div>
              <Link
                style={{ color: "transparent", cursor: "auto" }}
                href="/virtual-offices/gurgaon"
              >
                <Image
                  className={classes.image}
                  src={HaryanaImage}
                  alt="Image"
                  style={{ cursor: "inherit" }}
                  fill={true}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw"
                />
              </Link>
            </div>
            <div className={`${classes.card2} ${classes.card}`}>
              <div className={classes.content1}>
                <p className={classes.text}>Delhi</p>
                <p className={classes.text2}>Starts at just &#8377;799</p>
              </div>
              <div className={classes.content2}>
                <Link
                  className={classes.link}
                  href={"/booking/Delhi/Saket.html"}
                >
                  Saket
                </Link>
                <Link
                  className={classes.link}
                  href={"/booking/Delhi/Chhattarpur.html"}
                >
                  Chhattarpur
                </Link>

                <Link
                  className={classes.link}
                  href={"/booking/Delhi/Dwarka.html"}
                >
                  Dwarka
                </Link>
                <Link
                  className={classes.browseButton}
                  href={"/virtual-offices/delhi"}
                >
                  Browse All
                </Link>
              </div>
              <Link
                style={{ color: "transparent", cursor: "auto" }}
                href="/virtual-offices/delhi"
              >
                <Image
                  className={classes.image}
                  src={DelhiImage}
                  alt="Image"
                  fill={true}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw"
                />
              </Link>
            </div>
          </div>
          <div className={classes.box1}>
            <div className={`${classes.card3} ${classes.card}`}>
              <div className={classes.content1}>
                <p className={classes.text}>Bangalore</p>
                <p className={classes.text2}>Starts at just &#8377;799</p>
              </div>
              <div className={classes.content2}>
                <Link
                  className={classes.link}
                  href={
                    "/booking/Bangalore/Rabindranath-Tagore-Nagar-Main-Rd-Ganganagar.html"
                  }
                >
                  Rabindranath Tagore Nagar Main Rd Ganganagar
                </Link>
                <Link
                  className={classes.link}
                  href={"/booking/Bangalore/Indiranagar.html"}
                >
                  Indiranagar
                </Link>
                <Link
                  className={classes.browseButton}
                  href={"/virtual-offices/bangalore"}
                >
                  Browse All
                </Link>
              </div>
              <Link
                style={{ color: "transparent", cursor: "auto" }}
                href="/virtual-offices/bangalore"
              >
                <Image
                  className={classes.image}
                  src={BangaloreImage}
                  alt="Image"
                  fill={true}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw"
                />
              </Link>
            </div>
            <div className={`${classes.card6} ${classes.card}`}>
              <div className={classes.content1}>
                <p className={classes.text}>Kolkata</p>
                <p className={classes.text2}>Starts at just &#8377;799</p>
              </div>
              <div className={classes.content2}>
                <Link
                  className={classes.link}
                  href={"/booking/Kolkata/Mukherjee-Rd.html"}
                >
                  Mukherjee Rd
                </Link>
                <Link
                  className={classes.link}
                  href={"/booking/Kolkata/Park-Street.html"}
                >
                  Park Street
                </Link>
                <Link
                  className={classes.link}
                  href={"/booking/Kolkata/Salt-Lake.html"}
                >
                  Salt Lake
                </Link>
                <Link
                  className={classes.browseButton}
                  href={"/virtual-offices/kolkata"}
                >
                  Browse All
                </Link>
              </div>
              <Link
                style={{ color: "transparent", cursor: "auto" }}
                href="/virtual-offices/kolkata"
              >
                <Image
                  className={classes.image}
                  src={KolkataImage}
                  alt="Image"
                  fill={true}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw"
                />
              </Link>
            </div>
            {/* <div className={`${classes.card3} ${classes.card}`}>
              <p className={classes.text}>Hyderabad</p>
              <Link
                style={{ color: "transparent", cursor: "auto" }}
                href="/virtual-offices/hyderabad"
              >
                <Image
                  className={classes.image}
                  src={HyderabadImage}
                  alt="Image"
                  fill={true}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw"
                />
              </Link>
            </div> */}
          </div>
          <div className={classes.box1}>
            <div className={`${classes.card4} ${classes.card}`}>
              <div className={classes.content1}>
                <p className={classes.text}>Noida</p>
                <p className={classes.text2}>Starts at just &#8377;799</p>
              </div>
              <div className={classes.content2}>
                <Link
                  className={classes.link}
                  href={"/booking/Noida/Sector-3.html"}
                >
                  Sector-3
                </Link>
                <Link
                  className={classes.link}
                  href={"/booking/Noida/Sector-2.html"}
                >
                  Sector 2
                </Link>
                <Link
                  className={classes.link}
                  href={"/booking/Noida/Sector-15.html"}
                >
                  Sector 15
                </Link>
                <Link
                  className={classes.browseButton}
                  href={"/virtual-offices/noida"}
                >
                  Browse All
                </Link>
              </div>
              <Link
                style={{ color: "transparent", cursor: "auto" }}
                href="/virtual-offices/noida"
              >
                <Image
                  className={classes.image}
                  src={NoidaImage}
                  alt="Image"
                  fill={true}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw"
                />
              </Link>
            </div>
            <div className={`${classes.card5} ${classes.card}`}>
              <div className={classes.content1}>
                <p className={classes.text}>Mumbai</p>
                <p className={classes.text2}>Starts at just &#8377;799</p>
              </div>
              <div className={classes.content2}>
                <Link
                  className={classes.link}
                  href={"/booking/Mumbai/Andheri.html"}
                >
                  Andheri
                </Link>
                <Link
                  className={classes.link}
                  href={"/booking/Mumbai/Bandra-West.html"}
                >
                  Bandra West
                </Link>
                <Link
                  className={classes.link}
                  href={"/booking/Mumbai/Malad-West.html"}
                >
                  Malad West
                </Link>
                <Link
                  className={classes.browseButton}
                  href={"/virtual-offices/mumbai"}
                >
                  Browse All
                </Link>
              </div>
              <Link
                style={{ color: "transparent", cursor: "auto" }}
                href="/virtual-offices/mumbai"
              >
                <Image
                  className={classes.image}
                  src={MaharashtraImage}
                  alt="Image"
                  fill={true}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremuimLocations;
