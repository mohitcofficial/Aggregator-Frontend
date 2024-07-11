import GetHelpButton from "@/utils/buttons/GetHelpButton";
import classes from "./ContactUsPoster.module.css";
import Image from "next/image";
import BackgroundImage from "../../../public/images/Help.png";

function ContactUsPoster() {
  return (
    <div className={classes.container}>
      <Image
        className={classes.image}
        src={BackgroundImage}
        alt=""
        width={100}
        height={100}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw"
      />
      <div className={classes.textContent}>
        <span className={classes.text1}>
          Still struggling with GST Invoicing ?
        </span>
        <span className={classes.text2}>
          Connect directly over call or physical meet
        </span>
        <GetHelpButton />
      </div>
    </div>
  );
}

export default ContactUsPoster;
