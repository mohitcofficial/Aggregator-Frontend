import BusinessIcon from "@mui/icons-material/Business";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import EmailIcon from "@mui/icons-material/Email";
import GroupsIcon from "@mui/icons-material/Groups";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import classes from "./WhyUs.module.css";
import WhyUsCard from "./WhyUsCard";

function VirtualBenefits() {
  return (
    <div className={classes.container}>
      <WhyUsCard
        heading={
          "Optimizing Your Business Address for Maximum Impact and Trust"
        }
        text={
          "The Impact of a Professional Address on Business Perceptions and Trustworthiness"
        }
        icon={
          <BusinessIcon
            // fontSize="large"
            sx={{
              color: "#00a0d0",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color} ${classes.icon}`}
          />
        }
      />
      <WhyUsCard
        heading={"Choosing the Right Mail Handling Service"}
        text={
          "Affordable mail handling services designed to streamline business communication efficiently."
        }
        icon={
          <EmailIcon
            sx={{
              color: "#FCAB14",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"Optimizing Bank and GST Verification"}
        text={
          "Importance of Timely Bank and GST Verification for Smooth Business Transactions"
        }
        icon={
          <DomainVerificationIcon
            sx={{
              color: "#00a0d0",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"Cost Effective Solutions "}
        text={"Budget-friendly solutions for optimizing business operations."}
        icon={
          <MonetizationOnIcon
            sx={{
              color: "#FCAB14",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"Dedicated Customer Support for Your Business"}
        text={
          "Timely resolution of customer queries and issues drives business success with dedicated customer support teams."
        }
        icon={
          <SupportAgentIcon
            sx={{
              color: "#00a0d0",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"Meeting Spaces & Cabins Availability"}
        text={
          "Feel free to use meeting rooms whenever you need them to suit your requirements and schedule."
        }
        icon={
          <GroupsIcon
            sx={{
              color: "#FCAB14",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
    </div>
  );
}

export default VirtualBenefits;
