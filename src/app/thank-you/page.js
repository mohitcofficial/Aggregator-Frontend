import classes from "./page.module.css";
import PartnershipImage from "../../../public/images/Partnership.jpg";
import Logo from "../../../public/images/TransparentLogo.png";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

function page() {
  const fontSize = { lg: 80, md: 70, sm: 65, xs: 60 };
  const fontSize2 = { lg: 20, md: 18, sm: 16, xs: 14 };
  return (
    <div className={classes.container}>
      <Image
        src={PartnershipImage}
        alt="img"
        fill
        sizes="(max-width: 768px) 100vw"
        placeholder="blur"
        className={classes.image}
      />
      <div className={classes.imageContainer2}>
        <Image
          src={Logo}
          alt="img"
          fill
          sizes="(max-width: 768px) 100vw"
          placeholder="blur"
          className={classes.image2}
        />
      </div>
      <div className={classes.box}>
        <CheckCircleIcon sx={{ fontSize: fontSize, color: "#00B881" }} />
        <h2 className={classes.heading}>Thank You!</h2>
        <p className={classes.text1}>We have recieved you submission. </p>
        <p className={classes.text2}>
          Our Team will connect to you as soon as possible.
        </p>
        <Link href={"/"} style={{ textDecoration: "none" }}>
          <button className={classes.goBackButton}>
            <ArrowBackIcon sx={{ fontSize: fontSize2 }} />
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default page;
