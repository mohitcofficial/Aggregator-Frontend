import ApartmentIcon from "@mui/icons-material/Apartment";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import GroupsIcon from "@mui/icons-material/Groups";
import PaidIcon from "@mui/icons-material/Paid";
import PhoneIcon from "@mui/icons-material/Phone";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Image from "next/image";
import LP2 from "../../../public/images/LP2.jpg";
import CustomModal2 from "../Modal2";
import classes from "./VirtualServices.module.css";

function VirtualServices() {
  return (
    <div className={classes.container}>
      <div className={classes.marginContainer}>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={LP2}
            alt="Image"
            fill={true}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw"
          />
        </div>
        <div className={classes.content}>
          <p className={classes.heading}>
            Explore the Full Range of Cowork Town Virtual Office Services
          </p>
          <p className={classes.subHeading}>
            Get access to cost-effective vitual office to take your business to
            new cities.
          </p>
          <div className={classes.box}>
            <div className={classes.card}>
              <BusinessIcon sx={{ color: "#930E6B" }} />
              <p className={classes.text}>
                Choose from Cowork Town premium selection of business addresses
                across India.
              </p>
            </div>
            <div className={classes.card}>
              <EmailIcon sx={{ color: "#930E6B" }} />
              <p className={classes.text}>
                Efficient management of mail and business correspondence from
                start to finish.
              </p>
            </div>
            <div className={classes.card}>
              <ApartmentIcon sx={{ color: "#930E6B" }} />
              <p className={classes.text}>
                Professional business representation and reception services
                tailored to enhance your brand.
              </p>
            </div>
            <div className={classes.card}>
              <GroupsIcon sx={{ color: "#930E6B" }} />
              <p className={classes.text}>
                Enhanced client engagement with convenient access to meeting
                rooms.
              </p>
            </div>
            <div className={classes.card}>
              <SupportAgentIcon sx={{ color: "#930E6B" }} />
              <p className={classes.text}>
                Documents typically processed within an average of 3 to 5
                Working Days.
              </p>
            </div>
            <div className={classes.card}>
              <PaidIcon sx={{ color: "#930E6B" }} />
              <p className={classes.text}>
                Tailored, affordable plans designed to meet your unique needs
              </p>
            </div>
            <div className={classes.card}>
              <PhoneIcon sx={{ color: "#930E6B" }} />
              <p className={classes.text}>
                Experience unparalleled business call forwarding solutions.
              </p>
            </div>
          </div>
          <CustomModal2>
            <button className={classes.button}>
              Know More
              <ArrowForwardIcon
                sx={{ fontSize: { xs: 14, sm: 16, md: 18, lg: 20 } }}
              />
            </button>
          </CustomModal2>
        </div>
      </div>
    </div>
  );
}

export default VirtualServices;
