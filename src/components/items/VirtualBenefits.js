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
        heading={"Professional Business Address"}
        text={
          "Credible business presence with a professional business address."
        }
        icon={
          <BusinessIcon
            // fontSize="large"
            sx={{
              color: "#EC6A3B",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color} ${classes.icon}`}
          />
        }
      />
      <WhyUsCard
        heading={"Mail Handling Services"}
        text={
          "Cost-effective mail handling services to streamline your business communication"
        }
        icon={
          <EmailIcon
            sx={{
              color: "#EC6A3B",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"Bank/GST Verification"}
        text={
          "Timely verification of bank and GST details for seamless business transactions."
        }
        icon={
          <DomainVerificationIcon
            sx={{
              color: "#EC6A3B",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"Cost Effective"}
        text={
          "Budget-friendly solutions for cost-effective business operations"
        }
        icon={
          <MonetizationOnIcon
            sx={{
              color: "#EC6A3B",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"Dedicated Customer Support"}
        text={
          "Timely resolution of queries and issues with dedicated customer support."
        }
        icon={
          <SupportAgentIcon
            sx={{
              color: "#EC6A3B",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"Access to Meeting Rooms"}
        text={
          "Flexible meeting room options to accommodate different group sizes and purposes."
        }
        icon={
          <GroupsIcon
            sx={{
              color: "#EC6A3B",
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
