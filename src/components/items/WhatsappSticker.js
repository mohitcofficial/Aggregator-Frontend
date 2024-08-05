import classes from "./WhatsappSticker.module.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function WhatsappSticker() {
  const fontSize = { xs: 34, sm: 36, md: 38, lg: 40 };
  return (
    <a
      href="https://wa.me/919871001079"
      target="_blank"
      rel="noopener noreferrer"
      className={classes.whatsapp}
    >
      <WhatsAppIcon sx={{ color: "#25d366", fontSize: "40px" }} />
    </a>
  );
}

export default WhatsappSticker;
