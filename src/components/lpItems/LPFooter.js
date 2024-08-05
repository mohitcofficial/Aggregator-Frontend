import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import XIcon from "@mui/icons-material/X";
import Image from "next/image";
import toast from "react-hot-toast";
import TransparentLogo from "../../../public/images/TransparentLogo2.png";
import CustomModal from "../Modal";
import classes from "./LPFooter.module.css";

function LPFooter() {
  const handleMaintainance = () => {
    toast("Section Under Maintainance!", {
      icon: "⚠️",
    });
  };
  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        <div className={`${classes.box1} ${classes.box3}`}>
          <div className={classes.logo}>
            <div className={classes.imageContainer}>
              <Image
                className={classes.image}
                src={TransparentLogo}
                alt="Image"
                fill={true}
                placeholder="blur"
                priority={true}
                quality={true}
              />
            </div>
          </div>
          <div className={classes.slogan}>Collaborate. Create. Cowork.</div>
          <CustomModal>
            <div className={classes.handlesLink}>
              <a
                href="https://www.facebook.com/profile.php?id=61562676830223"
                target="_blank"
                className={classes.icon}
              >
                <FacebookIcon sx={{ fontSize: 22 }} />
              </a>
              <a
                href="https://www.instagram.com/virtualxcel?igsh=MThmaWdyZHI1emtvOA=="
                target="_blank"
                className={classes.icon}
              >
                <InstagramIcon sx={{ fontSize: 22 }} />
              </a>
              <a
                href="https://www.linkedin.com/company/virtualxcel-solutions"
                target="_blank"
                className={classes.icon}
              >
                <LinkedInIcon sx={{ fontSize: 22 }} />
              </a>
              <a
                href="https://x.com/virtualxcel"
                target="_blank"
                className={classes.icon}
              >
                <XIcon sx={{ fontSize: 18 }} />
              </a>
            </div>
          </CustomModal>
        </div>
        <div className={`${classes.box2} ${classes.box1}`}>
          <div className={classes.heading}>Connect with us</div>

          <div className={classes.option}>
            <CallIcon
              sx={{ color: "rgb(254, 173, 22);", marginRight: "8px" }}
            />
            <p className={classes.text}>+91 9871001079</p>
          </div>
          <div className={classes.option}>
            <EmailIcon
              sx={{ color: "rgb(254, 173, 22);", marginRight: "8px" }}
            />
            <p className={classes.text}>sales@virtualxcel.in</p>
          </div>
          <div className={classes.option2}>
            <div className={classes.text2} style={{ alignItems: "center" }}>
              <LocationOnIcon
                sx={{ color: "rgb(254, 173, 22);", marginRight: "8px" }}
              />
              <p>Lower Ground Floor, Saket Salcon Rasvilas,</p>
            </div>
            <p className={classes.text2} style={{ margin: "0 0 4px 32px" }}>
              Saket District Centre, Sector 6, Pushp Vihar,
            </p>
            <p className={classes.text2} style={{ margin: "0 0 4px 32px" }}>
              Next to Select City Walk Mall, Delhi 110017
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LPFooter;
