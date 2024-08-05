"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import classes from "./ContactViaSticker.module.css";

function ContactViaSticker() {
  const fontSize = { xs: 24, sm: 26, md: 30, lg: 30 };
  const fontSize2 = { xs: 18, sm: 20, md: 24, lg: 24 };
  const handleClick = (url) => {
    return () => {
      window.open(url, "_blank");
    };
  };
  return (
    <div className={classes.container}>
      <FacebookIcon
        className={classes.icon}
        sx={{ fontSize: fontSize, color: "#1877F2" }}
        onClick={handleClick(
          "https://www.facebook.com/profile.php?id=61562676830223"
        )}
      />
      <InstagramIcon
        className={classes.icon}
        sx={{ fontSize: fontSize, color: "#d62976" }}
        onClick={handleClick(
          "https://www.instagram.com/virtualxcel?igsh=MThmaWdyZHI1emtvOA=="
        )}
      />
      <LinkedInIcon
        onClick={handleClick(
          "https://www.linkedin.com/company/virtualxcel-solutions"
        )}
        className={classes.icon}
        sx={{ fontSize: fontSize, color: "#0072b1 " }}
      />
      <XIcon
        onClick={handleClick("https://x.com/virtualxcel")}
        className={classes.icon}
        sx={{ fontSize: fontSize2, color: "#000" }}
      />
    </div>
  );
}

export default ContactViaSticker;
