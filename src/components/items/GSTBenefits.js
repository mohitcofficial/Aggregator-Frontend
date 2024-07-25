import ArticleIcon from "@mui/icons-material/Article";
import BusinessIcon from "@mui/icons-material/Business";
import GavelIcon from "@mui/icons-material/Gavel";
import HandshakeIcon from "@mui/icons-material/Handshake";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PercentIcon from "@mui/icons-material/Percent";
import classes from "./WhyUs.module.css";
import WhyUsCard from "./WhyUsCard";

function GSTBenefits() {
  const fontSize = { lg: 100, md: 50, sm: 44, xs: 36 };

  return (
    <div className={classes.container}>
      <div className={classes.backgroundDesign}></div>
      <div className={classes.cardContainerleft}>
        <WhyUsCard
          heading={"Legal Recognition & Compliance"}
          text={
            "Registering for GST provides a firm with legal recognition as a supplier of goods or services, thereby confirming its status as an authorized entity."
          }
          icon={
            <GavelIcon
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
          heading={"Input Tax Credit (ITC)"}
          text={
            "Registered businesses can offset the GST they collect on sales with the GST they pay on purchases through Input Tax Credit, reducing their overall tax liability."
          }
          icon={
            <PercentIcon
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
          heading={"Competitive Advantage & Trust Factor"}
          text={
            "Builds trust and credibility among clients and partners due to compliance with tax regulations."
          }
          icon={
            <HandshakeIcon
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
          heading={"Cost Effective"}
          text={
            "Budget-friendly solutions for cost-effective business operations"
          }
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
          heading={"Business Expansion Opportunities"}
          text={
            "Eligibility to participate in government tenders and contracts requiring GST registration."
          }
          icon={
            <BusinessIcon
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
          heading={"GST Composition Schemes"}
          text={
            "The Composition Scheme under GST enables small businesses to pay tax at a lower, fixed rate"
          }
          icon={
            <ArticleIcon
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

export default GSTBenefits;
