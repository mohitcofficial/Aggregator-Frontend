import BusinessIcon from "@mui/icons-material/Business";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import EmailIcon from "@mui/icons-material/Email";
import GroupsIcon from "@mui/icons-material/Groups";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import classes from "./WhyUs.module.css";
import WhyUsCard from "./WhyUsCard";

function VirtualBenefits() {
  const fontSize = { lg: 100, md: 50, sm: 44, xs: 36 };
  return (
    <div className={classes.container}>
      <div className={classes.backgroundDesign}></div>

      <div className={classes.cardContainerleft}>
        <WhyUsCard
          heading={
            "Optimizing Your Business Address for Maximum Impact and Trust"
          }
          text={
            "The Impact of a Professional Address on Business Perceptions and Trustworthiness"
          }
          icon={
            <BusinessIcon
              sx={{
                color: "#ffff",
                backgroundColor: "#00a0d0",
                fontSize: fontSize,
                borderRadius: "50%",
                padding: "20px",
                border: "4px solid #fff",
              }}
              className={`${classes.gradientText} ${classes.color} ${classes.icon}`}
            />
          }
        />
      </div>
      <div className={classes.cardContainerRight}>
        <WhyUsCard
          heading={"Choosing the Right Mail Handling Service"}
          text={
            "Affordable mail handling services designed to streamline business communication efficiently."
          }
          icon={
            <EmailIcon
              sx={{
                fontSize: fontSize,
                borderRadius: "50%",
                padding: "20px",
                color: "#fff",
                backgroundColor: "#FCAB14",
                border: "4px solid #fff",
              }}
              className={`${classes.gradientText} ${classes.color}`}
            />
          }
          right={true}
        />
      </div>
      <div className={classes.cardContainerleft}>
        <WhyUsCard
          heading={"Optimizing Bank and GST Verification"}
          text={
            "Importance of Timely Bank and GST Verification for Smooth Business Transactions"
          }
          icon={
            <DomainVerificationIcon
              sx={{
                fontSize: fontSize,
                borderRadius: "50%",
                padding: "20px",
                color: "#fff",
                backgroundColor: "#00a0d0",
                border: "4px solid #fff",
              }}
              className={`${classes.gradientText} ${classes.color}`}
            />
          }
        />
      </div>
      <div className={classes.cardContainerRight}>
        <WhyUsCard
          heading={"Cost Effective Solutions "}
          text={"Budget-friendly solutions for optimizing business operations."}
          icon={
            <MonetizationOnIcon
              sx={{
                fontSize: fontSize,
                borderRadius: "50%",
                padding: "20px",
                border: "4px solid #fff",
                color: "#fff",
                backgroundColor: "#FCAB14",
              }}
              className={`${classes.gradientText} ${classes.color}`}
            />
          }
          right={true}
        />
      </div>
      <div className={classes.cardContainerleft}>
        <WhyUsCard
          heading={"Dedicated Customer Support for Your Business"}
          text={
            "Timely resolution of customer queries and issues drives business success with dedicated customer support teams."
          }
          icon={
            <SupportAgentIcon
              sx={{
                fontSize: fontSize,
                borderRadius: "50%",
                padding: "20px",
                color: "#fff",
                backgroundColor: "#00a0d0",
                border: "4px solid #fff",
              }}
              className={`${classes.gradientText} ${classes.color}`}
            />
          }
        />
      </div>
      <div className={classes.cardContainerRight}>
        <WhyUsCard
          heading={"Meeting Spaces & Cabins Availability"}
          text={
            "Feel free to use meeting rooms whenever you need them to suit your requirements and schedule."
          }
          icon={
            <GroupsIcon
              sx={{
                fontSize: fontSize,
                borderRadius: "50%",
                padding: "20px",
                color: "#fff",
                backgroundColor: "#FCAB14",
                border: "4px solid #fff",
              }}
              className={`${classes.gradientText} ${classes.color}`}
            />
          }
          right={true}
        />
      </div>
    </div>
  );
}

export default VirtualBenefits;
