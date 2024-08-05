import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import classes from "./ContactViaSticker.module.css";

function ContactViaSticker() {
  const fontSize = { xs: 24, sm: 26, md: 30, lg: 30 };
  const fontSize2 = { xs: 18, sm: 20, md: 24, lg: 24 };
  return (
    <div className={classes.container}>
      <a
        href="https://www.facebook.com/profile.php?id=61562676830223"
        target="_blank"
        className={classes.icon}
      >
        <FacebookIcon
          sx={{
            fontSize: fontSize,
            color: "#1877F2",
          }}
        />
      </a>
      <a
        href="https://www.instagram.com/virtualxcel?igsh=MThmaWdyZHI1emtvOA=="
        target="_blank"
        className={classes.icon}
      >
        <InstagramIcon
          sx={{
            fontSize: fontSize,
            color: "#d62976",
          }}
        />
      </a>
      <a
        href="https://www.linkedin.com/company/virtualxcel-solutions"
        target="_blank"
        className={classes.icon}
      >
        <LinkedInIcon
          sx={{
            fontSize: fontSize,
            color: "#0072b1",
          }}
        />
      </a>
      <a
        href="https://x.com/virtualxcel"
        target="_blank"
        className={classes.icon}
      >
        <XIcon sx={{ fontSize: fontSize2, color: "#000" }} />
      </a>
    </div>
  );
}

export default ContactViaSticker;
