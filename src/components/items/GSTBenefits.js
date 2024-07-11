import ArticleIcon from "@mui/icons-material/Article";
import BusinessIcon from "@mui/icons-material/Business";
import GavelIcon from "@mui/icons-material/Gavel";
import HandshakeIcon from "@mui/icons-material/Handshake";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PercentIcon from "@mui/icons-material/Percent";
import classes from "./WhyUs.module.css";
import WhyUsCard from "./WhyUsCard";

function GSTBenefits() {
  return (
    <div className={classes.container}>
      <WhyUsCard
        heading={"Legal Recognition & Compliance"}
        text={
          "Registering for GST provides a firm with legal recognition as a supplier of goods or services, thereby confirming its status as an authorized entity."
        }
        icon={
          <GavelIcon
            // fontSize="large"
            sx={{
              color: "#FCAB14",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color} ${classes.icon}`}
          />
        }
      />
      <WhyUsCard
        heading={"Input Tax Credit (ITC)"}
        text={
          "Registered businesses can offset the GST they collect on sales with the GST they pay on purchases through Input Tax Credit, reducing their overall tax liability."
        }
        icon={
          <PercentIcon
            sx={{
              color: "#FCAB14",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"Competitive Advantage & Trust Factor"}
        text={
          "Builds trust and credibility among clients and partners due to compliance with tax regulations."
        }
        icon={
          <HandshakeIcon
            sx={{
              color: "#FCAB14",
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
              color: "#FCAB14",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"Business Expansion Opportunities"}
        text={
          "Eligibility to participate in government tenders and contracts requiring GST registration."
        }
        icon={
          <BusinessIcon
            sx={{
              color: "#FCAB14",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"GST Composition Schemes"}
        text={
          "The Composition Scheme under GST enables small businesses to pay tax at a lower, fixed rate"
        }
        icon={
          <ArticleIcon
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

export default GSTBenefits;
